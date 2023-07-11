import { Component } from '@angular/core';
import { AuthorModule } from '../author.module';
import { FormBuilder  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup , FormControl } from '@angular/forms';
import { authorModel } from '../authorModel';
import { AuthorServiceService } from '../author-service.service';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  constructor(private _fb: FormBuilder,private service:AuthorServiceService) {}
  editedAuthor:any;
  authorDetails!:FormGroup;
  authorObject :authorModel = new authorModel ;
  authorList : authorModel[]=[];
  imagePreview!: string;
  form2!:FormGroup
  form!: FormGroup;
  ngOnInit():void {
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
   this.showAuthor()
  }
  onImagePicked(event: Event) {
    const fileInput = event.target as HTMLInputElement;
  const file = fileInput.files![0];
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
    const fileInput = event.target as HTMLInputElement;
  const file = fileInput.files![0];
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
  // add
  addAuthor() {
    console.log(this.form.value)
    this.service.addAuthor(this.form.value).subscribe(
      (res: any) => {
        console.log('Author added successfully', res);
      },
      (err: any) => {
        console.error('Failed to add Author', err);
      }
    );
  }
  // show
  showAuthor(){
    this.service.showAllAuthor().subscribe(
      (res:any)=> {
        console.log('Author showed successfully',res);
        for(let author of res){
          const AllAuthor={
            'name':author.name,
            'description':author.description,
            'image':author.image,
            'id':author.id
          }
          this.authorList.push(AllAuthor)
          console.log(this.authorList)
        }
      },
    (err:any)=> {
      console.log('failed to show author',err)
    }
    )
  }
  deleteAuthor(author:any){
   this.service.deleteAuthor(author.id).subscribe(
    (res:any)=>{
      console.log('Author deleted successfully',res)
    },
    (err:any)=>{
      console.log('failed to delete the author',err)
    }
   );
   console.log(author)
  }
  editAuthor(){
    console.log(this.form2.value)
this.service.editAuthor(this.editedAuthor.id,this.form2.value).subscribe(
  (res: any) => {
    console.log('Author edited successfully', res);
  },
  (err: any) => {
    console.error('Failed to edited Author', err);
}
);   
  }
  saveEditAuthor(author:any){
    this.editedAuthor=author;
    this.form2.patchValue(author)
  }
}
