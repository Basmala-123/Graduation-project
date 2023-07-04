import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CatServiceService {

  constructor(private http: HttpClient) {}
  // private apiUrl = 'http://localhost:3000/items';
  
}
