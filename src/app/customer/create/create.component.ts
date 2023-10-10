import { Component } from '@angular/core';
import { customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  cust: customer = new customer();
  
  constructor(
    private custsvc: CustomerService
  ){}

  save(): void {

  }

  ngOnInit(): void {
    this.custsvc.create(this.cust).subscribe({
      next: (res) => {
        console.log("Added");
      },
      error: (err) => {
        console.error(err);
      }

    })
  }
}
