import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  adminInfo:FormGroup= new FormGroup({
    name : new FormControl (null),
    email: new FormControl (null),
    password : new FormControl (null)
  })
  errorMessage:string='';  
  constructor(private _AuthService:AuthService , private _Router : Router){}
  signUpForm(adminInfo:FormGroup){
     console.log(this.adminInfo.value)
    this._AuthService.signUp(this.adminInfo.value).subscribe((res:any)=>{
      console.log(res)
        if(res.token!='')
        {  
           this._Router.navigate(['login'])
           localStorage.setItem('token',res.token);

          console.log('success')
        }
        else{
          console.log('err');
        }
      }
    )
  }
}
