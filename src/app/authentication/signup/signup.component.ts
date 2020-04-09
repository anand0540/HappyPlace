import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authSer: AuthService) { }

  ngOnInit(): void {
  }
  onSignWithTwitter(){
    this.authSer.signInWithTwitter();
  }
  onSignWithGoogle(){
    this.authSer.signInWithGoogle();
  }
}
