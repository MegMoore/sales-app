import { Component } from '@angular/core';
import { Item } from '../item.class';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent {
  itm: Item = new Item();

  constructor(
    private itmsvc: ItemService,
    private router: Router
  ){}

  save(): void {
    this.itmsvc.create(this.itm).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("item/list");
      },
      error: (err) => {
        console.error(err);
      }

    })
  }
}
