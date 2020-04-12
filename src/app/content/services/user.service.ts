import { User, Table } from '../models/user.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
     providedIn:'root'
})
export class UserService{
     formdata: User;
     tableData: Table;
   
     // adminLogin = new EventEmitter<boolean>();
     constructor(private firestore: AngularFirestore){}
     getOrder(){

          return this.firestore.collection('Orders').snapshotChanges();

     }
     getBooking(){
          return this.firestore.collection('Tables').snapshotChanges();
     }
}