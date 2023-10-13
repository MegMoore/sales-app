import { Injectable } from '@angular/core';
import { employee } from './employee.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppInitService } from '../app/app-init.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  get url() { return `${this.init.config.baseurl}/api/employees`;  } 

  constructor(

    private http: HttpClient,
    private init: AppInitService
  ) { }

  //method/function to get all employees

  login(email: string, password: string): Observable<employee>{
    return this.http.get(`${this.url}/${email}/${password}`) as Observable<employee>;
  }

  list(): Observable<employee[]>{
    return this.http.get(`${this.url}`) as Observable<employee[]>;
  }

  //get by primary key
  get(id: number): Observable<employee>{
    return this.http.get(`${this.url}/${id}`) as Observable<employee>;
  }
  
  //create employee
  create(emp: employee): Observable<employee> {
    return this.http.post(`${this.url}`, emp) as Observable<employee>;
  }
  
  //change/put employee
  change(emp: employee): Observable<any> {
    return this.http.put(`${this.url}/${emp.id}`, emp) as Observable<any>
  }
  
  //delete employee
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  
  
}
