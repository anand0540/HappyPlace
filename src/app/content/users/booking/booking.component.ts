import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { format } from 'util';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UnresTable } from '../../models/user.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  
    twoSeat:'';
    fourSeat:'';
    eightSeat:'';

  constructor(public userServ: UserService, 
              private service: UserService,
              private firestore: AngularFirestore, 
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.firestore.collection('UnreservedTables').doc('RMMYsT84fXvKZZIoCUN2').ref.get().then((doc)=>{     
       console.log(doc.data());
       this.twoSeat = doc.data().twoSeat;
       this.fourSeat = doc.data().fourSeat;
       this.eightSeat = doc.data().eightSeat;
       console.log(this.twoSeat);
       
      //this.UnResvTable = doc.data()
      
      
    })
  }
  resetForm(form?:NgForm){
    if(form!=null){
      form.resetForm();
    }

    this.userServ.tableData = {
      id: null,
      name: '',
      email: '',
      phone: '',
      date: new Date().toDateString(),
      time: '',
      twoSeater: ''  ,
      fourSeater: ''  ,
      eightSeater: ''  
    
    }
  }
  onSubmit(form:NgForm){
    let data = form.value;
    this.firestore.collection('Tables').add(data);
    this.resetForm();
    this.toastr.success('Table has been booked!');
    this.router.navigate(['/user']);
 
 }

}
