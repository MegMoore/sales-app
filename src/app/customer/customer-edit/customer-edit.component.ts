import { Component } from '@angular/core';
import { customer } from '../customer.class';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent {
  custs!: customer;
  
  constructor(
    private custsvc: CustomerService, 
    private route: ActivatedRoute,
    private router: Router
  ){}
  save(): void {
    this.custsvc.change(this.custs).subscribe({ 
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/cust/list")
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
        this.custs = res;
      },
      error: (err) => {
        console.error(err);
      }

    })
  }
}
