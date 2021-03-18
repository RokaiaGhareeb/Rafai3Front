import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from 'src/services/order/order.service';

@Component({
  selector: 'app-admin-control-orders-sub-component',
  templateUrl: './admin-control-orders-sub-component.component.html',
  styleUrls: ['./admin-control-orders-sub-component.component.css']
})
export class AdminControlOrdersSubComponentComponent implements OnInit {

  constructor(private orderServ:OrderService) { }

  ngOnInit(): void {

    console.log(this.orderDetails)

    this.createdAt=this.orderDetails['createdAt'].split('T')[0]
    console.log(this.createdAt)
  }

  @Input() orderDetails;

  createdAt;

  subscriber;

  // pass param to function accept order accepted
  acceptOrder(){

   this.subscriber= this.orderServ.adminAcceptOrder(this.orderDetails._id).subscribe(

      (data)=>{

        console.log(data)
        this. orderDetails.status='accepted'
      }
      ,
      (err)=>{

        console.log(err)
      },
      ()=>{
        this.subscriber.unsubscribe();
      }
    )
  }

  // pass param to function accept order accepted

  rejectOrder(){

    this.subscriber= this.orderServ.adminRejectOrder(this.orderDetails._id).subscribe(

      (data)=>{

        console.log(data)
       this. orderDetails.status='rejected'
      }
      ,
      (err)=>{

        console.log(err)
      },
      ()=>{
        this.subscriber.unsubscribe();
      }
    )

  }

}
