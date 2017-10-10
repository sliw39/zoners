import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CartItem } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  items: CartItem[];

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.flattenize(this.cartService.getCart());
    this.cartService.cartChanged.subscribe((items: CartItem[]) => {
      this.flattenize(items);
    });
  }

  private flattenize(items: CartItem[]) {
    let finalItemList = [];
    for(let item of items) {
      for(let i=0; i<item.count; i++) {
        finalItemList.push(item);
      }
    }
    this.items = finalItemList;
  }

}
