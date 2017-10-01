import { Component, OnInit, Input } from '@angular/core';
import { Item, ItemType } from '../../../assets/item.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent implements OnInit {

  @Input() data: Item;
  @Input() type: ItemType;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.add(this.data, this.type);
  }
}
