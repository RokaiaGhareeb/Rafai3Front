import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { Product } from '../model/product.model';

const baseURL = 'http://localhost:3000/api/product/';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: any;

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(baseURL);
  }

  getProductsOfCategory(filter){
    return this.http.get(baseURL + "filter/" + filter);
  }
}
