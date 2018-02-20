import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events_sub: any;
  event_length: any = 0;
  events: any;
  event_keys: Array<String>;

  constructor(public db: AngularFireDatabase) {
    this.events_sub = db.object('events').valueChanges().subscribe(events => {
      if (!events) {
        this.events = {};
        this.event_length = 0;
        this.event_keys = [];
        return false;
      }
      this.events = events;
      this.event_length = Object.keys(events).length;
      this.event_keys = Object.keys(events);
    });
  }

  delete(index) {
    this.db.object('events/' + index).remove();
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.events_sub) this.events_sub.unsubscribe();
  }
}
