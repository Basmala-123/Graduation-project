import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { CatServiceService } from '../cat-service.service';
import { categoryModel } from '../catModel';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  
  catObject : categoryModel = new categoryModel();
  catList : categoryModel []=[];
  constructor( private _CatService : CatServiceService){}
    x :FormGroup = new FormGroup({
    name:new FormControl(null),
    describtion:new FormControl( null),
    image:new FormControl(null)
  })

  addCategory() {
   window.alert('add')
  }

  //edit category
  editCategory(){
    console.log('category')
  }
// delete category
deleteCtegory(){
  window.alert('deleted')
}
  
}
