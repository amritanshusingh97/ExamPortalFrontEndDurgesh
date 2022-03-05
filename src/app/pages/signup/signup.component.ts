import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  public user ={
    username:'',
    password:'',
    firstName:'',
    lastname:'',
    email:'',
    phone:''

  }
 
  ngOnInit(): void {
  }

  formSubmit(){
    // alert("Register Form Submitted");

    //add user
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //success
        console.log(data);
        alert("success");

      },
      (error)=>{
        //error
        console.log(error);
        alert("error");

      }
    );

  }
}
