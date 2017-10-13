import { Injectable, EventEmitter, Type } from '@angular/core';
import { PrintComponent } from './print.component';

@Injectable()
export class PrintService {

  private printComponent: PrintComponent;

  constructor() { }

  setupPrintComponent(component: PrintComponent) {
    this.printComponent = component;
  }

  print(component: Type<{}>, data?: any) {
    if (this.printComponent) {
      return this.printComponent.print(component, data);
    } else {
      return Promise.reject(null);
    }
  }

}
