import { Component } from '@angular/core';
import { order } from '../Order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  ord!: order[];
  ordstr: string = "";
    sortCol: string = 'id';
    sortAsc: boolean = true;
    sortOrder(col: string): void {
      if(col === this.sortCol){
        this.sortAsc = !this.sortAsc;
        return;
      }
      this.sortCol = col;
      this.sortAsc = true;
    }

  constructor(
    private ordsvc: OrderService
    ){}
  
    ngOnInit(): void {
      this.ordsvc.list().subscribe({
        next: (res) => {
          console.log(res);
          this.ord = res as order[];
        },
        error: (err) => {
          console.error(err);
        }

      })
      
    }
  }
