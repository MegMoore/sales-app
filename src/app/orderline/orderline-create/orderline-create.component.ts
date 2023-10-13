import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orderline } from '../orderline.class';
import { order } from 'src/app/order/Order.class';
import { SystemServiceService } from 'src/app/system.service';
import { ItemService } from 'src/app/item/item.service';
import { OrderlineService } from '../orderline.service';
import { Item } from 'src/app/item/item.class';

@Component({
  selector: 'app-orderline-create',
  templateUrl: './orderline-create.component.html',
  styleUrls: ['./orderline-create.component.css']
})
export class OrderlineCreateComponent {

  ordl: Orderline = new Orderline;
  items?: Item[];

  constructor(
    private route: ActivatedRoute,
    private syssvc: SystemServiceService,
    private itemsvc: ItemService,
    private ordlsvc: OrderlineService,
    private router: Router
    
  ){}

  save(): void {
    this.ordl.itemId = +this.ordl.itemId;
    console.debug("Orderline B4:", this.ordl);
    this.ordlsvc.create(this.ordl).subscribe({
      next: (res) => {
    console.debug("created");
    this.router.navigateByUrl(`/ord/lines/${this.ordl.orderId}`);
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    //reading from url and turning it into a number
    this.ordl.orderId = +this.route.snapshot.params["oid"];

    this.itemsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.items = res;
      },
      error: (err) => {
      console.error();
      }
      // 
    });
  }
}
