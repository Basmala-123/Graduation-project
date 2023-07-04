import { Component } from '@angular/core';
import { BookServicesService } from '../book-services.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent {
  AllbookData:any=[];
  DisplayBooks:any=[];
  Categories:any=[];
  Author:any=[];
  p:number=1;
  itemsPerPage:number=6;
  totalPrd:any;
  FilterItems:any={
    Category:[],
    Author:[],
    Rate:[]
  }
  constructor(private service:BookServicesService){
    this.getBooks();
    this.getCategories();
    this.getAuthor();
    this.filterBooks();
  }
  ngOninit(): void{
    this.getBooks();
  }

getCategories(){
  this.service.getAllCategories().subscribe(
    (data:any)=>{
     this.Categories=data;
    }
  )
}
getAuthor(){
  this.service.getAllAuthor().subscribe(
    (data:any)=>{
       this.Author=data;
    }
  )
}
getBooks(){
  this.service.getAllBooks().subscribe(
    (data:any)=>{
      this.AllbookData=data;
      this.DisplayBooks=this.AllbookData;
      this.totalPrd=data.length; 
    },
    error=>{
      console.log(error);
    }
  )
}
filterBooks(){
  this.service.filterBooks(this.FilterItems.Author,this.FilterItems.Rate,this.FilterItems.Category).subscribe((res)=>{
    this.DisplayBooks=res;
  } )
}

OnChange(event: any) {

  if(event.target.checked){
    if(event.target.name=="Category")
    this.FilterItems.Category.push(event.target.value);
    else if(event.target.name=="Author"){
    this.FilterItems.Author.push(event.target.value);
    }
    else{
    this.FilterItems.Rate.push(event.target.value);
    }
  }
  else{

    if(event.target.name == "Category") {
          const index = this.FilterItems.Category.indexOf(event.target.value);
          if (index > -1) {
            this.FilterItems.Category.splice(index, 1);
          }
        } else if(event.target.name == "Author") {
          const index = this.FilterItems.Author.indexOf(event.target.value);
          if (index > -1) {
            this.FilterItems.Author.splice(index, 1);
          }
        } else if(event.target.name == "Rate") {
          const index = this.FilterItems.Rate.indexOf(event.target.value);
          if (index > -1) {
            this.FilterItems.Rate.splice(index, 1);
          }
        }
      
    }
    this.filterBooks();
}
}
