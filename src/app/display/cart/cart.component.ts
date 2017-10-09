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
    this.cartService.cartChanged.subscribe((items: CartItem[]) => {
      this.items = items;
    });
  }

}
