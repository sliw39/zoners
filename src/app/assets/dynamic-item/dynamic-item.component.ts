import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ElementRef, OnChanges, SimpleChanges, Type } from '@angular/core';
import { ItemType, Item } from '../item.model';
import { DynamicItemHookDirective } from './dynamic-item-hook.directive';
import { ArtifactComponent } from '../artifact/artifact.component';
import { EquipmentComponent } from '../equipment/equipment.component';
import { MeleeWeaponComponent } from '../melee-weapon/melee-weapon.component';
import { MiscComponent } from '../misc/misc.component';
import { WeaponComponent } from '../weapon/weapon.component';

@Component({
  selector: 'app-dynamic-item',
  templateUrl: './dynamic-item.component.html',
  styleUrls: ['./dynamic-item.component.less'],
  entryComponents: [ EquipmentComponent, WeaponComponent, MeleeWeaponComponent, ArtifactComponent, MiscComponent ]
})
export class DynamicItemComponent implements OnInit, OnChanges {
  
  @Input() data: Item;
  @Input() itemType: ItemType;
  
  @ViewChild(DynamicItemHookDirective) fsContent: DynamicItemHookDirective;
  
  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private elRef: ElementRef
    ) {}
    
    ngOnInit() {
      this.ngOnChanges(null);
    }
    
    ngOnChanges(changes: SimpleChanges): void {
      if(this.data && this.itemType) {
        let t: Type<{}>;

        switch(this.itemType) {
          case "ARTIFACT": t = ArtifactComponent; break;
          case "EQUIPMENT": t = EquipmentComponent; break;
          case "MELEE": t = MeleeWeaponComponent; break;
          case "MISC": t = MiscComponent; break;
          case "WEAPON": t = WeaponComponent; break;
          default: return;
        }

        this.show(t, this.data);
      }
    }

  
    show(component: Type<{}>, data?: any) {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      let viewContainerRef = this.fsContent.viewContainerRef;
      viewContainerRef.clear();
  
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<DynamicItemHookDirective>componentRef.instance).data = data;
    }
}
