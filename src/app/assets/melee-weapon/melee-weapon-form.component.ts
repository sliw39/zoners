import { Component, OnInit, Input } from '@angular/core';
import { MeleeWeapon } from './melee-weapon.model';
import { MeleeWeaponService } from './melee-weapon.service';

@Component({
  selector: 'app-melee-weapon-form',
  templateUrl: './melee-weapon-form.component.html',
  styleUrls: ['./melee-weapon-form.component.css'],
  providers: [ MeleeWeaponService ]
})
export class MeleeWeaponFormComponent implements OnInit {

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
