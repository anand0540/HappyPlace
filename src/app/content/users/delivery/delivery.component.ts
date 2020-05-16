import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Address } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
  constructor(public authServ:AuthService, 
    public userServ: UserService, 
    private firestore:AngularFirestore, 
    private toastr: ToastrService ,
    private router: Router, 
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
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
      uid:'',
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
    let currTime = new Date().toString();
    let timeArr = currTime.split('G');
    let timeData = timeArr[0];

    let data = form.value;
    data.time = timeData;
    data.fOrder = this.userServ.billData.fOrder;
    data.id ='order-'+ time;
    this.firestore.collection('newOrders').add(data);
    this.resetForm();
    this.toastr.success('Order Placed!');
    this.router.navigate(['/users/home']);
  }

}

