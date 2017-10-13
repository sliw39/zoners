import { Component, OnInit, OnChanges, Input, SimpleChanges, ElementRef } from '@angular/core';
import { ItemType, Item } from '../../assets/item.model';

const DECAY = 5;

@Component({
  selector: 'app-item-stack',
  templateUrl: './item-stack.component.html',
  styleUrls: ['./item-stack.component.css']
})
export class ItemStackComponent implements OnInit, OnChanges {
  
  @Input() items: Item[];
  @Input() itemType: ItemType;
  
  constructor(private elementRef: ElementRef) { }
  
  ngOnInit() {
    this.ngOnChanges(null);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    let items = (this.elementRef.nativeElement as Element).children;
    for(let i=0; i<items.length; i++) {
      let item = items[i];
      if(item instanceof HTMLElement) {
        item.style.top = (i * DECAY) + "px";
        item.style.left = (i * DECAY) + "px";
      }
    }
  }
}
