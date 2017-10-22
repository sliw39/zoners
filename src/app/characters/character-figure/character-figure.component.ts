import { Component, OnInit, Input } from '@angular/core';
import { Wound } from '../character.model';

@Component({
  selector: 'app-character-figure',
  templateUrl: './character-figure.component.html',
  styleUrls: ['./character-figure.component.less']
})
export class CharacterFigureComponent implements OnInit {

  @Input("data") wounds: Wound[] = []; 

  constructor() { }

  ngOnInit() {
  }

  addWound($event: MouseEvent) {
    let wound: Wound = {
      cured: false,
      description: undefined,
      intensity: "GREEN",
      location: {
        x: $event.offsetX,
        y: $event.offsetY
      }
    };
    this.wounds.push(wound);
  }

}
