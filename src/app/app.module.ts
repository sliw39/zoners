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
import { EquipmentComponent } from './assets/equipment/equipment.component';
import { PrintablePageComponent } from './display/printable-page/printable-page.component';
import { CartComponent } from './display/cart/cart.component';
import { CatalogComponent } from './page/catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponComponent,
    DiceComponent,
    RangePipe,
    DotlineComponent,
    EquipmentComponent,
    PrintablePageComponent,
    CartComponent,
    CatalogComponent
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
