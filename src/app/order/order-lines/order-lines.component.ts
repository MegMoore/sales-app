import { Component } from '@angular/core';
import { SystemServiceService } from 'src/app/system.service';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';
import { order } from '../Order.class';
import { Orderline } from 'src/app/orderline/orderline.class';
import { OrderlineService } from 'src/app/orderline/orderline.service';

@Component({
  selector: 'app-order-lines',
  templateUrl: './order-lines.component.html',
  styleUrls: ['./order-lines.component.css']
})
export class OrderLinesComponent {
// properties

  ord!: order;
  ordl!: Orderline;

  constructor(
    private syssvc: SystemServiceService,
    private ordsvc: OrderService,
    private route: ActivatedRoute,
    private ordlsvc: OrderlineService
  ) { }
    saveid: number = 0;
    remove(id: number): void {
      this.showverify = !this.showverify;
      this.saveid = id;
    }
  
    showverify: boolean = false;
    verifyremove(id: number): void {
     this.ordlsvc.remove(id).subscribe({
        next: (res) => {
          console.log("deleted");
          this.refresh();      
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

  backorder(): void {
    this.ordsvc.backorder(this.ord).subscribe({
      next: (res) => {
        console.debug("Placed on Backorder");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  refresh(): void {
    //snapshot is a quick look
    //add + to make sure it's a number
    let id = +this.route.snapshot.params["id"];
    this.ordsvc.get(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.ord = res;
      }
    })
  }
  ///refreshes on initialization
  ngOnInit(): void {
    this.refresh();
  }
}
