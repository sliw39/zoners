import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
import { CartComponent } from './display/cart/cart.component';
import { CatalogComponent } from './page/catalog/catalog.component';
import { ItemFilterPipe } from './common/item-filter.pipe';
import { CartService } from './display/cart/cart.service';
import { ToolsService } from './common/tools.service';
import { EquipmentFormComponent } from './assets/equipment/equipment-form.component';
import { FsContentDirective } from './common/fullscreen/fs-content.directive';
import { FullscreenComponent } from './common/fullscreen/fullscreen.component';
import { FullscreenService } from './common/fullscreen/fullscreen.service';
import { PrintContentDirective } from './common/print/print-content.directive';
import { PrintComponent } from './common/print/print.component';
import { PrintService } from './common/print/print.service';
import { ClickStopPropagationDirective } from './common/events/click-stop-propagation.directive';
import { WeaponFormComponent } from './assets/weapon/weapon-form.component';
import { CartBadgeComponent } from './display/cart/cart-badge/cart-badge.component';
import { MeleeWeaponComponent } from './assets/melee-weapon/melee-weapon.component';
import { MeleeWeaponFormComponent } from './assets/melee-weapon/melee-weapon-form.component';
import { ArtifactComponent } from './assets/artifact/artifact.component';
import { ArtifactFormComponent } from './assets/artifact/artifact-form.component';
import { MiscComponent } from './assets/misc/misc.component';
import { MiscFormComponent } from './assets/misc/misc-form.component';
import { DynamicItemComponent } from './assets/dynamic-item/dynamic-item.component';
import { DynamicItemHookDirective } from './assets/dynamic-item/dynamic-item-hook.directive';
import { ROUTES } from './app.routes';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { CartShortcutComponent } from './display/cart/cart-shortcut/cart-shortcut.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponComponent,
    DiceComponent,
    RangePipe,
    DotlineComponent,
    EquipmentComponent,
    CartComponent,
    CatalogComponent,
    ItemFilterPipe,
    EquipmentFormComponent,
    FsContentDirective,
    FullscreenComponent,
    PrintComponent,
    PrintContentDirective,
    ClickStopPropagationDirective,
    WeaponFormComponent,
    CartBadgeComponent,
    MeleeWeaponComponent,
    MeleeWeaponFormComponent,
    ArtifactComponent,
    ArtifactFormComponent,
    MiscComponent,
    MiscFormComponent,
    DynamicItemComponent,
    DynamicItemHookDirective,
    DashboardComponent,
    CartShortcutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ CartService, ToolsService, FullscreenService, PrintService ],
  bootstrap: [ AppComponent ],
  entryComponents: [
    EquipmentFormComponent,
    WeaponFormComponent,
    MeleeWeaponFormComponent,
    ArtifactFormComponent,
    MiscFormComponent,
    CartComponent
  ]
})
export class AppModule { }
