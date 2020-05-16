import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from 'src/app/content/services/user.service';
import { Table, Order, UnresTable } from 'src/app/content/models/user.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class AdminOrderStatusComponent implements OnInit {
  list: Order[];
  orderMsgRead = false;
 

  constructor(private service: UserService, 
              public userServ: UserService,
              private toastr: ToastrService,
              private elRef: ElementRef,
    ) { }

  ngOnInit() {
  
    this.service.getOrder().subscribe(actionArr=>{
      this.list = actionArr.map(item => {
       
        return {id:item.payload.doc.id, ...item.payload.doc.data() as Order};  
      })
    });
   
  }
  
  orderRead(id){
    this.elRef.nativeElement.querySelector('#'+id).style.backgroundColor = "yellowgreen";
  } 
  deleteOrder(id){
    if(confirm(" Are you sure about declining this orders?")){
      this.elRef.nativeElement.querySelector('#'+id).style.backgroundColor = "red";
      // this.firestore.doc('Orders/'+id).delete();
      this.toastr.success("Order declined");
      // this.elRef.nativeElement.querySelector('#'+id).style.display = "none";

    }
  }
 
  
  
}
