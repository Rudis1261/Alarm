import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import * as _ from 'lodash';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.scss']
})
export class ZonesComponent implements OnInit {

  zones: any = {};
  zone_sub: any;
  zone_keys: any = [];
  max_zones: Number = 10;
  editing: Boolean = false;

  active_zone: any = {
    number: 0,
    enabled: false,
    name: '',
    description: '',
    state: 'open'
  };

  constructor(public db: AngularFireDatabase) {
    this.zone_sub = db.object('configuration/zones').valueChanges().subscribe(zones => {
      this.zones = zones;
      this.zone_keys = Object.keys(zones);
      if (this.zone_keys.length) {
        this.zone_keys.sort((a, b) => {
          if (this.zones[a]['number'] > this.zones[b]['number']) return 1;
          return -1;
        });
      }
    });
  }

  toggle(zone) {
    zone.enabled = !zone.enabled;
    this.save(zone);
  }

  delete(zone) {
    if (!zone || !zone.number) return false;
    this.db.object('configuration/zones/' + zone.number).remove();
  }

  save(zone) {
    if (!zone || !zone.number) return false;
    this.db.object('configuration/zones/' + zone.number).set(zone);
  }

  add_or_edit(zone) {
    this.active_zone = { enabled: false };
    this.editing = true;
    if (zone === false) {
      this.active_zone.number = this.zones ? (_.maxBy(this.zones, 'number')['number'] + 1) : 1;
    } else {
      this.active_zone = zone;
    }
  }

  on_save(zone) {
    if (!zone) return false;
    console.log("SAVING ZONE", zone);
    this.save(zone);
    this.editing = false;
  }

  on_delete(zone) {
    if (!zone) return false;
    console.log("DELETING ZONE", zone);
    this.delete(zone);
    this.editing = false;
  }

  on_close() {
    this.editing = false;
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.zone_sub) this.zone_sub.unsubscribe();
  }
}
