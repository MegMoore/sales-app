import { Component } from '@angular/core';
import { Item } from '../item.class';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

    pageTitle = "Item List";
    itms!: Item[];
    locale: string = 'en';
    substr: string = "";
    sortCol: string = 'id';
    sortAsc: boolean = true;
    sortOrder(col: string): void {
      if(col === this.sortCol){
        this.sortAsc = !this.sortAsc;
        return;
      }
      this.sortCol = col;
      this.sortAsc = true;
    }
  

    constructor(
      private itmsvc: ItemService
    ){}

    ngOnInit(): void {
     this.itmsvc.list().subscribe({
       next: (res) => {
         console.log(res);
         this.itms = res as Item[];

       }
     });
   }

}
