import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type, ElementRef } from '@angular/core';
import { FsContentDirective } from './fs-content.directive';
import { FullscreenService } from './fullscreen.service';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.css']
})
export class FullscreenComponent implements OnInit {

  @ViewChild(FsContentDirective) fsContent: FsContentDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private elRef: ElementRef,
    private fsService: FullscreenService
  ) {
    fsService.setupFsComponent(this);
  }

  ngOnInit() {
    this.hide();
  }

  show(component: Type<{}>, data?: any) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    let viewContainerRef = this.fsContent.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<FsContentDirective>componentRef.instance).data = data;

    (this.elRef.nativeElement as HTMLElement).style.display = "flex";
  }

  hide() {
    (this.elRef.nativeElement as HTMLElement).style.display = "none";
  }

}
