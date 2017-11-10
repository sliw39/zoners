import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToolsService } from '../../common/tools.service';
import { Misc } from './misc.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MiscService {

  constructor(
    private db: AngularFireDatabase,
    private tools: ToolsService
  ) { }

  list(): Observable<Misc[]> {
    return this.db.list("/miscs");
  }

  addOrUpdate(misc: Misc) {
    if(misc.id) {
      this.db.object("/miscs/" + misc.id).update(misc);
    } else {
      misc.id = this.tools.generateUUID();
      this.db.database.ref().child("/miscs/" + misc.id).set(misc);
    }
  }

  delete(misc: Misc) {
    this.db.database.ref().child("/miscs/" + misc.id).remove();
    misc.id = undefined;
  }

  createMisc() {
    return {
      id: null,
      name: "",
      detail: "",
      price: 0,
      weight: 0,
      lines: [],
      blocks: []
    } as Misc;
  }

  getCategories() {
    return Promise.resolve([
      "alimentaire",
      "médical",
      "munition",
      "amélioration",
      "divers"
    ])
  }

}
