import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRequireRights]'
})
export class RequireRightsDirective {

  private displayType = "block";

  constructor(private viewContainerRef: ViewContainerRef) { 
    this.displayType = (this.viewContainerRef.element.nativeElement as HTMLElement).style.display;
  }

  private show() {
    (this.viewContainerRef.element.nativeElement as HTMLElement).style.display = this.displayType;
  }

  private hide() {
    (this.viewContainerRef.element.nativeElement as HTMLElement).style.display = "none";
  }

}
