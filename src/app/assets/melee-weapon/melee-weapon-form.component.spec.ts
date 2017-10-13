import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleeWeaponFormComponent } from './melee-weapon-form.component';

describe('MeleeWeaponFormComponent', () => {
  let component: MeleeWeaponFormComponent;
  let fixture: ComponentFixture<MeleeWeaponFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeleeWeaponFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeleeWeaponFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
