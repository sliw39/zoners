import { Item, ItemType } from "../../assets/item.model";

export interface CartItem {
    item: Item;
    count: number;
    type: ItemType;
  }