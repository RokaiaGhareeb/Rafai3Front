import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.css']
})
export class PromotionCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log('ssss',this.promotion)
  }

  @Input() promotion;

}
