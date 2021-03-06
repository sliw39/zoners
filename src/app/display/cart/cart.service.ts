import { Injectable, EventEmitter } from '@angular/core';
import { Equipment } from '../../assets/equipment/equipment.model';
import { Weapon } from '../../assets/weapon/weapon.model';
import { Item, ItemType } from '../../assets/item.model';
import * as _ from "lodash";
import { Observable } from 'rxjs/Observable';
import { CartItem } from './cart.model';
import { PrintService } from '../../common/print/print.service';

@Injectable()
export class CartService {
  constructor(private printService: PrintService) { }

  private cart: CartItem[] = []
  public cartChanged = new EventEmitter<CartItem[]>();

  add(item: Item, type: ItemType, count = 1) {
    let cartItem = _.find(this.cart, i => i.item === item);
    if(!cartItem) {
      cartItem = {
        item: item,
        type: type,
        count: 0
      }
      this.cart.push(cartItem);
    }

    cartItem.count += count;

    this.cartChanged.emit(this.cart);
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

  getCart() {
    return this.cart;
  }

  clear() {
    this.cart = [];
    this.cartChanged.emit(this.cart);
  }

}
