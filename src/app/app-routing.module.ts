import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { E404Component } from './e404/e404/e404.component';
import { CreateComponent } from './customer/create/create.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { OrderLinesComponent } from './order/order-lines/order-lines.component';
import { OrderlineCreateComponent } from './orderline/orderline-create/orderline-create.component';
import { OrderlineEditComponent } from './orderline/orderline-edit/orderline-edit.component';
import { OrderlinesDetailsComponent } from './orderline/orderlines-details/orderlines-details.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  
  {path: "cust/list", component: CustomerListComponent},
  {path: "cust/create", component: CreateComponent},
  {path: "cust/details/:id", component: CustomerDetailsComponent},
  {path: "cust/edit/:id", component: CustomerEditComponent},
 
  {path: "about", component: AboutComponent},
  {path: "login", component: EmployeeLoginComponent},
 
  {path: "ord/create", component: OrderCreateComponent},
  {path: "ord/list", component: OrderListComponent},
  {path: "ord/details/:id", component: OrderDetailsComponent},
  
  {path: "ord/lines/:id", component: OrderLinesComponent},
  {path: "ordl/create/:oid", component: OrderlineCreateComponent},
  {path: "ordl/details/:id", component: OrderlinesDetailsComponent},
  {path: "ordl/edits/:id", component: OrderlineEditComponent},
  
  {path: "item/list", component: ItemListComponent},
  {path: "item/create", component: ItemCreateComponent},


  {path: "**", component: E404Component}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
