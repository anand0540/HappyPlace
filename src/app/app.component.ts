import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HappyPlace';
  constructor(private authService: AuthService){}
   onSignup(){
    this.authService.signUpClicked.emit();
   }
   onLogin(){
    this.authService.logInClicked.emit();

   }
}
