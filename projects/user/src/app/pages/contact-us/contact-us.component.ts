import { Component, ViewChild } from '@angular/core';
import { PagesServiceService } from '../services/pages-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  formData:any={};
  message='';
  @ViewChild('myForm') myForm: any;
  showMessage: boolean =false;

  constructor(private Service:PagesServiceService ){}

  onSubmit(formdata:any){
    this.Service.sendMessage(formdata).subscribe(res=>{
      this.message= "Thanks for your message We will contact you as soon as possible";
      this.myForm.reset();
      this.showMessage=true;
      setTimeout(() => {
        this.showMessage = false;
      }, 4000);
      
    } )
  }
}
