import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    email: '',
    password: '',
    confirmPass: '',
    name: '',
    mobile: ''
 };
  constructor() { }

  ngOnInit(): void {
  }
  onSignUpRegular(){
    console.log(this.user.name);
    console.log(this.user.mobile);

    
    // this.authSer.signUpRegular(this.user.email,this.user.password);
  }
  onSignWithTwitter(){
    // this.authSer.signInWithTwitter();
  }
  onSignWithGoogle(){
    // this.authSer.signInWithGoogle();
  }
}
