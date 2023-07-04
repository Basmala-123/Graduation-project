import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { FormControl} from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  searchControl=new FormControl();
  searchResults:any = [];
  // isVisible:boolean=false;
  isVisible:boolean = localStorage.getItem('token') !== null;
   wishitem:any=[];
  // wishitem:any=[];
  userId:any=localStorage.getItem('id');
  constructor(private dataService: GetDataService,private router: Router) {}
  ngOnInit(){
    this.wishlist();
    this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => {
        this.dataService.searchBooks(value).subscribe(results => {  
          this.searchResults = results;
          this.isVisible=true;
          if (this.searchControl.value==0) this.isVisible=false;
        });
        this.isVisible=false;
      });   
  }
  user_name=localStorage.getItem('userName');

  logout(){
    localStorage.clear();
    this.isVisible=false;
    // window.location.reload();
    // this.router.navigate(['/login']);
  }
  wishlist(){
    this.userId=localStorage.getItem('id');
    this.dataService.showWish(this.userId).subscribe((res)=>{
      this.wishitem=res;
    } )
  }
}

  // sendData(event: any) {
  //   let query:string=event.target.value;

  //   this.dataService.searchBooks(query).subscribe((res:any)=>{
  //     // this.searchPrd=res;
  //     console.log(res);
  //   } , err=>{
  //     console.log("err");
  //   })
  //   // this.searchPrd = this.dataService.searchBooks(event.target.value);
  // }

  // sendData(event:any){

  //   this._http.get.GetDataService()
  //   console.log(event.target.value);

  // }
