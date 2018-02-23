import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.scss']
})
export class ZonesComponent implements OnInit {

  zones: any;
  zone_sub: any;
  zone_keys: any;
  max_zones: 16;

  zone: {
    'enabled': false,
    'name': "",
    'number': 0
  };

  constructor(public db: AngularFireDatabase) {
    this.zone_sub = db.object('configuration/zones').valueChanges().subscribe(zones => {
      this.zones = zones;
      this.zone_keys = Object.keys(zones);
      console.log(zones, this.zone_keys);
    });
  }

  ngOnInit() {}

   ngOnDestroy() {
    if (this.zone_sub) this.zone_sub.unsubscribe();
  }
}
