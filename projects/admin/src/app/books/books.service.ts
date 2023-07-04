import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { bookmodel } from './bookmodel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class BooksService {
 addBookURl:string;
 getBookURL:string;
 updateBookURL:string;
 deleteBookURL:string;
//  show:string;

  constructor(private _httpClient:HttpClient) {
    this.addBookURl='https://dc82-105-197-97-118.ngrok-free.app/api/book/add';
    this.getBookURL='https://dc82-105-197-97-118.ngrok-free.app/api/book/showAll';
    this.updateBookURL='https://dc82-105-197-97-118.ngrok-free.app/api/book/edit';
    this.deleteBookURL='https://dc82-105-197-97-118.ngrok-free.app/api/book/delete';
    // this.show="https://dc82-105-197-97-118.ngrok-free.app/api/book/showAll";
   }
   showbook():Observable <any>{
    return this._httpClient.get("https://dc82-105-197-97-118.ngrok-free.app/api/book/showAll");
   }
   addBook(b:bookmodel):Observable <bookmodel>{
    return this._httpClient.post<bookmodel>(this.addBookURl,b);
   }
   getAllBooks():Observable <bookmodel[]> {
    return this._httpClient.get<bookmodel[]>(this.getBookURL)
   }
   updateBook(b:bookmodel):Observable <bookmodel>{
    return this._httpClient.put<bookmodel>(this.updateBookURL,b);
   }
   deleteBook(b:bookmodel):Observable <bookmodel>{
    return this._httpClient.delete<bookmodel>(this.deleteBookURL+'/'+b.id);
   }
}
