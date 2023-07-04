import { Component, OnInit } from '@angular/core';
import { PagesServiceService } from '../services/pages-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Category: any[] = [];
  articles: object[] = [];
  firstThreeCategories: any[] = [];
  firstThreeArticles: any[] = [];
  

  constructor(private service: PagesServiceService) {
    this.getCategory();
    this.getArticles();
  }

  ngOnInit() {}

  getCategory() {
    this.service.getAllCategory().subscribe((res: any) => {
      this.Category = res;
      this.firstThreeCategories = this.Category.slice(0, 3);
    });
  }
  getArticles() {
    this.service.getAllArticles().subscribe((res:any) => {
      this.articles = res;
      this.firstThreeArticles=this.articles.slice(0,3);
    });
  }
}
