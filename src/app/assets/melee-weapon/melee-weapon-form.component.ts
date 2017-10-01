import { Component, OnInit, Input } from '@angular/core';
import { MeleeWeapon } from './melee-weapon.model';
import { MeleeWeaponService } from './melee-weapon.service';

@Component({
  selector: 'app-weapon-form',
  templateUrl: './weapon-form.component.html',
  styleUrls: ['./weapon-form.component.css'],
  providers: [ MeleeWeaponService ]
})
export class WeaponFormComponent implements OnInit {

  @Input() data: MeleeWeapon;

  constructor(private weaponService: MeleeWeaponService) { }

  ngOnInit() {
  }

  save() {
    this.weaponService.addOrUpdate(this.data);
  }

  delete() {
    this.weaponService.delete(this.data);
  }
}
