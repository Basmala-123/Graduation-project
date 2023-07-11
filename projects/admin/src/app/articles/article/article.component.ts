import { Component } from '@angular/core';
import { FormBuilder ,  FormGroup,FormControl } from '@angular/forms';
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
  constructor(private _fb: FormBuilder , private _ArticleService : ArticleService){}
  editArt:any;
  imagePreview!: string;
  form!: FormGroup;
  form2!: FormGroup;
  ngOnInit():void {
    this.form=this._fb.group({
      title: new FormControl(null),
      content: new FormControl(null),
      image: new FormControl(null),
    });
    this.form2=this._fb.group({
      title: new FormControl(null),
      content: new FormControl(null),
      image: new FormControl(null),
    });

    this.showArticle()
  }
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.form.patchValue({ image: file });
    this.form.get('image')?.updateValueAndValidity();
    console.log(file);
    console.log(this.form);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  onImageEdit(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.form2.patchValue({ image: file });
    this.form2.get('image')?.updateValueAndValidity();
    console.log(file);
    console.log(this.form2);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
//add article
addArticle(){
  console.log(this.form.value)
  this._ArticleService.addArticle(this.form.value).subscribe(
    (res: any) => {
      console.log('Article added successfully', res);
    },
    (err: any) => {
      console.error('Failed to add carticle', err);
    }
  );
}
// show article
showArticle(){
  this._ArticleService.showArticle().subscribe(
    (res:any)=>{
      console.log('Article showed successfuly' , res);
      for(let article of res){
        const articleObj={
          'title': article.title,
          'content':article.content,
          'image':article.image,
          'id':article.id
        }
        this.articleList.push(articleObj)
      }
    },
    (err:any)=>{
      console.log('failed to show article' , err)
    }
  );
}


//delete article
deleteArticle(article:any){
 this._ArticleService.deleteArticle(article.id).subscribe(
  (res:any)=>{
    console.log('Article Deleted Successfully',res)
  },
  (err:any)=>{
    console.log('Failed To Deleted Article' , err)
  }
 );
 console.log(article)
}
// edit
editArticle(){
  // this.articleList.push(this.articleObj)
  // this.form2.controls['id'].setValue(this.articleObject.id);
  
  console.log(this.form2.value);
this._ArticleService.editArticle(this.editArt.id,this.form2.value).subscribe(
  (res: any) => {
    console.log('article edited successfully', res);
  //   console.log(this.articleList)
  //   this.form2.controls['title'].setValue(res.title);
  // this.form2.controls['content'].setValue(res.content);
  // this.form2.controls['image'].setValue(res.image);
  
  },
  (err: any) => {
    console.error('Failed to edited article', err);
}
);
}
saveEdit(article:any){
  this.editArt=article;
  this.form2.patchValue(article)
  
}
}
