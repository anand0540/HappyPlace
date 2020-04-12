import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from 'src/app/content/services/user.service';
import { User, Table } from 'src/app/content/models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-order-status',
  templateUrl: './admin-order-status.component.html',
  styleUrls: ['./admin-order-status.component.css']
})
export class AdminOrderStatusComponent implements OnInit {
  list: User[];
  bookingList: Table[];
  orderMsgRead = false;
  bookingMsgRead = false;

  constructor(private service: UserService, 
              private firestore: AngularFirestore, 
              private toastr: ToastrService,
              private elRef: ElementRef
    ) { }

  ngOnInit() {
  

    this.service.getOrder().subscribe(actionArr=>{
      this.list = actionArr.map(item => {
       
        return {id:item.payload.doc.id, ...item.payload.doc.data() as User};  
      })
    });
    this.service.getBooking().subscribe(actionArr=>{
      this.bookingList = actionArr.map(item=>{
        return {id:item.payload.doc.id, ...item.payload.doc.data() as Table};
      })
    })

  }
  deleteBooking(id: string){
    if(confirm("Are you sure about deleting this booking? ")){
      this.firestore.doc('Tables/'+id).delete();
      this.toastr.success("Booking deleted");
    }
  }
  deleteOrder(id:string){
    if(confirm(" Are you sure about deleting this orders?")){
      this.firestore.doc('Orders/'+id).delete();
      this.toastr.success("Order deleted");

    }
  }
  bookingRead(id){
    // this.bookingMsgRead=true;
    // console.log("ordChanged");
    this.elRef.nativeElement.querySelector('#'+id).style.backgroundColor = "yellowgreen";

  }
  orderRead(id){
    this.elRef.nativeElement.querySelector('#'+id).style.backgroundColor = "yellowgreen";
  }

}
