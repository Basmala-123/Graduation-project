import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl="https://books.mhouses.net/api/";
  userData:any=new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient) { }

  signup(userData:object):Observable<any>{
   return this._HttpClient.post(this.baseUrl+'user/register', userData)
  }

  login(loginData:object):Observable<any>{
   return this._HttpClient.post(this.baseUrl+'user/login',loginData)
  }
  
  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

}
