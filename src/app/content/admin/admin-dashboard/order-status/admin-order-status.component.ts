import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from 'src/app/content/services/user.service';
import { Table, Order, UnresTable } from 'src/app/content/models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-order-status',
  templateUrl: './admin-order-status.component.html',
  styleUrls: ['./admin-order-status.component.css']
})
export class AdminOrderStatusComponent implements OnInit {
  list: Order[];
  bookingList: Table[];
  orderMsgRead = false;
  bookingMsgRead = false;

  constructor(private service: UserService, 
              public userServ: UserService,
              private firestore: AngularFirestore, 
              private toastr: ToastrService,
              private elRef: ElementRef,
              private router: Router
    ) { }

  ngOnInit() {
  
    this.resetForm();
    this.service.getOrder().subscribe(actionArr=>{
      this.list = actionArr.map(item => {
       
        return {id:item.payload.doc.id, ...item.payload.doc.data() as Order};  
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
  
  resetForm(form?:NgForm){
    if(form!=null){
      form.resetForm();
    }
    this.userServ.unresTableData = {
      id: 'RMMYsT84fXvKZZIoCUN2',
      twoSeat: ''  ,
      fourSeat: ''  ,
      eightSeat: ''  
    }
  }
  onSubmit(form:NgForm){
    let data = Object.assign({},form.value);
    delete data.id;
  //   if(form.value.id==null){
  //   this.firestore.collection('UnreservedTables').add(data);
  // }
    
      this.firestore.doc("UnreservedTables/"+form.value.id).update(data);
    
      this.resetForm();
      this.toastr.success('Table Count Updated !');
      this.router.navigate(['/admin/order']);
    
    
 
 }
 
}
