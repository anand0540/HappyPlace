import { Component, OnInit, ElementRef } from '@angular/core';
import { Table } from 'src/app/content/models/user.model';
import { UserService } from 'src/app/content/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookingList: Table[];
  bookingMsgRead = false;
  constructor(private service: UserService,
              private elRef: ElementRef,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getBooking().subscribe(actionArr=>{
      this.bookingList = actionArr.map(item=>{
        return {id:item.payload.doc.id, ...item.payload.doc.data() as Table};
      })
    })
  }
  bookingRead(id){
    this.elRef.nativeElement.querySelector('#'+id).style.backgroundColor = "yellowgreen";

  }
  deleteBooking(id: string){
    if(confirm("Are you sure about declining this booking? ")){
      this.elRef.nativeElement.querySelector('#'+id).style.backgroundColor = "red";
      // this.firestore.doc('Tables/'+id).delete();
      this.toastr.success("Booking declined");
    }
  }
 

}
