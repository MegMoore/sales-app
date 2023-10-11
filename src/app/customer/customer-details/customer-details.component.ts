import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  cust!: customer;
  
  constructor(
    private custsvc: CustomerService, 
    private route: ActivatedRoute,
    private router: Router
  ){}
  save(): void {
    let id = this.route.snapshot.params["id"];
    this.custsvc.remove(id).subscribe({ 
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
    let id = this.route.snapshot.params["id"];    
    this.custsvc.get(id).subscribe({
      next: (res) => {
        console.log(res)
        this.cust = res;
      },
      error: (err) => {
        console.error(err);
      }

    })
  }
}
