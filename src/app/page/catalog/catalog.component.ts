import { Component, OnInit } from '@angular/core';
import { Item } from '../../assets/item.model';
import { CatalogService } from './catalog.service';
import { Weapon } from '../../assets/weapon/weapon.model';
import { Observable } from 'rxjs/Observable';
import { Equipment } from '../../assets/equipment/equipment.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [ CatalogService ]
})
export class CatalogComponent implements OnInit {

  weapons: Observable<Weapon[]>;
  equipments: Observable<Equipment[]>;

  constructor(
    private catalogService: CatalogService
  ) { }

  ngOnInit() {
    this.weapons = this.catalogService.getWeapons();
    this.equipments = this.catalogService.getEquipments();
  }

}
