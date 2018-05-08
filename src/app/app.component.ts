import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';
import { ApiService } from './services/api.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: Observable<{}>;
  showLoginModal: Boolean = false;
  user: any;
  token: any;
  section: String = 'main';
  author: String = 'Rudi Strydom <iam@thatguy.co.za>';

  constructor(
    db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public api: ApiService
  ) {
    this.afAuth.authState.subscribe(User => {
      this.user = User;

      if (User) {
        if (!tokenNotExpired()) {
          console.log("Getting a new token");
          User.getIdToken(true).then(token => {
            localStorage.setItem('token', token);
            this.token = token;
          });
        } else {
          console.log("Already have a token");
        }
      } else {
        console.log("Logged out, destroying token");
        localStorage.clear();
        this.token = false;
      }
    });
  }

  setSection(section) {
    this.section = section;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  onCloseModal() {
    this.showLoginModal = false;
  }

  select(event) {
    if (!event) return false;

    event.target.focus();
    event.target.select();
  }
}
