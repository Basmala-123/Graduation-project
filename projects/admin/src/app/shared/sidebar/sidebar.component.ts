import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 
  constructor(private _AuthService : AuthService){}
  isLoading:boolean=false;
  status: boolean = false;
    clickEvent(){
        this.status = !this.status;
    }
    
    ngOnInit():void{
      this._AuthService.adminData.subscribe({
        next:()=>{
          if(this._AuthService.adminData.getvalue() !=null){
            this.isLoading=true;
          }
          else
          {
            this.isLoading=false
          }
        }
      })
    }
    
}
