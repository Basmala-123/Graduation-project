import { AuthService } from './../../../admin/src/app/auth/auth.service';
import { CanActivate, Router,NavigationEnd  } from '@angular/router';
import { Component } from '@angular/core';
import { GuardGuard } from './guard.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SemiBook';
  isVisible:boolean=true;
  constructor(private router: Router){ 
    router.events.subscribe((val:any)=>{
      if(val instanceof NavigationEnd){
        if (val.url=='/login'||val.url=='/signup')this.isVisible=false;
        else this.isVisible=true;}   
    } )
  }

  ISloggedin(){
    CanActivate:[GuardGuard]
  }
  
}
