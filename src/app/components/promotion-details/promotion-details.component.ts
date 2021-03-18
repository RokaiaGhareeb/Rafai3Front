import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/services/promotion/promotion.service';

@Component({
  selector: 'app-promotion-details',
  templateUrl: './promotion-details.component.html',
  styleUrls: ['./promotion-details.component.css']
})
export class PromotionDetailsComponent implements OnInit {

  constructor(private promotionServ:PromotionService) { }

subscriber;

allPromotions;

  ngOnInit(): void {

this.subscriber= this.promotionServ.getAll().subscribe(

      (data)=>{

        this.allPromotions=data;

      
      },
      (err)=>{

        console.log(err)
      },
      ()=>{

        this.subscriber.unsubscribe()
      }
    )

  }

}
