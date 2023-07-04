import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiseService {

  constructor(private _httpClient:HttpClient ) {
  }
  showAdmin():Observable<any>{
    return this._httpClient.get("http://127.0.0.1:8000/api/book/show/3")
  }
}
