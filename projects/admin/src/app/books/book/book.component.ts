import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { bookmodel } from '../bookmodel';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  private selectedFile: File|null =null;
  bookdetail!: FormGroup;
  bookObj: bookmodel = new bookmodel();
  bookList: bookmodel[] = [];
  constructor(private _fb: FormBuilder, public _bookservice: BooksService,) {}
  imagePreview!: string;
  editedBook:any;
  form2!:FormGroup;
  form!: FormGroup;
  onFileSelected(event: any): void {
    const files: FileList = event?.target?.files;
    if (files && files.length > 0) {
      this.selectedFile = files.item(0);
    }
    console.log(this.selectedFile)
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
  onImageEdited(event: Event) {
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
  ngOnInit(): void {
    this.form = this._fb.group({
      bookId:new FormControl(null),
      title:new FormControl(null),
      authorName:new FormControl(null),
      description:new FormControl(null),
     publish:new FormControl( null),
     category:new FormControl(null),
     bookfile:new FormControl(null),
     image:new FormControl(null),
     name:new FormControl(null),
     type:new FormControl(null),
    });
    this.form2=this._fb.group({
      bookId:new FormControl(null),
      title:new FormControl(null),
      authorName:new FormControl(null),
      description:new FormControl(null),
     publish:new FormControl( null),
     category:new FormControl(null),
     bookfile:new FormControl(null),
     image:new FormControl(null),
     name:new FormControl(null),
     type:new FormControl(null),
    });
    this.showAllBook();
  }
  addBook() {
    console.log(this.form)
    this._bookservice.addBook(this.form.value,this.selectedFile).subscribe(
      (res: any) => {
        console.log('book added successfully', res);
      },
      (err: any) => {
        console.error('Failed to add book', err);
      }
    );
   }
  showAllBook(){
    this._bookservice.showAllBooks().subscribe(
      (res: any) => {
        console.log('Book showed successfully', res);
        for(let book of res){
          const allBook= {
            "title":book.title,
           "author":book.author_id,
           "publish":book.publish_year,
           "image":book.image,
           "category":book.category_id,
           "book":book.book,
           "id":book.id
           }
         this.bookList.push(allBook);
         }
      },
      (err: any) => {
        console.error('Failed to show book', err);
      }
    );
  };
  deleteTheBook(book:any){
    this._bookservice.deleteBook(book.id).subscribe(
      (res:any)=>{
        console.log('Book Deleted Successfully' , res)
      },
      (err:any)=>{
        console.log('Failed To Delete Book' , err)
      }
    );
    console.log(book)
  }
  editBook(){
    console.log(this.form2,this.selectedFile)
    this._bookservice.editBook(this.editedBook.id,this.form2.value,this.selectedFile).subscribe(
      (res: any) => {
        console.log('book edited successfully', res);
      },
      (err: any) => {
        console.error('Failed to edited book', err);
    }
    );
  }
  saveEdit(book:any){
    this.editedBook=book;
    this.form2.patchValue(book)
  } 
}
