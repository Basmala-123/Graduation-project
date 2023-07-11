import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { articleModel } from './articleModel';
import { HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor( private _httpClient : HttpClient) { }
  private token: string | null = localStorage.getItem('token');
  addArticle(value:any): Observable <any> {
    const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}` // Add the token to the Authorization header
      });
      const data = new FormData();
    data.append('title', value.title);
    data.append('content', value.content);
    data.append('image', value.image, value.name);
    data.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    return this._httpClient.post('https://books.mhouses.net/api/article/add', data, {headers });
}
// show article
showArticle():Observable <any>{
  return this._httpClient.get('https://books.mhouses.net/api/article/showAll')
}
// delete article
deleteArticle(id:number):Observable <any>{
  const headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`
  });
  return this._httpClient.post(`https://books.mhouses.net/api/article/delete/${id}`, {}, {headers})
}
// edit 
editArticle(id:number,value:any):Observable <any>{
  const headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`
  });
  const data = new FormData();
    data.append('title', value.title);
    data.append('content', value.content);
    data.append('image', value.image, value.name);
    data.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
  return this._httpClient.post(`https://books.mhouses.net/api/article/edit/${id}` , data ,{headers})
}
}
