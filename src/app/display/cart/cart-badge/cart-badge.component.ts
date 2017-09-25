import { Component, OnInit, Input } from '@angular/core';
import { Item, ItemType } from '../../../assets/item.model';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent implements OnInit {

  @Input() data: Item;
  @Input() type: ItemType;

  constructor() { }

  ngOnInit() {
  }

  addToCart() {
  }
}
