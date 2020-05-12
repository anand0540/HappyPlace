import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from 'src/app/content/services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  addType = 'Home'

  constructor(public userServ: UserService,
    private router: Router,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private elRef: ElementRef) { }

  ngOnInit(): void {
    this.resetForm();
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
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.userServ.addressData = {
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
  onSubmit(form: NgForm) {
   const data = form.value;
   data.addressType = this.addType;
   this.firestore.collection('Addresses').add(data);
   this.resetForm(form);
		this.toastr.success("Address Added " )
		this.router.navigate(['/users/address']);
  }

}
