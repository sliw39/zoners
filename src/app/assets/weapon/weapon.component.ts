import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from './weapon.model';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {

  @Input()
  private data: Weapon;

  constructor() { }

  ngOnInit() {
  }

}
