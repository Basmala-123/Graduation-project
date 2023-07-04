import { Component, Input } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})

export class BookCardComponent {
  @Input() book :any=[];
  Selected:boolean=false;
  constructor(private service: GetDataService){}

  addtofav(id:number){
    console.log("ggggggggggggggggg");
    console.log(id);
    this.service.addTowishlist(this.book.id).subscribe((res:any)=>{
      this.Selected=true;
    })
  }
  deletefromfav(id:number){
    this.service.deleteFromwishlist(id).subscribe((res:any)=>{
      this.Selected=false;
    })
  }
  range(n: any): any[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }
}
