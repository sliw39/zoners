import { Component, OnInit, Input } from '@angular/core';
import { Artifact } from './artifact.model';
import { DynamicItemStat } from '../item.model';
import { ArtifactService } from './artifact.service';

@Component({
  selector: 'app-artifact-form',
  templateUrl: './artifact-form.component.html',
  styleUrls: ['./artifact-form.component.css'],
  providers: [ ArtifactService ]
})
export class ArtifactFormComponent implements OnInit {

  @Input() data: Artifact;

  constructor(private artifactService: ArtifactService) { }

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
    this.artifactService.addOrUpdate(this.data);
  }

  delete() {
    this.artifactService.delete(this.data);
  }
}
