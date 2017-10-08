import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart.model';

@Component({
  selector: 'app-cart-shortcut',
  templateUrl: './cart-shortcut.component.html',
  styleUrls: ['./cart-shortcut.component.less']
})
export class CartShortcutComponent implements OnInit {

  counter: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.cartChanged.subscribe((cart: CartItem[]) => {
      let count = 0
      for(let item of cart) {
        count += item.count;
      }
      this.counter = count;
    });
  }

}
