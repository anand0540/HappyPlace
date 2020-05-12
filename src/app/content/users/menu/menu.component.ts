import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  todayList:any [];
	length:number=0;
  constructor(public userServ: UserService) { }

  ngOnInit(): void {
    this.userServ.imgDetailList.snapshotChanges().subscribe((list)=>{
			this.length = (list.length -1);
			console.log(this.length);
			
			this.todayList = list.map((res)=>{
			  return res.payload.val(); 
			});
	})
  }

}
