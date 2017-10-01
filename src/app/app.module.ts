import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { ItemFilterPipe } from './common/item-filter.pipe';
import { CartService } from './display/cart/cart.service';
import { ToolsService } from './common/tools.service';
import { EquipmentFormComponent } from './assets/equipment/equipment-form.component';
import { FsContentDirective } from './common/fullscreen/fs-content.directive';
import { FullscreenComponent } from './common/fullscreen/fullscreen.component';
import { FullscreenService } from './common/fullscreen/fullscreen.service';
import { ClickStopPropagationDirective } from './common/events/click-stop-propagation.directive';
import { WeaponFormComponent } from './assets/weapon/weapon-form.component';
import { CartBadgeComponent } from './display/cart/cart-badge/cart-badge.component';
import { MeleeWeaponComponent } from './assets/melee-weapon/melee-weapon.component';
import { MeleeWeaponFormComponent } from './assets/melee-weapon/melee-weapon-form.component';

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
    CatalogComponent,
    ItemFilterPipe,
    EquipmentFormComponent,
    FsContentDirective,
    FullscreenComponent,
    ClickStopPropagationDirective,
    WeaponFormComponent,
    CartBadgeComponent,
    MeleeWeaponComponent,
    MeleeWeaponFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ CartService, ToolsService, FullscreenService ],
  bootstrap: [AppComponent],
  entryComponents: [
    EquipmentFormComponent,
    WeaponFormComponent,
    MeleeWeaponFormComponent
  ]
})
export class AppModule { }
