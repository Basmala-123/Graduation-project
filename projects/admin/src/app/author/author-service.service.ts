import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { authorModel } from './authorModel';
@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {
  constructor(private _httpClient:HttpClient) { }
  private token: string | null = localStorage.getItem('token');
  addAuthor(value: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    const data = new FormData();
    data.append('name', value.name);
    data.append('description', value.description);
    data.append('image', value.image, value.name);
    return this._httpClient.post('https://books.mhouses.net/api/author/add', data, { headers })
  }
  showAllAuthor():Observable <any>{
   return this._httpClient.get('https://books.mhouses.net/api/author/showAll')
  }
  deleteAuthor(id:number):Observable <any>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this._httpClient.post(`https://books.mhouses.net/api/author/delete/${id}`,{},{ headers })
  }
  editAuthor(id:number,value:any):Observable <any>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    const data = new FormData();
    data.append('name', value.name);
    data.append('description', value.description);
    data.append('image',  value.image, value.name);
    data.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    return this._httpClient.post(`https://books.mhouses.net/api/author/edit/${id}`,data,{headers})
  }
}
