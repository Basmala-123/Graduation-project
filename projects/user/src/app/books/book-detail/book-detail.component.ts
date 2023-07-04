import { Component } from '@angular/core';
import { BookServicesService } from '../book-services.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GetDataService } from '../../shared/services/get-data.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  add:any="Add to Favourite";
  book:any=[];
  pdfSrc:string="";
  allBooksCategory:any=[];
  bookAuthData:any=[];
  constructor(private service:BookServicesService,private route:ActivatedRoute, private dataService:GetDataService , private router:Router){
    this.getAllBookCategory();
  }
  ngOnInit():void{
    this.route.params.subscribe( (params:any) =>this.getBookById(params['id']))
    this.getAuthorName(1);
  }

  getBookById(id:number){
    this.service.getBook(id).subscribe( (data:any)=>{
      this.book=data;
      this.bookAuthData=this.book.author_id;
    })
  }
  getAuthorName(id:number){
    this.service.getAuthor(id).subscribe( data=>{
      this.bookAuthData=data;
    })
  }
  getAllBookCategory(){
    this.service.getAllBooks().subscribe( data=>{
      this.allBooksCategory = data;
    })
  }

  
  addtofav(id:number){
    this.dataService.addTowishlist(id).subscribe( (res)=>{
      this.add="delete from wishlist";
    })
    this.dataService.showWish(id).subscribe((res)=>{
      console.log(res);
    } )

  }
  range(n: any): any[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }
  openBook(event :any){
    let id:any=event.target.value;
    // this.router.navigate(['/reader'], { state: { id: event.target.value} });
    this.service.getBook(id).subscribe( (data:any)=>{
      this.pdfSrc=data.book;
      this.router.navigate(['/reader'], { state: { pdf: this.pdfSrc} });
    })

  }
}


