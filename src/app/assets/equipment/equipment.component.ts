import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from './equipment.model';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.less']
})
export class EquipmentComponent implements OnInit {

  @Input() data: Equipment;

  constructor() { }

  ngOnInit() {
  }

}
