import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.class';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: string = "http://localhost:5000/api/items";

  constructor(

    private http: HttpClient
  ) { }

  list(): Observable<Item[]>{
    return this.http.get(`${this.url}`) as Observable<Item[]>;
  }
  
  //get by primary key
  get(id: number): Observable<Item>{
    return this.http.get(`${this.url}/${id}`) as Observable<Item>;
  }
  
  //create item
  create(itm: Item): Observable<Item> {
    return this.http.post(`${this.url}`, itm) as Observable<Item>;
  }
  
  //change/put item
  change(itm: Item): Observable<any> {
    return this.http.put(`${this.url}/${itm.id}`, itm) as Observable<any>
  }
  
  //delete item
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  
}
