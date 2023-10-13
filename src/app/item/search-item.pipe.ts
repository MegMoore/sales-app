import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item.class';

@Pipe({
  name: 'searchItem'
})
export class SearchItemPipe implements PipeTransform {

  transform(itms: Item[], substr: string = ""): Item[] {
    if(substr === "") {
      return itms;
    }
    let selectedItems: Item[] = [];
    for(let i of itms) {
      if(
        i.name.toLowerCase().includes(substr.toLowerCase())
        || (i.name !== null && i.name.toLowerCase().includes(substr.toLowerCase()))
      ) {
        selectedItems.push(i);
      }
    }
    return selectedItems;
  }

}
