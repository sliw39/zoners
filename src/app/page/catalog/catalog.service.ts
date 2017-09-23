import { Injectable } from '@angular/core';
import { Weapon } from '../../assets/weapon/weapon.model';
import { Equipment } from '../../assets/equipment/equipment.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CatalogService {

  constructor(private db: AngularFireDatabase) { 
    
  }

  getWeapons(): Observable<Weapon[]> {
    return this.db.list("/weapons");
  }

  getEquipments(): Observable<Equipment[]> {
    return this.db.list("/equipments");
  }

}
