import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from './customer.class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string = "http://localhost:5000/api/customers";

  constructor(

    private http: HttpClient
  ) { }

  //method/function to get all customers

  list(): Observable<customer[]>{
    return this.http.get(`${this.url}`) as Observable<customer[]>;
  }
  
  //get by primary key
  get(id: number): Observable<customer>{
    return this.http.get(`${this.url}/${id}`) as Observable<customer>;
  }
  
  //create customer
  create(cust: customer): Observable<customer> {
    return this.http.post(`${this.url}`, cust) as Observable<customer>;
  }
  
  //change/put customer
  change(cust: customer): Observable<any> {
    return this.http.put(`${this.url}/${cust.id}`, cust) as Observable<any>
  }
  
  //delete customer
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  

}
