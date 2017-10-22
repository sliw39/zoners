import { Pipe, PipeTransform } from '@angular/core';
import { Character } from './character.model';
import * as _ from "lodash";

@Pipe({
  name: 'characterFilter'
})
export class CharacterFilterPipe implements PipeTransform {

  transform(value: Character[], searchText: string): Character[] {
    return _.filter(value, it => it.name.toLowerCase().indexOf((searchText || "").toLowerCase()) !== -1);
  }

}
