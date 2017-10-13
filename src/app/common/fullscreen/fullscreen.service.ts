import { Injectable, EventEmitter, Type } from '@angular/core';
import { FullscreenComponent } from './fullscreen.component';

@Injectable()
export class FullscreenService {

  private fsComponent: FullscreenComponent;

  constructor() { }

  setupFsComponent(component: FullscreenComponent) {
    this.fsComponent = component;
  }

  show(component: Type<{}>, data?: any) {
    if (this.fsComponent) {
      this.fsComponent.show(component, data);
    }
  }

  hide() {
    if (this.fsComponent) {
      this.fsComponent.hide();
    }
  }

}
