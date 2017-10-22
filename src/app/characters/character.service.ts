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

}
