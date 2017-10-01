import { Component, OnInit } from '@angular/core';
import { MeleeWeapon } from './melee-weapon.model';

@Component({
  selector: 'app-melee-weapon',
  templateUrl: './melee-weapon.component.html',
  styleUrls: ['./melee-weapon.component.css']
})
export class MeleeWeaponComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getImageUrl() {
    return "";
  }

}
