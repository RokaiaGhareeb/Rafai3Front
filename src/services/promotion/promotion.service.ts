import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private _httpClient:HttpClient) { 


  }

  private baseUrl='http://localhost:3000/api/promotion'

  getToken(){

    return localStorage.getItem('rafai3Token')
  }

  // get all promotions from data base
  getAll(){

    return this._httpClient.get(this.baseUrl);
  }

  // post new promotion   .. _promotionDetails should be like {promotion,newprice}
  postPromotion(_productId,_promotionDetails){

    return this._httpClient.post(this.baseUrl+'/'+_productId,_promotionDetails,{headers:{Authorization:this.getToken()}})
  }


  // edit promotion by sending promotion details like {promotion,newprice}
  editPromotion(_productId,_promotionDetails){

    return this._httpClient.patch(this.baseUrl+'/'+_productId,_promotionDetails,{headers:{Authorization:this.getToken()}})
  }


  // delete promotion by promotion id
  deletePromotion(_promotionId){

    return this._httpClient.delete(this.baseUrl+'/'+_promotionId,{headers:{Authorization:this.getToken()}})
  }

}
