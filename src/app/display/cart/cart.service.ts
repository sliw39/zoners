import { Injectable, EventEmitter } from '@angular/core';
import { Equipment } from '../../assets/equipment/equipment.model';
import { Weapon } from '../../assets/weapon/weapon.model';
import { Item, ItemType } from '../../assets/item.model';
import * as _ from "lodash";
import { Observable } from 'rxjs/Observable';

interface CartItem {
  item: Item;
  count: number;
  type: ItemType;
}

function subcriber() {

}

@Injectable()
export class CartService {
  constructor() { }

  private cart: CartItem[] = []
  public cartChanged = new EventEmitter<CartItem[]>();

  add(item: Item, type: ItemType, count = 1) {
    let cartItem = _.findWhere(this.cart, i => i.item === item);
    if(!cartItem) {
      cartItem = {
        item: item,
        type: type,
        count: 0
      }
      this.cart.push(cartItem);
    }

    cartItem.count += count;

    this.cartChanged.emit(cartItem);
  }

  increment(cartItem: CartItem) {
    cartItem.count++;
    this.cartChanged.emit(this.cart);
  }
  decrement(cartItem: CartItem) {
    if(--cartItem.count <= 0) {
      this.cart.splice(this.cart.indexOf(cartItem), 1);
    }
    this.cartChanged.emit(this.cart);
  }
}
