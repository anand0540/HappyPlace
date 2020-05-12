import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/content/services/user.service';
import { Address } from 'src/app/content/models/user.model';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addressList: Address[];
  constructor( public userServ: UserService, private firestore:AngularFirestore, private toastr: ToastrService ,private router: Router ) { }

  ngOnInit(): void {
    this.userServ.getAddress().subscribe((arr)=>{
      this.addressList = arr.map((el)=>{
        return {id:el.payload.doc.id, ...el.payload.doc.data() as Address};  

      })
    })
  }
  onEdit(list:Address){
    this.userServ.addressData = Object.assign({},list);
    this.router.navigate(["/users/profile/edit-address"]);
  }
  onDelete(id:string){
    if(confirm('Think again, bruh!')){
      this.firestore.doc('Addresses/'+ id).delete();
    }
  }

}