import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item, ItemType } from '../../assets/item.model';
import { Weapon } from '../../assets/weapon/weapon.model';
import { Observable } from 'rxjs/Observable';
import { Equipment } from '../../assets/equipment/equipment.model';
import { WeaponService } from '../../assets/weapon/weapon.service';
import { EquipmentService } from '../../assets/equipment/equipment.service';
import { FullscreenService } from '../../common/fullscreen/fullscreen.service';
import { EquipmentFormComponent } from '../../assets/equipment/equipment-form.component';
import { WeaponFormComponent } from '../../assets/weapon/weapon-form.component';
import { MeleeWeapon } from '../../assets/melee-weapon/melee-weapon.model';
import { MeleeWeaponFormComponent } from '../../assets/melee-weapon/melee-weapon-form.component';
import { MeleeWeaponService } from '../../assets/melee-weapon/melee-weapon.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [ EquipmentService, WeaponService, MeleeWeaponService ]
})
export class CatalogComponent implements OnInit {

  weapons: Observable<Weapon[]>;
  equipments: Observable<Equipment[]>;
  meleeWeapons: Observable<MeleeWeapon[]>;

  currentItemType: ItemType;
  currentItem: Item;

  @Output() selectedItemChange = new EventEmitter<{
    itemType: ItemType;
    item: Item;
  }>();

  constructor(
    private equipmentService: EquipmentService,
    private weaponService: WeaponService,
    private meleeWeaponService: MeleeWeaponService,
    private fullscreenService: FullscreenService
  ) { }

  ngOnInit() {
    this.weapons = this.weaponService.list();
    this.equipments = this.equipmentService.list();
    this.meleeWeapons = this.meleeWeaponService.list();
  }

  createItem(itemType: ItemType) {
    this.currentItemType = itemType;
    if(itemType === "EQUIPMENT") {
      this.currentItem = {
        id: null,
        name: "",
        detail: "",
        durability: 1,
        isolation: {
          dice: 1,
          bonus: 0
        },
        price: 0,
        resistance: 0,
        set: "",
        type: "overall",
        weight: 0
      } as Equipment;
    } else if(itemType === "WEAPON") {
      this.currentItem = {
        id: null,
        name: "",
        detail: "",
        accuracy: {
          veryshort: { dice: 0 },
          short: { dice: 0 },
          medium: { dice: 0 },
          long: { dice: 0 },
          verylong: { dice: 0 }
        },
        ammo: 6,
        ammotype: "spe.",
        handling: 1,
        power: {
          dice: 0,
          bonus: 0
        },
        price: 0,
        weight: 0
      } as Weapon;
    } else if(itemType === "MELEE") {
      this.currentItem = {
        id: null,
        name: "",
        detail: "",
        price: 0,
        weight: 0,
        durability: 1,
        handling: 1,
        power: {
          dice: 0,
          bonus: 0
        },
        slash: {
          attack: { dice: 0 },
          defense: { dice: 0 }
        },
        smash: {
          attack: { dice: 0 },
          defense: { dice: 0 }
        },
        thrust: {
          attack: { dice: 0 },
          defense: { dice: 0 }
        }
      } as MeleeWeapon;
    }

    this.selectedItemChange.emit({
      item: this.currentItem,
      itemType: this.currentItemType
    });

    this.openItem(this.currentItemType, this.currentItem);
  }

  selectItem(itemType: ItemType, item: Item) {
    this.currentItemType = itemType;
    this.currentItem = item;

    this.selectedItemChange.emit({
      item: this.currentItem,
      itemType: this.currentItemType
    });
  }

  openItem(itemType: ItemType, item: Item) {
    switch(itemType) {
      case "EQUIPMENT":
        this.fullscreenService.show(EquipmentFormComponent, item);
        break;
      case "WEAPON":
        this.fullscreenService.show(WeaponFormComponent, item);
        break;
      case "MELEE":
        this.fullscreenService.show(MeleeWeaponFormComponent, item);
        break;
    }
  }

}
