import { Component, OnInit, Input } from '@angular/core';
import { Misc } from './misc.model';
import { DynamicItemStat } from '../item.model';
import { MiscService } from './misc.service';

@Component({
  selector: 'app-misc-form',
  templateUrl: './misc-form.component.html',
  styleUrls: ['./misc-form.component.less'],
  providers: [ MiscService ]
})
export class MiscFormComponent implements OnInit {

  @Input() data: Misc;

  constructor(private miscService: MiscService) { }

  ngOnInit() {
  }

  initDynamicField(field: DynamicItemStat) {
    switch(field.type) {
      case "DOT"      : field.data = 0; break;
      case "ROLLVALUE": field.data = { dice: 0, bonus: 0}; break;
      case "STRING"   : field.data = ""; break;
    }
  }

  addBlock() {
    this.data.blocks.push({
      label: "",
      type: "DOT",
      data: 1
    });
  }

  addLine() {
    this.data.lines.push({
      label: "",
      type: "DOT",
      data: 1
    });
  }

  removeBlock(item: DynamicItemStat) {
    this.data.blocks.splice(this.data.blocks.indexOf(item));
  }

  removeLine(item: DynamicItemStat) {
    this.data.lines.splice(this.data.lines.indexOf(item));    
  }

  save() {
    this.miscService.addOrUpdate(this.data);
  }

  delete() {
    this.miscService.delete(this.data);
  }
}
