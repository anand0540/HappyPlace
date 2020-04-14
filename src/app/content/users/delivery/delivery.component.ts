import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../services/user.service';
// import { NgForm } from '@angular/forms';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { ToastrService } from 'ngx-toastr';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent  {

//   constructor(public userServ: UserService, private firestore: AngularFirestore, private toastr: ToastrService, private route: Router) { }
//   orderData: {};
//   orderTotal: number;
//   orderMenu:string[];
//   funcReturn =false;
//   // order: string;




//   ngOnInit() {
//     this.resetForm();
//     this.userServ.sendOrder.subscribe((res)=>{
//       this.funcReturn = true;
//       this.orderData = res;
//       this.orderMenu = res.fOrder;
//       this.orderTotal = res.total;

//       console.log(this.orderMenu);
//       console.log(this.orderTotal);
//       // this.order = this.orderMenu + this.orderTotal;
//       // console.log( this.newPlaceHolder);
//       console.log(this.orderData);
      
//     });
    
//   }
  
//   resetForm(form?:NgForm ){
//     if(form!=null){
//       form.resetForm();
//     }
//       this.userServ.formdata={
//         id : null,
//         name : '',
//         phone: '',
//         email : '',
//         address: '',
//         paymentType: '',
//         order: [],
//         total: 0

//       } 
//    }

 
//    onSubmit(form:NgForm ){
//          console.log(form.value);

//      console.log(this.orderData);
//      console.log(this.orderMenu);
//      console.log(this.orderTotal);
//     let data1 = form.value;
//      data1.order = this.orderMenu;
//      data1.total = this.orderTotal;
//      let data = data1;
//      console.log(data);
     
    
//     this.firestore.collection('Orders').add(data);
//     this.resetForm(form);
//     this.toastr.success("Order Placed Successfully" )
//     this.route.navigate(['/user']);
// }

}
