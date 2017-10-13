import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-fs-content]'
})
export class FsContentDirective {
  data: any;

  constructor(public viewContainerRef: ViewContainerRef) { }

}
