import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from './equipment.model';
import { EquipmentService } from './equipment.service';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css'],
  providers: [ EquipmentService ]
})
export class EquipmentFormComponent implements OnInit {

  @Input() data: Equipment;

  constructor(
    private equipmentService: EquipmentService
  ) { }

  ngOnInit() {
  }

  save() {
    this.equipmentService.addOrUpdate(this.data);
  }

  delete() {
    this.equipmentService.delete(this.data);
  }

}
