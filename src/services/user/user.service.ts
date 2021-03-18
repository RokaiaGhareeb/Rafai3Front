import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient:HttpClient) {

   }

   private baseUrl='http://localhost:3000/api/user';

   register(_signUpDetails){

    return this._httpClient.post(this.baseUrl+'/register',_signUpDetails);
   }


   login(_signInDetails){

    return this._httpClient.post(this.baseUrl+'/login',_signInDetails);
   }


}
