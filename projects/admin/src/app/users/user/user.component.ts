import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { userModel } from '../userModel';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userObject:userModel[]=[];
  userList : userModel = new userModel;
  constructor(private _UserService : UserService){}
  userDetails:FormGroup=new FormGroup({
    name:new FormControl (null),
    email:new FormControl (null),
    password:new FormControl (null),
    phone:new FormControl (null)
  })

  //add function
  addUser(){
    
    console.log(this.userDetails.value)
  }

  //edit
  editUser(){
    window.alert('edit')
  }

  //delete
  deleteUser(){
    window.alert('delete')
  }
  showUser(){
    //show user data
  }
  showAllUser(){
    //show all user data
  }
}
