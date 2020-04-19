import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  constructor(private userServ: UserService, public authServ: AuthService){}
  ngOnInit(){
    this.userServ.getImgDetailsList();

  }

}
