import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { E404Component } from './e404/e404/e404.component';
import { CreateComponent } from './customer/create/create.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { BoolPipe } from './misc/bool.pipe';
import { SearchCustomerPipe } from './customer/search-customer.pipe';
import { SortPipe } from './misc/sort.pipe';
import { EmployeeComponent } from './employee/employee-list/employee.component';
import { SearchEmployeePipe } from './employee/search-employee.pipe';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { SearchOrderPipe } from './order/search-order.pipe';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { OrderLinesComponent } from './order/order-lines/order-lines.component';
import { OrderlineCreateComponent } from './orderline/orderline-create/orderline-create.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CustomerListComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    CreateComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
    BoolPipe,
    SearchCustomerPipe,
    SortPipe,
    EmployeeComponent,
    SearchEmployeePipe,
    EmployeeLoginComponent,
    OrderCreateComponent,
    OrderListComponent,
    SearchOrderPipe,
    OrderDetailsComponent,
    OrderEditComponent,
    OrderLinesComponent,
    OrderlineCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
