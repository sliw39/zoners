import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from './weapon.model';
import { WeaponService } from './weapon.service';

@Component({
  selector: 'app-weapon-form',
  templateUrl: './weapon-form.component.html',
  styleUrls: ['./weapon-form.component.less'],
  providers: [ WeaponService ]
})
export class WeaponFormComponent implements OnInit {

  @Input() data: Weapon;

  constructor(private weaponService: WeaponService) { }

  ngOnInit() {
  }

  save() {
    this.weaponService.addOrUpdate(this.data);
  }

  delete() {
    this.weaponService.delete(this.data);
  }
}
