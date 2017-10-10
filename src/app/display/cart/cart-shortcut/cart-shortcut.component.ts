import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart.model';
import { PrintService } from '../../../common/print/print.service';
import { CartComponent } from '../cart.component';

@Component({
  selector: 'app-cart-shortcut',
  templateUrl: './cart-shortcut.component.html',
  styleUrls: ['./cart-shortcut.component.less']
})
export class CartShortcutComponent implements OnInit {

  counter: number;

  constructor(private cartService: CartService, private printService: PrintService) {
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

  printCart() {
    this.printService.print(CartComponent).then(() => this.cartService.clear());
  }

}
