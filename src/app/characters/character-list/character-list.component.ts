import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.less']
})
export class CharacterListComponent implements OnInit {

  characters: Observable<Character[]>;

  constructor(private characterService: CharacterService) { 
    this.characters = this.characterService.list();
  }

  ngOnInit() { }

}
