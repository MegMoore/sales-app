import { Component } from '@angular/core';
import { order } from '../Order.class';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  ord!: order;
  
  constructor(
    private ordsvc: OrderService, 
    private route: ActivatedRoute,
    private router: Router
  ){}
  save(): void {
    let id = this.route.snapshot.params["id"];
    this.ordsvc.remove(id).subscribe({ 
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/ord/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];    
    this.ordsvc.get(id).subscribe({
      next: (res) => {
        console.log(res)
        this.ord = res;
      },
      error: (err) => {
        console.error(err);
      }

    })
  }
}
