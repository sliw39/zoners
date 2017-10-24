import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToolsService } from '../common/tools.service';
import { Observable } from 'rxjs/Observable';

export interface Nationality {
  name: string;
  flagUrl: string;
}

@Injectable()
export class NationalityService {

  constructor(
    private db: AngularFireDatabase,
    private tools: ToolsService
  ) { }

  list(): Observable<Nationality[]> {
    return this.db.list("/static/nationalities");
  }

}
