import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { bookmodel } from './bookmodel';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private _httpClient:HttpClient) {}
   private token: string | null = localStorage.getItem('token');
   addBook(value:any,file:any):Observable <any>{
    const headers = new HttpHeaders({ 
      Authorization: `Bearer ${this.token}` // Add the token to the Authorization header
    });
    const data = new FormData();
    data.append('author_id', value.authorName);
    data.append('title', value.title);
    data.append('image',value.image)
    data.append('slug',"asmaa");
    data.append('ibsn',"asmaa");
    data.append('description',value.description)
    data.append('rate','2')
    data.append('publish_year', value.publish);
    data.append('category_id', value.category);
    data.append('book', file);
    data.append('name', "asmaa");
    data.append('type', "asmaa");
    data.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    return this._httpClient.post('https://books.mhouses.net/api/book/add' , data , {headers})
   }
   showAllBooks():Observable <any>{
    return this._httpClient.get('https://books.mhouses.net/api/book/showAll')
   }
   deleteBook(id:number):Observable <any>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this._httpClient.post(`https://books.mhouses.net/api/book/delete/${id}`,{},{headers})
   }
   editBook(id:number,value:any,file:any):Observable <any>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    const data = new FormData();
    data.append('author_id', value.authorName);
    data.append('title', value.title);
    data.append('image',value.image)
    data.append('slug',"asmaa");
    data.append('ibsn',"asmaa");
    data.append('description','description')
    data.append('rate','2')
    data.append('publish_year', value.publish);
    data.append('category_id', value.category);
    data.append('book', file);
    data.append('name', "asmaa");
    data.append('type', "asmaa");
    data.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    return this._httpClient.post(`https://books.mhouses.net/api/book/edit/${id}` , data ,{headers})
   }
}
 

