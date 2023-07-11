import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode, { JwtDecodeOptions } from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient : HttpClient, private _Router : Router) { 
    if(localStorage.getItem('token') ){
      this.saveAdminData()
    }
  }
  userData=new BehaviorSubject(null)
  adminData : any = new BehaviorSubject(null);
  loginData : any = new BehaviorSubject(null);
  
  saveAdminData(){
    let encodedToken = JSON.stringify(localStorage.getItem('token'));
    let decodedToken:any =jwtDecode(encodedToken);
    this.userData.next(decodedToken)
    console.log(this.userData)
  }
  //sign up
  signUp(adminData : object):Observable<any>{
    return this._HttpClient.post('https://books.mhouses.net/api/admin/register', adminData)
  }
  //log in
  logIn(loginData:object):Observable<any>{
    return this._HttpClient.post('https://books.mhouses.net/api/admin/login',loginData)
  }
  // sign out
  signOut(){
    localStorage.removeItem('token');
   this.userData.next(null),
      this._Router.navigate(["/login"])
    
  }
}
