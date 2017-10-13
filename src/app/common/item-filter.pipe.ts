import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../assets/item.model';
import * as _ from "lodash";

@Pipe({
  name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

  transform(value: Item[], searchText: string): Item[] {
    return _.filter(value, it => it.name.toLowerCase().indexOf((searchText || "").toLowerCase()) !== -1);
  }

}
