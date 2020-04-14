import {  Table, Order, UnresTable } from '../models/user.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
     providedIn:'root'
})
export class UserService{
     formdata: Order;
     tableData: Table;
     unresTableData: UnresTable;
     // @Output() sendOrder = new EventEmitter<Object>();
   
     // adminLogin = new EventEmitter<boolean>();
     constructor(private firestore: AngularFirestore){}
     getOrder(){

          return this.firestore.collection('Orders').snapshotChanges();

     }
     getBooking(){
          return this.firestore.collection('Tables').snapshotChanges();
     }
     getTables(){
          return this.firestore.doc("RMMYsT84fXvKZZIoCUN2").valueChanges();
       }
 
}