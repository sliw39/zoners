import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintComponent } from './print.component';

describe('FrintComponent', () => {
  let component: FrintComponent;
  let fixture: ComponentFixture<FrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
