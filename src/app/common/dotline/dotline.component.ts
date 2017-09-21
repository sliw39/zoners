import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dotline',
  templateUrl: './dotline.component.html',
  styleUrls: ['./dotline.component.css']
})
export class DotlineComponent implements OnInit {

  @Input() value: number;
  @Output() valueChanged = new EventEmitter<number>();

  @Input() master = true;
  @Input() max = 6;
  @Input() edit = false;

  constructor() { }

  ngOnInit() {
  }

}
