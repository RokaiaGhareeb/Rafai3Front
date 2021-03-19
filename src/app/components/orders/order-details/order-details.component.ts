import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/services/order/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  // here make logic to get details of order by its id but for now use fake id
  // then when make logic of routes and navigation can make that
 // orderId='60534b000f05752430bd2074';
  orderId;

  //    60534b000f05752430bd2074
  constructor(private orderServ:OrderService,private activatedRouter:ActivatedRoute,private router:Router) { 
    
  }

  subscriber;

  orderDetails;

  createdAt;

  ngOnInit(): void {

    this.orderId=this.activatedRouter.snapshot.params.id;

   this.subscriber= this.orderServ.getOrderDetailsById(this.orderId).subscribe(

      (data)=>{
        console.log(data)

        this.orderDetails=data;

        this.createdAt=String(new Date(this.orderDetails.createdAt)).split('GMT')[0];
        console.log(this.createdAt)
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
