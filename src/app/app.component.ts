import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
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

  constructor(db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.data = db.object('hello').valueChanges();
    this.afAuth.authState.subscribe(User => {
      this.user = User;
    });
  }

  getToken() {
    if (!this.user) return false;
    return this.user.getIdToken(true);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  onCloseModal() {
    this.showLoginModal = false;
  }
}
