import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/content/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {
  addType = 'home';
  constructor(public userServ: UserService,
    private router: Router,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private elRef: ElementRef) { }
    

  ngOnInit(): void {
  }
  homeAdd() {
    this.addType = "";
    this.addType = "Home";
    this.elRef.nativeElement.querySelector('#home').classList.add("clicked");
    this.elRef.nativeElement.querySelector('#office').classList.remove("clicked");
    this.elRef.nativeElement.querySelector('#other').classList.remove("clicked");

  }
  officeAdd() {
    this.addType = "";
    this.addType = "Office";
    this.elRef.nativeElement.querySelector('#home').classList.remove("clicked");
    this.elRef.nativeElement.querySelector('#office').classList.add("clicked");
    this.elRef.nativeElement.querySelector('#other').classList.remove("clicked");
  }
  otherAdd() {
    this.addType = "";
    this.addType = "Other";
    this.elRef.nativeElement.querySelector('#home').classList.remove("clicked");
    this.elRef.nativeElement.querySelector('#office').classList.remove("clicked");
    this.elRef.nativeElement.querySelector('#other').classList.add("clicked");

  }
 onSubmit(form:NgForm){
   let data = Object.assign({}, form.value);
   data.addressType = this.addType;
  //  delete data.id;
   this.firestore.doc('Addresses/'+form.value.id).update(data);
   this.toastr.success("Address Updated!" );
   this.router.navigate(['/users/profile/address'])
 }

}
