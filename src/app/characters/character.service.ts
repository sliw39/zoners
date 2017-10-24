import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToolsService } from '../common/tools.service';
import { Character } from './character.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CharacterService {

  constructor(
    private db: AngularFireDatabase,
    private tools: ToolsService
  ) { }

  list(): Observable<Character[]> {
    return this.db.list("/characters");
  }

  saveOrUpdate(character: Character) {
    if(character.id) {
      this.db.object("/characters/" + character.id).update(character);
    } else {
      character.id = this.tools.generateUUID();
      this.db.database.ref().child("/characters/" + character.id).set(character);
    }
  }

  delete(character: Character) {
    this.db.object("/characters/" + character.id).remove();
    character.id = undefined;
  }

  createCharacter() {
    return {
      id: null,
      name: "",
      age: "20",
      artifacts: [],
      background: "",
      behavior: [],
      contamination: {
        tier0: 0,
        tier1: 0,
        tier2: 0,
        tier3: 0 
      },
      madness: {
        tier0: 0,
        tier1: 0,
        tier2: 0,
        tier3: 0 
      },
      illness: {
        tier0: 0,
        tier1: 0,
        tier2: 0,
        tier3: 0 
      },
      endurance: {
        tier0: 0,
        tier1: 0,
        tier2: 0,
        tier3: 0 
      },
      equipments: [],
      gender: "",
      money: 0,
      nationality: null,
      picture: null,
      skills: [],
      weapons: [],
      wounds: []
    } as Character;
  }

}
