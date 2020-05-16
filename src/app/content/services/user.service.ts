import {  Table, Order, UnresTable, Testimonial, Address, Bill } from '../models/user.model';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AuthService } from './auth.service';

@Injectable({
     providedIn:'root'
})
export class UserService{
     formdata: Order;
     tableData: Table;
     unresTableData: UnresTable;
     testimonialData: Testimonial; 
     addressData: Address;
     deliveryAddress: Address;
     billData: Bill;

     imgDetailList: AngularFireList<any>;
   
     // adminLogin = new EventEmitter<boolean>();
     constructor(private authServ: AuthService, private firestore: AngularFirestore, private firebase: AngularFireDatabase){}
     getOrder(){

          return this.firestore.collection('newOrders',ref=>{
               return ref.where('uid','==',this.authServ.userData.uid);
          }).snapshotChanges();

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
          //   return this.firestore.collection('Addresses').snapshotChanges();
          return this.firestore.collection('Addresses',ref=>{
               return ref.where('uid','==',this.authServ.userData.uid);
          }).snapshotChanges();
     }
       getImgDetailsList(){
            this.imgDetailList = this.firebase.list('imgDetails');
       }
       insertImgDetails(imgDetails){
          this.imgDetailList.push(imgDetails);

       }

 
}