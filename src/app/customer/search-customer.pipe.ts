import { Pipe, PipeTransform } from '@angular/core';
import { customer } from './customer.class';

@Pipe({
  name: 'searchCustomer'
})
export class SearchCustomerPipe implements PipeTransform {

  transform(custs: customer[], substr: string = ""): customer[] {
    if(substr === "") {
      return custs;
    }
    let selectedCustomers: customer[] = [];
    for(let c of custs) {
      if(
        c.code.toLowerCase().includes(substr.toLowerCase())
        || (c.name !== null && c.name.toLowerCase().includes(substr.toLowerCase()))
       ) {
        selectedCustomers.push(c);
      }
    }
    return selectedCustomers;
  }

}
