import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/content/services/auth.service';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
//   user = {
//     email: '',
//     password: '',
//     confirmPass: '',
//     name: '',
//     mobile: ''
//  };
  constructor(    public authService: AuthService) { }

  ngOnInit() {
  }
 
}
