import { Component, OnInit, ElementRef } from '@angular/core';
import { Table } from 'src/app/content/models/user.model';
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
  bookingMsgRead = false;
  constructor(private service: UserService,
              private firestore: AngularFirestore,
              private elRef: ElementRef,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private fun : AngularFireFunctions,
              ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.service.getBooking().subscribe(actionArr=>{
      this.bookingList = actionArr.map(item=>{
        return {id:item.payload.doc.id, ...item.payload.doc.data() as Table};
      })
    })
  }
  bookingRead(user,id){
    if(confirm("Are you sure about accepting this booking? ")){
    this.elRef.nativeElement.querySelector('#'+id).style.backgroundColor = "yellowgreen";
    this.elRef.nativeElement.querySelector('#'+id+'o').style.display = "none";
    
    this.firestore.collection('acceptedBooking').add(user);
    //  const callable = this.fun.httpsCallable('genericEmail');
    // callable({ text:"Booking Accepted", subject:"Table booked" }).subscribe(); 
    }
   

  }
  deleteBooking(user,id: string){
    if(confirm("Are you sure about declining this booking? ")){
      this.elRef.nativeElement.querySelector('#'+id).style.backgroundColor = "red";
      this.elRef.nativeElement.querySelector('#'+id+'o').style.display = "none";
      this.firestore.collection('declineBooking').add(user);

      // this.firestore.doc('Tables/'+id).delete();
    }
  }
 

}
