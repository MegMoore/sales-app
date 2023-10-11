import { Component } from '@angular/core';
import { customer } from '../customer.class';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  cust: customer = new customer();
  
  constructor(
    private custsvc: CustomerService,
    private router: Router
  ){}

  save(): void {
    this.custsvc.create(this.cust).subscribe({ 
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/cust/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
   
  }
}
