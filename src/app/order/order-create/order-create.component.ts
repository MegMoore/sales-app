import { Component } from '@angular/core';
import { order } from '../Order.class';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { customer } from 'src/app/customer/customer.class';
import { CustomerService } from 'src/app/customer/customer.service';
import { SystemServiceService } from 'src/app/system.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent {
  
  ord: order = new order();
  custs!: customer[];
  
  
  constructor(
    private ordsvc: OrderService,
    private syssvc: SystemServiceService,
    private router: Router,
    private custsvc: CustomerService
  ){}

  save(): void {
    this.ordsvc.create(this.ord).subscribe({ 
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/home");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.custsvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.custs = res;
      },
      error: (err) => {
        console.error(err)
      }

    });
    
  }
}
