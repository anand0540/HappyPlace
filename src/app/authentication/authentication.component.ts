import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: []
})
export class AuthenticationComponent implements OnInit {
  loginClicked = false;
  signupClicked = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.signUpClicked.subscribe(()=>this.signupClicked=true);
    this.authService.logInClicked.subscribe(()=>this.loginClicked=true);
  }

}
