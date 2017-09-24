import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Weapon } from '../weapon/weapon.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToolsService } from '../../common/tools.service';

@Injectable()
export class WeaponService {

  constructor(
    private db: AngularFireDatabase,
    private tools: ToolsService
  ) { }

  list(): Observable<Weapon[]> {
    return this.db.list("/weapons");
  }

  addOrUpdate(wpn: Weapon) {
    if(wpn.id) {
      this.db.object("/weapons/" + wpn.id).update(wpn);
    } else {
      wpn.id = this.tools.generateUUID();
      this.db.database.ref().child("/weapons/" + wpn.id).set(wpn);
    }
  }

  delete(wpn: Weapon) {
    this.db.object("/weapons/" + wpn.id).remove();
    wpn.id = undefined;
  }

}
