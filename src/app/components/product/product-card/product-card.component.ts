import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  products: any;
  unsubscriber;
  product = {title:"", imageUrl : "", details: "", price: ""};
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.unsubscriber = this.productService
        .getProductsOfCategory(params['filter'])
        .subscribe(
          (res) => {
            this.products = res;
            console.log(res);
          },
          (err) => {
            console.log(err);
          },
          () => {
            this.unsubscriber.unsubscribe();
          }
        );
    });
  }
  onMoreDeatils(value){
    this.product = value;
  }
}
