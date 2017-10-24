import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character.model';
import { FullscreenService } from '../../common/fullscreen/fullscreen.service';
import { CharacterMainInfoComponent } from './character-main-info/character-main-info.component';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.less']
})
export class CharacterSheetComponent implements OnInit {

  @Input("data") character: Character;

  constructor(private fullscreenService: FullscreenService) { }

  ngOnInit() {
  }

  fillMainInfo() {
    this.fullscreenService.show(CharacterMainInfoComponent, this.character);
  }

}
