import { Directive, ViewContainerRef } from '@angular/core';
import { Item } from '../item.model';

@Directive({
  selector: '[dynamic-item-hook]'
})
export class DynamicItemHookDirective {
  data: Item;

  constructor(public viewContainerRef: ViewContainerRef) { }
}
