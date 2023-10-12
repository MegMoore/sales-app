import { Component } from '@angular/core';
import { SystemServiceService } from 'src/app/system.service';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';
import { order } from '../Order.class';

@Component({
  selector: 'app-order-lines',
  templateUrl: './order-lines.component.html',
  styleUrls: ['./order-lines.component.css']
})
export class OrderLinesComponent {
// properties

  ord!: order;

  constructor(
    private syssvc: SystemServiceService,
    private ordsvc: OrderService,
    private route: ActivatedRoute
  ) { }

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
