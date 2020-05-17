import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public authService: AuthService, private elRef: ElementRef, private router: Router) { }

  ngOnInit(): void {
    
  }
  orders(){
    this.elRef.nativeElement.querySelector('#order').classList.add('clicked');
    this.elRef.nativeElement.querySelector('#address').classList.remove('clicked');
    this.router.navigate(['users/profile/orders']);
  }
  address(){
    this.elRef.nativeElement.querySelector('#order').classList.remove('clicked');
    this.elRef.nativeElement.querySelector('#address').classList.add('clicked');
    this.router.navigate(['users/profile/address']);
  }
}
