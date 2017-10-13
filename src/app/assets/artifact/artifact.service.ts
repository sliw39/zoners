import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToolsService } from '../../common/tools.service';
import { Artifact } from './artifact.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArtifactService {

  constructor(
    private db: AngularFireDatabase,
    private tools: ToolsService
  ) { }

  list(): Observable<Artifact[]> {
    return this.db.list("/artifacts");
  }

  addOrUpdate(artifact: Artifact) {
    if(artifact.id) {
      this.db.object("/artifacts/" + artifact.id).update(artifact);
    } else {
      artifact.id = this.tools.generateUUID();
      this.db.database.ref().child("/artifacts/" + artifact.id).set(artifact);
    }
  }

  delete(artifact: Artifact) {
    this.db.database.ref().child("/artifacts/" + artifact.id).remove();
    artifact.id = undefined;
  }

  createArtifact() {
    return {
      id: null,
      name: "",
      detail: "",
      price: 0,
      weight: 0,
      lines: [],
      blocks: []
    } as Artifact;
  }

}
