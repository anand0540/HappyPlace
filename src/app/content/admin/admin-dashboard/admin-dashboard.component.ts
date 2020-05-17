import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private userServ: UserService, public authServ: AuthService, private router: Router, private elRef: ElementRef) { }

  ngOnInit() {
    this.userServ.getImgDetailsList();
  }
  user(){
    this.elRef.nativeElement.querySelector('#user').classList.add('clicked');
    this.elRef.nativeElement.querySelector('#booking').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#order').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#set').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#special').classList.remove('clicked');
    this.router.navigate(['admin/dashboard/user']);
  }
  booking(){
    this.elRef.nativeElement.querySelector('#user').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#booking').classList.add('clicked');
    this.elRef.nativeElement.querySelector('#order').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#set').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#special').classList.remove('clicked');
    this.router.navigate(['admin/dashboard/booking']);
  }
  order(){
    this.elRef.nativeElement.querySelector('#user').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#booking').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#order').classList.add('clicked');
    this.elRef.nativeElement.querySelector('#set').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#special').classList.remove('clicked');
    this.router.navigate(['admin/dashboard/order']);
  }
  setTable(){
    this.elRef.nativeElement.querySelector('#user').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#booking').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#order').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#set').classList.add('clicked');
    this.elRef.nativeElement.querySelector('#special').classList.remove('clicked');
    this.router.navigate(['admin/dashboard/set-table']);
  }
  todaySpecial(){
    this.elRef.nativeElement.querySelector('#user').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#booking').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#order').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#set').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#special').classList.add('clicked');
    this.router.navigate(['admin/dashboard/today-special']);
  }


}
