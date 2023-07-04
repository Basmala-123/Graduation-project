import { BookServicesService } from './../book-services.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  allBooks:any=[];
  allWishList:any=[];
  userId:any=localStorage.getItem("id");
  constructor(private service:BookServicesService){
    this.getBooks();
    this.getWishList();
  }
  getBooks(){
    this.service.getAllBooks().subscribe(
      (data:any)=>{
        this.allBooks=data;
      },
      error=>{
        console.log(error);
      }
    )
  }
    getWishList(){
      this.service.showFav(this.userId).subscribe((res:any)=>{
         this.allWishList = res.map((item:any) => item.book);
          console.log(this.allWishList);      
      })
    }

}
