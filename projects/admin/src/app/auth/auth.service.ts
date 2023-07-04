import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode, { JwtDecodeOptions } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient : HttpClient) { }
  
  adminData : any = new BehaviorSubject(null);
  saveAminData(){
    let decodedToken=JSON.stringify(localStorage.getItem('adminToken'));
    let encodedToken:object=jwtDecode(decodedToken)
    this.adminData.next(encodedToken)
  }
  //sign up
  signUp(adminData : object):Observable<any>{
    return this._HttpClient.post('//', adminData)
  }
  //log in
  logIn(adminData:object):Observable<any>{
    return this._HttpClient.post('//',adminData)

  }
}
