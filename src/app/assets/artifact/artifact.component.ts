import { Component, OnInit, Input } from '@angular/core';
import { Artifact } from './artifact.model';

@Component({
  selector: 'app-artifact',
  templateUrl: './artifact.component.html',
  styleUrls: ['./artifact.component.css']
})
export class ArtifactComponent implements OnInit {

  @Input() data: Artifact;

  constructor() { }

  ngOnInit() {
  }

}
