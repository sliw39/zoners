import { TestBed, inject } from '@angular/core/testing';

import { MeleeWeaponService } from './melee-weapon.service';

describe('MeleeWeaponService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeleeWeaponService]
    });
  });

  it('should be created', inject([MeleeWeaponService], (service: MeleeWeaponService) => {
    expect(service).toBeTruthy();
  }));
});
