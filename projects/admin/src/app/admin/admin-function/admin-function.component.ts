import { Component } from '@angular/core';
import { AdminServiseService } from '../admin-servise.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-admin-function',
  templateUrl: './admin-function.component.html',
  styleUrls: ['./admin-function.component.css']
})
export class AdminFunctionComponent {
  constructor(public _service:AdminServiseService){
  //  _service.showAdmin.subscribe({next:(res: any)=>
  //     console.log(res)

    _service.showAdmin().subscribe(
      (res: any) => {
       console.log(res)
      },
      (err: any) => {
        console.log('error with fetching data');
      }
    );
  }
}


