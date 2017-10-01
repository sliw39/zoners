import { Component, OnInit } from '@angular/core';
import { MeleeWeapon } from './melee-weapon.model';

@Component({
  selector: 'app-melee-weapon',
  templateUrl: './melee-weapon.component.html',
  styleUrls: ['./melee-weapon.component.css']
})
export class MeleeWeaponComponent implements OnInit {

  private data: MeleeWeapon = {
    detail: "",
    durability: 10,
    handling: 14,
    id: "0",
    name: "Shotel",
    power: {
      dice: 4,
      bonus: 4
    },
    price: 10000,
    slash: {
      attack: {dice: 5},
      defense: {dice: 3}
    },
    smash: {
      attack: {dice: 1},
      defense: {dice: 1}
    },
    thrust: {
      attack: {dice: 2},
      defense: {dice: 4}
    },
    weight: 2
  };

  constructor() { }

  ngOnInit() {
  }

  getImageUrl() {
    return "";
  }

}
