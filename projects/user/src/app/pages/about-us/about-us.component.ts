import { Component } from '@angular/core';
import { PagesServiceService } from '../services/pages-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  articles: object[] = [];
  firstThreeArticles: any[] = [];
  constructor(private service: PagesServiceService) {
    this.getArticles();
}

getArticles() {
  this.service.getAllArticles().subscribe((res:any) => {
    console.log(res);
    this.articles = res;
    this.firstThreeArticles=this.articles.slice(0,3);
  });}


  
}

