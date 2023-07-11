import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CatServiceService {
  constructor(private http_client: HttpClient) {}
  private token: string | null = localStorage.getItem('token');
  addCategory(value: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    const data = new FormData();
    data.append('name', value.name);
    data.append('description', value.description);
    data.append('image', value.image, value.name);
    return this.http_client.post('https://books.mhouses.net/api/category/add', data, { headers })
  }
  showCategory():Observable <any>{
   return this.http_client.get('https://books.mhouses.net/api/category/showAll')
  }
  deleteCtegory(id:number):Observable <any>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.http_client.post(`https://books.mhouses.net/api/category/delete/${id}`,{} , { headers })
  }
  aditCtegory(id:number , value:any):Observable <any>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    }); 
const data = new FormData();
    data.append('name', value.name);
    data.append('description', value.description);
    data.append('image', value.image, value.name);
    data.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    return this.http_client.post(`https://books.mhouses.net/api/category/edit/${id}`, data , { headers })
  }
}
