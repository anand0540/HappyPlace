import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  constructor(public userServ: UserService, private firestore: AngularFirestore, private toastr: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm ){
    if(form!=null){
      form.resetForm();}
      this.userServ.formdata={
        name : '',
        phone: '',
        email : '',
        address: '',
        paymentType: ''
      } 
   }
   onSubmit(form:NgForm ){
    let data = form.value;
    this.firestore.collection('Users').add(data);
    this.resetForm(form);
    this.toastr.success("Order Placed Successfully" )
    this.route.navigate(['/']);
}
}
