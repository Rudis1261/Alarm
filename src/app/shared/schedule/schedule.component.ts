import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  schedule: Object;
  schedule_sub: any;
  schedule_keys: Array<String>;

  constructor(public db: AngularFireDatabase) {
    this.schedule_sub = db.object('/configuration/schedule').valueChanges().subscribe(schedule => {
      this.schedule = schedule;
      this.schedule_keys = Object.keys(schedule);
    });
  }

  toggle(event) {
    if (!event) return false;
    let reference = ['/configuration/schedule', event.index].join('/');
    this.db.object(reference).set(event.state);
  }

  getTimeRangeFromIndex(index) {
    return index + "-" + (Number(index) + 1);
  }


  ngOnDestroy() {
    if (this.schedule_sub) this.schedule_sub.unsubscribe();
  }

  ngOnInit() {}
}
