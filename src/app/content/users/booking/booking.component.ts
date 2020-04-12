import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { format } from 'util';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(public userServ: UserService, 
              private firestore: AngularFirestore, 
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this.resetForm();
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
      date: new Date(),
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
