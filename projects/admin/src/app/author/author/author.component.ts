import { Component } from '@angular/core';
import { AuthorModule } from '../author.module';
import { FormBuilder  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { authorModel } from '../authorModel';
import { AuthorServiceService } from '../author-service.service';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  
  constructor(public formBuilder:FormBuilder,private service:AuthorServiceService)
  {
    this.showAuthor();

  }
  authorDetails!:FormGroup;
  authorObject :authorModel = new authorModel ;
  authorList : authorModel[]=[];

  ngOnInit():void {
    this.authorDetails=this.formBuilder.group({
      name: [''],
      description: [''],
      image: [''],
    })
  }

  showAuthor(){
    this.service.showAuthors().subscribe((data:authorModel[])=>{
      this.authorList=data;

    })
  }
  // add
  addAuthor(){
    console.log(this.authorDetails)
    this.service.addAuthors(this.authorDetails.value).subscribe((data:authorModel)=>{
      console.log("add successfull")
    })
  }

  // edit
  editAuthor(){
    window.alert('edit done successfully')
  }

  // delete
  deleteAuthor(event:any){
    
    this.service.deleteAuthors(event.target.value).subscribe( data=>{
      // console.log(data);
      this.showAuthor();
    })
  }
}
