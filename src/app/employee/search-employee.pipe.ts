import { Pipe, PipeTransform } from '@angular/core';
import { employee } from './employee.class';

@Pipe({
  name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {

  transform(emps: employee[], substr: string = ""): employee[] {
    if(substr === "") {
      return emps;
    }
    let selectedEmployees: employee[] = [];
    for(let e of emps) {
      if(
        
        (e.email.toLowerCase().includes(substr.toLowerCase()))
       ) {
        selectedEmployees.push(e);
      }
    }
    return selectedEmployees;
  }



}
