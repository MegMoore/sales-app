import { Component } from '@angular/core';
import { customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent {
  custs!: customer;
  
  constructor(
    private custsvc: CustomerService
  ){}

  ngOnInit(): void {
    this.custsvc.get(1).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.error(err);
      }

    })
  }
}
