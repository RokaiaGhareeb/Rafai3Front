import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  categoryFilter;
  constructor() {
  }
  ngOnInit(): void {

  }

  onEmitt(value){
    this.categoryFilter = value;
  }
}
