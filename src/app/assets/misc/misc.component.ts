import { Component, OnInit, Input } from '@angular/core';
import { Misc } from './misc.model';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit {

  @Input() data: Misc;

  constructor() { }

  ngOnInit() {
  }

}
