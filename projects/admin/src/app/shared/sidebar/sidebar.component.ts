import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private _AuthService : AuthService){
    
  }
  // isLoading:boolean=false;
  isLoading:boolean = false;
  status: boolean = false;
    clickEvent(){
        this.status = !this.status;
    }
    ngOnInit():void{
     this._AuthService.userData.subscribe({
        next:()=>{
          if(this._AuthService.userData.getValue() !== null){
            this.isLoading=true;
          }
          else{
            
            this.isLoading=false;
          }
        }
        
      })
      // this.logOut()
    }

    // logOut(){
    //   this._AuthService.signOut()
    // }
  
}
