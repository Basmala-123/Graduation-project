import { Component } from '@angular/core';
import { PagesServiceService } from '../services/pages-service.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  
  articles: any[] = [];
  constructor(private service : PagesServiceService){
    this.getArticles();
  }
  getArticles() {
    this.service.getAllArticles().subscribe((res:any) => {
      this.articles = res;
    });
  }
}
