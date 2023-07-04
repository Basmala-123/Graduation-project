import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  adminDataInfo : FormGroup = new FormGroup({
   password : new FormControl(null),
   email : new FormControl(null),    
  })
  
  constructor(private _AuthService:AuthService , private _Router : Router){}
  errorMessage:string='';
  adminLogin(){
    // console.log(this.adminDataInfo.value)
    this._AuthService.logIn(this.adminDataInfo.value).subscribe({
      next:(response)=>{
        if(response.message === "success"){
          localStorage.setItem('adminToken',response.token)
          this._AuthService.saveAminData()
          this._Router.navigate(['/home'])
        }
        else
        {
          this.errorMessage=response.message;
        }  
        

      }
    })
  }
}
