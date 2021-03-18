import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view-orders-sub-component',
  templateUrl: './user-view-orders-sub-component.component.html',
  styleUrls: ['./user-view-orders-sub-component.component.css']
})
export class UserViewOrdersSubComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log(this.orderDetails)

    this.createdAt=this.orderDetails['createdAt'].split('T')[0]
    console.log(this.createdAt)
  }

  @Input() orderDetails;

  createdAt;

  subscriber;

}
