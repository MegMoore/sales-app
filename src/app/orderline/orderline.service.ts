import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orderline } from './orderline.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderlineService {

  url: string = "http://localhost:5000/api/orderlines";

  constructor(
    private http: HttpClient
  ) { }

  create(ordl: Orderline): Observable<Orderline>{
    return this.http.post(`${this.url}`, ordl) as Observable<Orderline>;
  }
}
