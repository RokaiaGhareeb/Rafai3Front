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

  getAll() {
    return this.http.get(baseURL);
  }

  getOfCategory(filter){
    return this.http.get(baseURL + "filter/" + filter);
  }

  add(product){
    return this.http.post(baseURL, product);
  }

  delete(id){
    return this.http.delete(baseURL + id);
  }

  edit(id, editedData){
    return this.http.patch(baseURL + id, editedData);
  }
}
