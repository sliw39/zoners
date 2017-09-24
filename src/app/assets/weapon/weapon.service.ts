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

  addOrUpdate(eqp: Weapon) {
    if(eqp.id) {
      this.db.object("/weapons/" + eqp.id).update(eqp);
    } else {
      eqp.id = this.tools.generateUUID();
      this.db.database.ref().child("/weapons/" + eqp.id).set(eqp);
    }
  }

}
