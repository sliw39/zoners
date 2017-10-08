import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartShortcutComponent } from './cart-shortcut.component';

describe('CartShortcutComponent', () => {
  let component: CartShortcutComponent;
  let fixture: ComponentFixture<CartShortcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartShortcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
