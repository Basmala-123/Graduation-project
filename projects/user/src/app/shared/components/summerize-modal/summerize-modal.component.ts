import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetDataService } from '../../services/get-data.service';
@Component({
  selector: 'app-summerize-modal',
  templateUrl: './summerize-modal.component.html',
  styleUrls: ['./summerize-modal.component.css']
})
export class SummerizeModalComponent {
  summerization='';
  isReloading:boolean=false;
  constructor(private http: HttpClient ,private service:GetDataService){}
  //using the function to use api
  submitMyText(text:any){
    this.isReloading=true;
    this.service.summerize(text).subscribe((res:any)=>{
      this.summerization=res.summary;

      this.isReloading=false;
    } )
  }
}
