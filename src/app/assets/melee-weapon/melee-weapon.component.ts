import { Component, OnInit, Input } from '@angular/core';
import { MeleeWeapon } from './melee-weapon.model';

@Component({
  selector: 'app-melee-weapon',
  templateUrl: './melee-weapon.component.html',
  styleUrls: ['./melee-weapon.component.less']
})
export class MeleeWeaponComponent implements OnInit {

  @Input() data: MeleeWeapon;

  constructor() { }

  ngOnInit() {
  }

  getImageUrl() {
    return "";
  }

}
