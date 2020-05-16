import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/content/models/user.model';
import { UserService } from 'src/app/content/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderList: Order[];
  constructor( public userServ: UserService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.userServ.getOrder().subscribe(arr=>{
      this.orderList = arr.map(el=>{
        return {id:el.payload.doc.id, ...el.payload.doc.data() as Order}
      })
    })
  }

}
