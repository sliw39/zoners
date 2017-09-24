import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Equipment } from './equipment.model';
import { ToolsService } from '../../common/tools.service';


@Injectable()
export class EquipmentService {

  constructor(
    private db: AngularFireDatabase,
    private tools: ToolsService
  ) { }

  list(): Observable<Equipment[]> {
    return this.db.list("/equipments");
  }

  addOrUpdate(eqp: Equipment) {
    if(eqp.id) {
      this.db.object("/equipments/" + eqp.id).update(eqp);
    } else {
      eqp.id = this.tools.generateUUID();
      this.db.database.ref().child("/equipments/" + eqp.id).set(eqp);
    }
  }

  delete(eqp: Equipment) {
    this.db.database.ref().child("/equipments/" + eqp.id).remove();
    eqp.id = undefined;
  }

}
