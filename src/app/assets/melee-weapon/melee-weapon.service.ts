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

  createWeapon() {
    return {
      id: null,
      name: "",
      detail: "",
      price: 0,
      weight: 0,
      durability: 1,
      handling: 1,
      power: {
        dice: 0,
        bonus: 0
      },
      slash: {
        attack: { dice: 0 },
        defense: { dice: 0 }
      },
      smash: {
        attack: { dice: 0 },
        defense: { dice: 0 }
      },
      thrust: {
        attack: { dice: 0 },
        defense: { dice: 0 }
      }
    } as MeleeWeapon;
  }
}
