import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from './weapon.model';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.less']
})
export class WeaponComponent implements OnInit {

  @Input()
  private data: Weapon;

  constructor() { }

  ngOnInit() {
  }

  getImageUrl() {
    return `assets/images/weapons/${this.data.name}.png`;
  }

}
