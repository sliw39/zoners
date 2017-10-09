import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-print-content]'
})
export class PrintContentDirective {
  data: any;

  constructor(public viewContainerRef: ViewContainerRef) { }

}
