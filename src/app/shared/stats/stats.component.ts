import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

declare var google: any;
declare var moment: any;

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  health_sub: any;
  stats_sub: any;
  chart_poller_timeout: any;
  interval: Number = 300;
  health_data: any = {};
  stats_data: any = {};

  constructor(public db: AngularFireDatabase) {
     this.health_sub = db.object('health').valueChanges().subscribe(health => {
      this.health_data = health;
      this.drawGraph({
        'data': health,
        'stats': this.stats_data,
        'interval': this.interval
      });
    });

    this.stats_sub = db.object('stats').valueChanges().subscribe(stats => {
      this.stats_data = stats;
      this.drawGraph({
        'data': this.health_data,
        'stats': stats,
        'interval': this.interval
      });
    });
  }

  drawGraph(input_data = {}) {
    var interval = input_data['interval'] || 300;
    var stats = input_data['stats'] || {};
    var time_now = moment().unix();
    var data = new google.visualization.DataTable();

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'Alive');

    // Numeric updates
    if (interval !== 'month' && interval !== 'year') {
      var period_start = moment().subtract(interval, 'seconds');
      var start_ts = period_start.unix();

      if (input_data && input_data['data']) {
        for(var i = start_ts; i <= time_now; i++) {
          if (input_data['data'][i]) {
            data.addRow([
              moment.unix(i).toDate(),
              1
            ]);
          }
        }
      }
    }

    var options = {
      pointSize: 4,
      legend: 'none',
      colors: [
        '#007aff',
        '#bada55',
      ],
      vAxis: {
        minValue: 0,
        maxValue: 2
      },
      hAxis: {
        viewWindow: {
          min: period_start.toDate(),
          max: moment().toDate()
        },
        gridlines: {
          count: -1,
          units: {
            days: {format: ['MMM dd']},
            hours: {format: ['HH:mm', 'ha']},
          }
        },
        minorGridlines: {
          units: {
            hours: {format: ['hh:mm:ss a', 'ha']},
            minutes: {format: ['HH:mm a Z', ':mm']}
          }
        }
      }
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  changeInterval(e) {
    this.interval = e.target.value || 300;
    this.drawGraph({
      'data': this.health_data,
      'interval': this.interval,
      'stats': this.stats_data,
    });
  }

  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  chartPoller() {
    console.log(window.hasOwnProperty('google'));
    if (!window.hasOwnProperty('google') || !window.hasOwnProperty('moment') || typeof window['google'] !== "object" || typeof window['moment'] !== "function") {
      this.chart_poller_timeout = setTimeout(this.chartPoller(), 3000);
      return false;
    }

    google.charts.load('current', {'packages':['corechart', 'timeline']});
    google.charts.setOnLoadCallback(this.drawGraph);
  }

  ngOnInit() {
    this.chartPoller();
  }

  ngOnDestroy() {
    if (this.health_sub) this.health_sub.unsubscribe();
    if (this.stats_sub) this.stats_sub.unsubscribe();
    clearTimeout(this.chart_poller_timeout);
  }
}
