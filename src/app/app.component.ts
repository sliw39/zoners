import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Weapon } from './assets/weapon/weapon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: Observable<firebase.User>;
  msgVal: string = '';

  weapon: Weapon = {
    id: 0,
    name: "TAR-21",
    detail: "",

    weight: 3,
    ammo: 10,
    ammotype: "5.56",
    power: {
      dice: 4,
      bonus: 3
    },

    handling: 10,
    accuracy: {
      veryshort: { dice: 3 },
      short: { dice: 6 },
      medium: { dice: 3 },
      long: { dice: 3 },
      verylong: { dice: 1 }
    },

    price: 0
  }

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.user = this.afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
