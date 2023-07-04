import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesServiceService {
  baseUrl="https://books.mhouses.net/api/";

  constructor(private _http:HttpClient) { }
  getAllCategory(){
    return this._http.get(this.baseUrl+'category/showAll');
  }
  getAllArticles(){
    return this._http.get(this.baseUrl+'article/showAll');
  }
  sendMessage(data:any){
    return this._http.post(this.baseUrl+'contact/send',data)
  }
}
