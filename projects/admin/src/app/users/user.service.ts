import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _HttpClient:HttpClient) { }
  private token: string | null = localStorage.getItem('token');
  showUser():Observable <any>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this._HttpClient.get('https://books.mhouses.net/api/user/show',{headers})
  }
  deleteUser(id:number):Observable <any>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this._HttpClient.delete(`https://books.mhouses.net/api/user/${id}`,{headers})
  }
}
