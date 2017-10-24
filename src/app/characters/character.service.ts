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

}
