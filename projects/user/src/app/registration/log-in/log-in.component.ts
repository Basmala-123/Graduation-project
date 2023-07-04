
import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  errorMessage='';
  islogged:boolean=false;
  loginForm : FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null, [Validators.required])
  })

  constructor(private _authService : AuthService , private router:Router){
    this.isLoggedIn();
  }


  submitLoginForm(){
    if(this.loginForm.valid){
      
      this._authService.login(this.loginForm.value).subscribe(res=>{
        
        localStorage.setItem('token', res.token);
        localStorage.setItem('userName',res.user.name);
        localStorage.setItem('id',res.user.id);

          this.router.navigate(['/home']);
      },err=>{
        console.log(err);
        this.errorMessage="Invalid emailaddress or password";
      }
      )
    }
  }
  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }




}
