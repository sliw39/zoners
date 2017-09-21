import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from './config/firebase.config';
import { WeaponComponent } from './assets/weapon/weapon.component';
import { DiceComponent } from './common/dice/dice.component';
import { RangePipe } from './common/range.pipe';
import { DotlineComponent } from './common/dotline/dotline.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponComponent,
    DiceComponent,
    RangePipe,
    DotlineComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
