import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintablePageComponent } from './printable-page.component';

describe('PrintablePageComponent', () => {
  let component: PrintablePageComponent;
  let fixture: ComponentFixture<PrintablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintablePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
