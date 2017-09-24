import { Injectable, EventEmitter } from '@angular/core';
import { Equipment } from '../../assets/equipment/equipment.model';
import { Weapon } from '../../assets/weapon/weapon.model';
import { Item, ItemType } from '../../assets/item.model';
import * as _ from "lodash";

interface CartItem<T extends Item> {
  item: T;
  count: number;
}

interface Cart {
  weapons: CartItem<Weapon>[];
  equipments: CartItem<Equipment>[]
}

@Injectable()
export class CartService {
  constructor() { }

  private cart = {
    weapons: [],
    equipments: []
  }
  public cartChanged = new EventEmitter<Cart>();

  add(item: Item, type: ItemType, count = 1) {
    switch(type) {
      case "WEAPON":
        this.addImpl(item, this.cart.weapons, count);
        break;
      case "EQUIPMENT":
        this.addImpl(item, this.cart.equipments, count);
        break;
      default:
        throw "Unknown type " + type;
    }
    this.cartChanged.emit(this.cart);
  }

  private addImpl<T extends Item>(item: T, list: CartItem<T>[], count: number) {
    let itemTmp = _.find<CartItem<T>>(this.cart.weapons, it => it.item.id === item.id);
    if(!itemTmp) {
      itemTmp = {item: item, count: 0};
      this.cart.weapons.push(itemTmp);
    }
    itemTmp.count += count;
  }
}
