import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { order } from '../order/Order.class';
import { Orderline } from './orderline.class';

@Injectable({
  providedIn: 'root'
})
export class OrderlineService {

  url: string = "http://localhost:5000/api/orderlines";

  constructor(

    private http: HttpClient
  ) { }

  //method/function to get all orders

  list(): Observable<Orderline[]>{
    return this.http.get(`${this.url}`) as Observable<Orderline[]>;
  }
  
  //get by primary key
  get(id: number): Observable<Orderline>{
    return this.http.get(`${this.url}/${id}`) as Observable<Orderline>;
  }
  
  //create customer
  create(ordl: Orderline): Observable<Orderline> {
    return this.http.post(`${this.url}`, ordl) as Observable<Orderline>;
  }
  
  //change/put order
  change(ordl: Orderline): Observable<any> {
    return this.http.put(`${this.url}/${ordl.id}`, ordl) as Observable<any>
  }
 
   
  //delete order
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  

}