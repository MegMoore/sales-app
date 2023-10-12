import { Pipe, PipeTransform } from '@angular/core';
import { order } from './Order.class';

@Pipe({
  name: 'searchOrder'
})
export class SearchOrderPipe implements PipeTransform {

  transform(ords: order[], substr: string = ""): order[] {
    if(substr === "") {
      return ords;
    }
    let selectedOrders: order[] = [];
    for(let x of ords) {
      if(
        x.date.toLowerCase().includes(substr.toLowerCase())
        || (x.date !== null && x.date.toLowerCase().includes(substr.toLowerCase()))
       ) {
        selectedOrders.push(x);
      }
    }
    return selectedOrders;
  }

}
