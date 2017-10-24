import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../character.model';
import { FullscreenService } from '../../../common/fullscreen/fullscreen.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-character-main-info',
  templateUrl: './character-main-info.component.html',
  styleUrls: ['./character-main-info.component.less']
})
export class CharacterMainInfoComponent implements OnInit {

  @Input() data: Character; 

  nationalities: Observable<Nationality[]>

  constructor(private fsService: FullscreenService) { 

  }

  ngOnInit() {
  }

  close() {
    this.fsService.hide();
  }

}
