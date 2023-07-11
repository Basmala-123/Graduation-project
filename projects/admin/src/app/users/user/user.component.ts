import { Component } from '@angular/core';
import { FormControl, FormGroup , FormBuilder } from '@angular/forms';
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
  constructor(private _UserService : UserService , private _fb: FormBuilder){}
  imagePreview!: string;
  form!: FormGroup;
  

  ngOnInit(): void {
    this.form = this._fb.group({
      name:new FormControl(null),
      email:new FormControl (null),
      password:new FormControl (null),
      phone:new FormControl (null)
    });
    this.showUser()
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.form.patchValue({ image: file });
    this.form.get('image')?.updateValueAndValidity();
    console.log(file);
    console.log(this.form);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  //add function
  // addUser(){
  //   this._UserService.addUser(this.form.value).subscribe((res:userModel)=>{
  //   console.log('res')
  //   console.log(this.form.value)
  //   })
  // }
  //edit
  

  //delete
  // deleteUser(){
  //   window.alert('delete')
  // }
  showUser(){
    this._UserService.showUser().subscribe(
      (res:any)=>{
        console.log('user showed successfully',res);
        for(let users of res){
          const AllUser={
            'name':users.name,
            'email':users.email,
            'password':users.password,
            'phone':users.phone,
            'id':users.id
          }
          this.userObject.push(AllUser)
        } 
      },
      (err:any)=>{
        console.log('failed to show author',err)
      }
    )
  }
  
  deleteUser(user:any){
    this._UserService.deleteUser(user.id).subscribe(
      (res:any)=>{
        console.log('user deleted successfully',res);
      },
      (err:any)=>{
        console.log('failed to delete user',err)
      }
    );
     console.log(user)
  }
}
