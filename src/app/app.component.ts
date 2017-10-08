import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Weapon } from './assets/weapon/weapon.model';
import { Equipment } from './assets/equipment/equipment.model';
import { Item, ItemType } from './assets/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  user: Observable<firebase.User>;
  msgVal: string = '';

  currentItemType: ItemType;
  currentItem: Item;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.user = this.afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  selectItem(itemDesc: { itemType: ItemType; item: Item; }) {
    this.currentItem = itemDesc.item;
    this.currentItemType = itemDesc.itemType;
  }
}
