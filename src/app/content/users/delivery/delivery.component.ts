import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Address } from '../../models/user.model';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent  {

  addressList: Address[];
  order: {};
  total:number=0;
  fOrder: [];
  constructor( public userServ: UserService, private firestore:AngularFirestore, private toastr: ToastrService ,private router: Router ) { }

  ngOnInit(): void {
    this.resetForm();
    this.userServ.getAddress().subscribe((arr)=>{
      this.addressList = arr.map((el)=>{
        return {id:el.payload.doc.id, ...el.payload.doc.data() as Address};  

      })
    })
  }
  
  onSelectAdd(list:Address){
    
    this.userServ.deliveryAddress = Object.assign({},list);
  }
  resetForm(form?: NgForm){
    if(form!=null){
      form.resetForm();
    }
    this.userServ.deliveryAddress = {
      id: '',
     firstName: '',
     lastName: '',
     house: '',
     street: '',
     area: '',
     pincode: null,
     mobile: null,
     addressType: ''
    }
  }
  submitOrder(form:NgForm){
    let time = new Date().getTime();
    let data = form.value;
    data.fOrder = this.userServ.billData.fOrder;
    data.id ='order-'+ time;
    this.firestore.collection('newOrders').add(data);
    this.resetForm();
    this.toastr.success('Order Placed!');
    this.router.navigate(['/users/home']);
  }

}

