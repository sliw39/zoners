import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToolsService } from '../../common/tools.service';
import { Observable } from 'rxjs/Observable';
import { MeleeWeapon } from './melee-weapon.model';

@Injectable()
export class MeleeWeaponService {

  constructor(
    private db: AngularFireDatabase,
    private tools: ToolsService
  ) { }

  list(): Observable<MeleeWeapon[]> {
    return this.db.list("/melee-weapons");
  }

  addOrUpdate(wpn: MeleeWeapon) {
    if(wpn.id) {
      this.db.object("/melee-weapons/" + wpn.id).update(wpn);
    } else {
      wpn.id = this.tools.generateUUID();
      this.db.database.ref().child("/melee-weapons/" + wpn.id).set(wpn);
    }
  }

  delete(wpn: MeleeWeapon) {
    this.db.object("/melee-weapons/" + wpn.id).remove();
    wpn.id = undefined;
  }
}
