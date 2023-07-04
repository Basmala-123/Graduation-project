import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  baseUrl="https://books.mhouses.net/api/";
  token= localStorage.getItem('token');
  constructor( private http:HttpClient) {}
   searchBooks(query:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}book/search/${query.trim()}`);
   }

   addTowishlist(id: number): Observable<any> {
    const data={
      book_id :id,
    };
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.token}`,
    //   'Content-Type': 'application/json'
    // });
     return this.http.post(`${this.baseUrl}wishlist/add`,data);
  }
deleteFromwishlist(id: number): Observable<any> { 
  
     return this.http.post(`${this.baseUrl}wishlist/delete/${id}`,'');
  }
  showWish(userId:number){
       return this.http.get(`${this.baseUrl}wishlist/show/${userId}`)
    }

    isLoggedIn() {
      return localStorage.getItem('token') !== null;
    }


}
