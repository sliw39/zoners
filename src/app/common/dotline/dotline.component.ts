import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dotline',
  templateUrl: './dotline.component.html',
  styleUrls: ['./dotline.component.less']
})
export class DotlineComponent implements OnInit {

  @Input() data: number;
  @Output() dataChanged = new EventEmitter<number>();

  @Input() master = false;
  @Input() max = 6;
  @Input() edit = false;

  constructor() { }

  ngOnInit() {
  }

}
