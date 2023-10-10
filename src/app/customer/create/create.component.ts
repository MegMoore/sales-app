import { Component } from '@angular/core';
import { customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  custs!: customer[];
  
  constructor(
    private custsvc: CustomerService
  ){}

  ngOnInit(): void {
  
  }
}
