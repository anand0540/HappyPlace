import {  Table, Order, UnresTable, Testimonial, Address } from '../models/user.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
     providedIn:'root'
})
export class UserService{
     formdata: Order;
     tableData: Table;
     unresTableData: UnresTable;
     testimonialData: Testimonial; 
     addressData: Address;
     imgDetailList: AngularFireList<any>;
     // @Output() sendOrder = new EventEmitter<Object>();
   
     // adminLogin = new EventEmitter<boolean>();
     constructor(private firestore: AngularFirestore, private firebase: AngularFireDatabase){}
     getOrder(){

          return this.firestore.collection('Orders').snapshotChanges();

     }
     getBooking(){
          return this.firestore.collection('Tables').snapshotChanges();
     }
     getTables(){
          return this.firestore.doc("RMMYsT84fXvKZZIoCUN2").valueChanges();
       }
       getTestimonial(){
            return this.firestore.collection('Testimonials', (r)=>r.limit(6)).snapshotChanges(); 
       }
       getAddress(){
            return this.firestore.collection('Addresses').snapshotChanges();
       }
       getImgDetailsList(){
            this.imgDetailList = this.firebase.list('imgDetails');
       }
       insertImgDetails(imgDetails){
          this.imgDetailList.push(imgDetails);

       }

 
}