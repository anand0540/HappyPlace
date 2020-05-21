import { Component, OnInit, ElementRef } from '@angular/core';
import { Table, acceptTable, declineTable } from 'src/app/content/models/user.model';
import { UserService } from 'src/app/content/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookingList: Table[];
  acceptList: acceptTable[];
  declineList: declineTable[];
  bookingMsgRead = false;
  constructor(private service: UserService,
              private firestore: AngularFirestore,
              private elRef: ElementRef,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private fun : AngularFireFunctions,
              ) { }

  ngOnInit(): void {
    // this.spinner.show();
    this.service.getBooking().subscribe(actionArr=>{
      this.bookingList = actionArr.map(item=>{
        return {id:item.payload.doc.id, ...item.payload.doc.data() as Table};
      })
    })
    this.service.getAcceptedBookings().subscribe(actionArr=>{
      this.acceptList = actionArr.map(item=>{
        return {id:item.payload.doc.id, ...item.payload.doc.data() as acceptTable};
      })
    })
    this.service.getDeclinedBookings().subscribe(actionArr=>{
      this.declineList = actionArr.map(item=>{
        return {id:item.payload.doc.id, ...item.payload.doc.data() as declineTable};
      })
    })
  }
  bookingRead(user,id){    
    if(confirm("Are you sure about accepting this booking? ")){    
    this.firestore.collection('acceptedBooking').add(user);
    this.firestore.doc('Tables/'+id).delete();

    }
   

  }
  deleteBooking(user,id: string){
    console.log(id);
    
    if(confirm("Are you sure about declining this booking? ")){
      this.firestore.collection('declineBooking').add(user);
      this.firestore.doc('Tables/'+id).delete();
    }
  }
 

}
