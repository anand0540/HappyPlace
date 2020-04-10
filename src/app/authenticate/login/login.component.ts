import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
 };
 

 
 
  constructor(private authSer: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onSignWithEmail(){
    this.authSer.signInRegular(this.user.email, this.user.password)
      .then((res) => {
         console.log(res);
   
         this.router.navigate(['/about']);
      })
      .catch((err) => console.log('error: ' + err));
}
  
  onSignWithTwitter(){
    this.authSer.signInWithTwitter();
  }
  onSignWithGoogle(){
    this.authSer.signInWithGoogle();
  }

}
