import { Component } from '@angular/core';
import { customer } from '../customer.class';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
    custs!: customer[];
  
    constructor(
      private custsvc: CustomerService
    ){}
  
    ngOnInit(): void {
      this.custsvc.list().subscribe({
        next: (res) => {
          console.log(res);
          this.custs = res as customer[];
        },
        error: (err) => {
          console.error(err);
        }

      })
      
    }
  }