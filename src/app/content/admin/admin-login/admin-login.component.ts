import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Action } from '@angular/fire/firestore/interfaces';
import { Router } from '@angular/router';
import { browserRefresh } from '../../../app.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
constructor(public authService: AuthService){}
ngOnInit(){
  
}

}
//   // adminCheck = 'admin'
//   // public browserRefresh: boolean;

//   constructor(private serv: UserService) { }

//   ngOnInit(): void {
//     this.browserRefresh = browserRefresh;
//   }
//   ngOnDestroy(){
//     this.serv.adminLogin.emit(false);

//   }
//   if(browserRefresh){
//     this.serv.adminLogin.emit(true);
//   }


// }
