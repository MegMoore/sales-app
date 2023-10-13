import { Component } from '@angular/core';
import { OrderlineService } from '../orderline.service';
import { Orderline } from '../orderline.class';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/item/item.service';
import { Item } from 'src/app/item/item.class';

@Component({
  selector: 'app-orderline-edit',
  templateUrl: './orderline-edit.component.html',
  styleUrls: ['./orderline-edit.component.css']
})
export class OrderlineEditComponent {
  ordl!: Orderline;
  itms!: Item[];

  constructor(
    private ordlsvc: OrderlineService,
    private route: ActivatedRoute,
    private router: Router,
    private itmsvc: ItemService

  ){}

  save(): void {
    this.ordlsvc.change(this.ordl).subscribe({ 
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl(`/ord/lines/${this.ordl.orderId}`)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }


  
  ngOnInit(): void {
    this.itmsvc.list().subscribe({
      next: (res) => {
        console.log(res)
        this.itms = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
    let id = this.route.snapshot.params["id"];
    this.ordlsvc.get(id).subscribe({
      next: (res) => {
        console.log(res)
        this.ordl = res;
      },
      error: (err) => {
        console.error(err);
      }

    })
  }
}