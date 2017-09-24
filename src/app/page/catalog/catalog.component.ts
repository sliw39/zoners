import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item, ItemType } from '../../assets/item.model';
import { Weapon } from '../../assets/weapon/weapon.model';
import { Observable } from 'rxjs/Observable';
import { Equipment } from '../../assets/equipment/equipment.model';
import { WeaponService } from '../../assets/weapon/weapon.service';
import { EquipmentService } from '../../assets/equipment/equipment.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [ EquipmentService, WeaponService ]
})
export class CatalogComponent implements OnInit {

  weapons: Observable<Weapon[]>;
  equipments: Observable<Equipment[]>;

  currentItemType: ItemType;
  currentItem: Item;

  @Output() selectedItemChange = new EventEmitter<{
    itemType: ItemType;
    item: Item;
  }>();

  constructor(
    private equipmentService: EquipmentService,
    private weaponService: WeaponService
  ) { }

  ngOnInit() {
    this.weapons = this.weaponService.list();
    this.equipments = this.equipmentService.list();
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
    }

    this.selectedItemChange.emit({
      item: this.currentItem,
      itemType: this.currentItemType
    });
  }

  selectItem(itemType: ItemType, item: Item) {
    this.currentItemType = itemType;
    this.currentItem = item;

    this.selectedItemChange.emit({
      item: this.currentItem,
      itemType: this.currentItemType
    });
  }

}
