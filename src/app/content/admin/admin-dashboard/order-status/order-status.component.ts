import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from 'src/app/content/services/user.service';
import { Table, Order, UnresTable } from 'src/app/content/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/content/services/auth.service';


@Component({
  selector: 'app-admin-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class AdminOrderStatusComponent implements OnInit {
  list: Order[];
  orderMsgRead = false;
 

  constructor( 
              public userServ: UserService,
              private authServ: AuthService,
              private firestore: AngularFirestore,
              private toastr: ToastrService,
              private elRef: ElementRef,
              private spinner: NgxSpinnerService
    ) { }

  ngOnInit() {
    // this.spinner.show();

    this.userServ.getAllOrders().subscribe(actionArr=>{
      this.list = actionArr.map(item => {
       
        return {id:item.payload.doc.id, ...item.payload.doc.data() as Order};  
      })
    });
   
  }
  
  orderRead(user,id){
    if(confirm(" Accept this orders?")){
    this.elRef.nativeElement.querySelector('#'+id).style.backgroundColor = "yellowgreen";
    this.elRef.nativeElement.querySelector('#'+id+'o').style.display = "none";
    this.firestore.collection('acceptedOrders').add(user);
    }
  } 
  deleteOrder(user,id){
    if(confirm(" Are you sure about declining this orders?")){
      this.elRef.nativeElement.querySelector('#'+id).style.backgroundColor = "red";
      this.firestore.collection('declineOrders').add(user);
      this.elRef.nativeElement.querySelector('#'+id+'o').style.display = "none";

      // this.firestore.doc('Orders/'+id).delete();
      // this.elRef.nativeElement.querySelector('#'+id).style.display = "none";

    }
  }
 
  
  
}
