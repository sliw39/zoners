import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class RightsService {

  private rightsObservable: Observable<string[]>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.rightsObservable = new Observable<string[]>(subscriber => {
      this.afAuth.authState.forEach(next => {
        this.db.object("/users/${}").forEach(next => {
          subscriber.next(next.rights);
        })
      })
    });
    
  }


}
