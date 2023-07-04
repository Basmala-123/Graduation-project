import { Component } from '@angular/core';
import { FormBuilder ,  FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { articleModel } from '../articleModel';
import { ArticleService } from '../article.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent  {
  articleDetails!:FormGroup;
  articleObject :articleModel = new articleModel ;
  articleList : articleModel[]=[];
  //articleArray : any[]=[];
  constructor(public formBuilder:FormBuilder , private _ArticleService : ArticleService)
  {

  }
  
  

  ngOnInit():void {
    this.articleDetails=this.formBuilder.group({
      title: [''],
      content: [''],
      image: [''],
    })
  }
 
//add article
addArticle(){
  console.log(this.articleDetails.value)
  //this.articleArray.push(this.articleDetails.value)
  
}
//delete article
deleteArticle(){
  window.alert('deleted')
}
 









// test 
 item = document.getElementById('exampleInputTitle')
}
