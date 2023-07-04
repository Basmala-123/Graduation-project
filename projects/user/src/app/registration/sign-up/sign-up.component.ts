import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
registerForm:FormGroup=new FormGroup({
  name:new FormControl(null, Validators.required),
  email:new FormControl(null , [Validators.required , Validators.email]),
  password:new FormControl(null, [Validators.required]),
  phone:new FormControl(undefined, [Validators.required])
})

  constructor(private _authService:AuthService , private router:Router){}
errorMes :any =[];

submitRegisterForm(){
  
  
this._authService.signup(this.registerForm.value).subscribe((res :any)=>{

  this.router.navigate(['/login']);
}, err=>{
  this.errorMes=err.error.message;
  console.log(err.error.message);
  
})
}


}
