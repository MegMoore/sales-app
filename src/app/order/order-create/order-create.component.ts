import { Component } from '@angular/core';
import { order } from '../Order.class';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent {

  ord: order = new order();
  
  constructor(
    private ordsvc: OrderService,
    private router: Router
  ){}

  save(): void {
    this.ordsvc.create(this.ord).subscribe({ 
      next: (res) => {
        console.log(res);
        // this.router.navigateByUrl("/order");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
   
  }
}
