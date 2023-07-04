import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { authorModel } from './authorModel';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  constructor(private _httpClient:HttpClient) { }
 
  showAuthors():Observable<any>{
    return this._httpClient.get("http://127.0.0.1:8000/api/author/showAll")
  }
  addAuthors(data:authorModel):Observable<any>{
    return this._httpClient.post("http://127.0.0.1:8000/api/author/add",data)
  }
  editAuthors(id:number,data:any):Observable<any>{
    return this._httpClient.post(`http://127.0.0.1:8000/api/author/edit/${id}`,data)
  }
  deleteAuthors(id:number):Observable<any>{
   
        return this._httpClient.post(`http://127.0.0.1:8000/api/author/delete/${id}`,'');
  }
}
