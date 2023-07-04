import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { articleModel } from './articleModel';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor( private _httpClient : HttpClient) { }
}
