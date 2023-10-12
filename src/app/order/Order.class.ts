import { customer } from "../customer/customer.class";
import { Orderline } from "../orderline/orderline.class";


export class order {
    id: number = 0;
    date: string = "";
    description: string = "";
    total: number = 0;
    status: string = "New";
   // foreign key 
    customerId: number = 0;
    customer: customer | null = null;

    orderLines: Orderline[] | null = null;

}