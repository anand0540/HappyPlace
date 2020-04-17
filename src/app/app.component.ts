import { Component, OnInit } from '@angular/core';
import { UserService } from './content/services/user.service';
// import { AuthService } from './services/auth.service';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'HappyPlace';
  constructor(){}
  ngOnInit(){

  }

}













  // adminLogin =false;
  // adminRefresh= false;
  // subscription: Subscription;

  // constructor(private router: Router, private serv: UserService) {
  //   this.subscription = router.events.subscribe((event) => {
  //       if (event instanceof NavigationStart) {
  //         browserRefresh = !router.navigated;
  //       }
  //   });
  // }  
  // ngOnInit(){
  //   this.serv.adminLogin.subscribe(()=>{
  //     this.adminRefresh= true;
  //   })
  // }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
  // goToAdmin(){
  //   this.adminLogin = true;
  // }

