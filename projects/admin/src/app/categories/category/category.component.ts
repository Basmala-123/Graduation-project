import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { CatServiceService } from '../cat-service.service';
import { categoryModel } from '../catModel';
import { authorModel } from '../../author/authorModel';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  catObject ={
    "name":"drama",
    "description":"hello",
    "image":"web"
  }
  catList : categoryModel []=[];
  constructor( private _CatService : CatServiceService , private _fb: FormBuilder){}
  editedCat:any;
  imagePreview!: string;
  form!: FormGroup;
  form2!: FormGroup;
  ngOnInit(): void {
    this.form = this._fb.group({
      name:new FormControl(null),
    description:new FormControl( null),
     image:new FormControl(null)
    });
    this.form2 = this._fb.group({
      name:new FormControl(null),
    description:new FormControl( null),
    image:new FormControl(null)
    });
    this.showCategory()
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
  addCategory() {
    console.log(this.form.value)
    this._CatService.addCategory(this.form.value).subscribe(
      (res: any) => {
        console.log('Category added successfully', res);
      },
      (err: any) => {
        console.error('Failed to add category', err);
      }
    );
  }
  showCategory(){
    this._CatService.showCategory().subscribe(
      (res: any) => {
        console.log('Category showed successfully', res);
        for(let cat of res){
          const cate= {
           "name":cat.name,
           "description":cat.description,
           "image":cat.image,
           "id":cat.id
           }
         this.catList.push(cate);
         }
      },
      (err: any) => {
        console.error('Failed to show category', err);
      }
    );
  }
  editCategory(){
    console.log(this.form2.value)    
this._CatService.aditCtegory(this.editedCat.id,this.form2.value).subscribe(
  (res: any) => {
    console.log('Category edited successfully', res);
  },
  (err: any) => {
    console.error('Failed to edit category', err);
}
);
  }
deleteCtegory(category:any){
  this._CatService.deleteCtegory(category.id).subscribe(
    (res: any) => {
      console.log('Category deleted successfully', res);
    },
    (err: any) => {
      console.error('Failed to deleted category', err);
    }
  );
  console.log(category)
}
saveEdit(category:any){
  this.editedCat=category;
  this.form2.patchValue(category)
} 
}
