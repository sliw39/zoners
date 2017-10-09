import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type, ElementRef } from '@angular/core';
import { PrintContentDirective } from './print-content.directive';
import { PrintService } from './print.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.less']
})
export class PrintComponent implements OnInit {

  @ViewChild(PrintContentDirective) printContent: PrintContentDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private elRef: ElementRef,
    private fsService: PrintService
  ) {
    fsService.setupPrintComponent(this);
  }

  ngOnInit() {
  }

  print(component: Type<{}>, data?: any) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    let viewContainerRef = this.printContent.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<PrintContentDirective>componentRef.instance).data = data;

    (this.elRef.nativeElement as HTMLElement).style.display = "block";

    setTimeout(() => {
      window.print();
    }, 0);
  }
}
