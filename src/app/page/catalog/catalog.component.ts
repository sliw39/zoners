import { Component, OnInit } from '@angular/core';
import { Item } from '../../assets/item.model';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [ CatalogService ]
})
export class CatalogComponent implements OnInit {

  weapons: Item[] = [];
  equipments: Item[] = [];

  constructor(
    private catalogService: CatalogService
  ) { }

  ngOnInit() {
    this.catalogService.getWeapons().then(lst => this.weapons = lst);
  }

}
