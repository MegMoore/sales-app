import { Injectable } from '@angular/core';
import { order } from './Order.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url: string = "http://localhost:5000/api/orders";

  constructor(

    private http: HttpClient
  ) { }

  //method/function to get all orders

  list(): Observable<order[]>{
    return this.http.get(`${this.url}`) as Observable<order[]>;
  }
  
  //get by primary key
  get(id: number): Observable<order>{
    return this.http.get(`${this.url}/${id}`) as Observable<order>;
  }
  
  //create customer
  create(ord: order): Observable<order> {
    return this.http.post(`${this.url}`, ord) as Observable<order>;
  }
  
  //change/put order
  change(ord: order): Observable<any> {
    return this.http.put(`${this.url}/${ord.id}`, ord) as Observable<any>
  }
  
  //delete order
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  

}