import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { E404Component } from './e404/e404/e404.component';
import { CreateComponent } from './customer/create/create.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "cust/list", component: CustomerListComponent},
  {path: "cust/create", component: CreateComponent},
  {path: "about", component: AboutComponent},
  {path: "**", component: E404Component}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
