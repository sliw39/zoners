import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Wound } from '../character.model';

@Component({
  selector: 'app-character-wound',
  templateUrl: './character-wound.component.html',
  styleUrls: ['./character-wound.component.less']
})
export class CharacterWoundComponent implements OnInit {

  @Input("data") wound: Wound;

  constructor() { }

  ngOnInit() {
  }

}
