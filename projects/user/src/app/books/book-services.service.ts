import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {
  baseUrl="https://books.mhouses.net/api/";
  getAllAuthors: any;

  constructor( private _http:HttpClient) { }
  getAllBooks(){
    return this._http.get(this.baseUrl+'book/showAll')
  }
  filterBooks(authorName:any,rate:any,categoryName:any){
    return this._http.get(`${this.baseUrl}book/showAll?filter[author.name]=${authorName}&filter[rate]=${rate}&filter[category.name]=${categoryName}`)
  }
  getBook(id:number){
    return this._http.get(this.baseUrl+`book/show/${id}`)
  }
  getAllCategories(){
    return this._http.get(this.baseUrl+'category/showAll')
  }
  getAllAuthor(){
    return this._http.get(this.baseUrl+'author/showAll')
  }
  getAuthor(id:number){
    return this._http.get(this.baseUrl+`author/show/${id}`)
  }
  showFav(userId:number){
    return this._http.get(`${this.baseUrl}wishlist/show/${userId}`)
  }
}
