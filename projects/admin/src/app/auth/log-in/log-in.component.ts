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
  adminLogin(adminDataInfo : FormGroup){
     console.log(this.adminDataInfo)
     let savedtoken=localStorage.getItem('token');
    this._AuthService.logIn(this.adminDataInfo.value).subscribe((res:any)=>{
      console.log(res)
      localStorage.setItem('token',res.token);
      this._AuthService.saveAdminData();
      this._Router.navigate(['/home'])
    })
  }
}
