import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/services/order/order.service';

@Component({
  selector: 'app-admin-control-orders',
  templateUrl: './admin-control-orders.component.html',
  styleUrls: ['./admin-control-orders.component.css']
})
export class AdminControlOrdersComponent implements OnInit {

  constructor(private ordersServ:OrderService) { }


  subscriber;

  allOrders;

  ngOnInit(): void {

   this.subscriber= this.ordersServ.getAllOrders().subscribe(
      (data)=>{
        console.log(data)

        this.allOrders=data;
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
