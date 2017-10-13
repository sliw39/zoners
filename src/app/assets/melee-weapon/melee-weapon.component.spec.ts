import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleeWeaponComponent } from './melee-weapon.component';

describe('MeleeWeaponComponent', () => {
  let component: MeleeWeaponComponent;
  let fixture: ComponentFixture<MeleeWeaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeleeWeaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeleeWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
