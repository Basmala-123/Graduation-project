import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
constructor(private _AuthService :AuthService){
  _AuthService.userData.subscribe({
    next:()=>{
      if(_AuthService.userData.getValue() !== null){
        this.login=true;
      }
      else{
        this.login=false;
      }
      console.log(this.login)
    }
   })
}
login:boolean=false;
ngOnInit(): void{

}
// ngOnChanges(changes: SimpleChanges): void {
//   this._AuthService.adminData.subscribe({
//       next:()=>{
//         if(this._AuthService.adminData.getValue() != null){
//           this.login=true;
//         }
//         else{
//           this.login=false;
//         }
//         console.log(this.login)
//       }
//      })
// }
signOutFunction(){
  this._AuthService.signOut();
}
}
