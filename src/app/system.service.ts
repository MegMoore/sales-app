
import { Injectable } from '@angular/core';
import { employee } from './employee/employee.class';

@Injectable({
  providedIn: 'root'
})
export class SystemServiceService {
 
  loggedInEmployee: employee | null = null;


  constructor(
    
  ) { }
}

