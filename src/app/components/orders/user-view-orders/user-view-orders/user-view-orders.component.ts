import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/services/order/order.service';


@Component({
  selector: 'app-user-view-orders',
  templateUrl: './user-view-orders.component.html',
  styleUrls: ['./user-view-orders.component.css']
})
export class UserViewOrdersComponent implements OnInit {

  constructor(private UserordersServ:OrderService) {

   }

subscriber;


userOrders;

  ngOnInit(): void {
  
  this.subscriber=  this.UserordersServ.getAllOrders().subscribe(

      (data)=>{

        console.log(data)

        this.userOrders=data;
      },
      (err)=>{

        console.log(err)
      },
      ()=>{

        this.subscriber.unsubscribe();
      }
    )
  
  }

}
