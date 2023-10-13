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
  saveid: number = 0;
    remove(id: number): void {
      this.showverify = !this.showverify;
      this.saveid = id;
    }
  
    showverify: boolean = false;
    verifyremove(id: number): void {
     this.ordsvc.remove(id).subscribe({
        next: (res) => {
          console.log("deleted");
               
        },
        error: (err) => {
          console.error(err);
        }
      });
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

