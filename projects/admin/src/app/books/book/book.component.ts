import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { bookmodel } from '../bookmodel';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  bookdetail!: FormGroup;
  bookObj: bookmodel = new bookmodel();
  bookList: bookmodel[] = [
    // { id: 1, author: 1, publish: '122', category: 1, bookFile: 'kjs.pdf' },
  ];
  constructor(
    public formBuilder: FormBuilder,
    public _bookservice: BooksService,

  ) {}
  ngOnInit(): void {
    this.getAllBooks();
    this.bookdetail = this.formBuilder.group({
      author: [''],
      publish: [''],
      category: [''],
      bookFile: [''],
    });
  }
  addBook() {
    console.log(this.bookdetail);
    this.bookObj.author = this.bookdetail.value.author;
    this.bookObj.publish = this.bookdetail.value.publish;
    this.bookObj.category = this.bookdetail.value.category;
    this.bookObj.bookFile = this.bookdetail.value.bookfile;
    this._bookservice.addBook(this.bookObj).subscribe(
      (res: any) => {
        console.log(res);
        this.getAllBooks();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getAllBooks() {
    this._bookservice.getAllBooks().subscribe(
      (res: any) => {
        this.bookList = res;
      },
      (err: any) => {
        console.log('error with fetching data');
      }
    );
  }
  showBook() {
    this._bookservice.showbook().subscribe(
      (res: any) => {
        this.bookList = res;
      },
      (err: any) => {
        console.log('error with fetching data');
      }
    );
  }
  editBook(b: bookmodel) {
    this.bookdetail.controls['id'].setValue(b.id);
    this.bookdetail.controls['author'].setValue(b.author);
    this.bookdetail.controls['publish'].setValue(b.publish);
    this.bookdetail.controls['category'].setValue(b.category);
    this.bookdetail.controls['bookFile'].setValue(b.bookFile);
  }
  deleteBook(b: bookmodel) {
    this._bookservice.deleteBook(b).subscribe((res) => {
      console.log(res);
      alert('Book deleted successfully');
      this.getAllBooks();
    }),
      (err: any) => {
        console.log(err);
      };
  }
   showbook:string="";
  updateBook() {
    // this.bookObj.id = this.bookdetail.value.id;
    this.bookObj.author = this.bookdetail.value.author;
    // this.bookObj.name = this.bookdetail.value.name;
    this.bookObj.publish = this.bookdetail.value.publish;
    this.bookObj.category = this.bookdetail.value.category;
    this.bookObj.bookFile = this.bookdetail.value.bookfile;

    this._bookservice.updateBook(this.bookObj).subscribe(
      (res: any) => {
        console.log(this.bookList);
        this.getAllBooks();
      },
      (err: any) => {
        console.log('error with fetching data');
      }
    );
  }
}
