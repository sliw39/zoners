import { Component, OnInit, Input } from '@angular/core';
import { RollValue } from './dice.model';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  @Input() private data: RollValue;
  @Input() private edit = false;

  constructor() { }

  ngOnInit() {
  }

}
