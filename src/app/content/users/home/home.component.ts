import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Testimonial } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  testimonialList : Testimonial[];
  count:number;
  todayList : any[];
  element1: {}

  constructor(public userServ: UserService,
              private firestore: AngularFirestore,
              private elRef: ElementRef,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.userServ.imgDetailList.snapshotChanges().subscribe((list)=>{
      this.todayList = list.map((res)=>{
        return res.payload.val(); 
      })
      this.element1 = this.todayList[0];
      // console.log(this.todayList);
      // console.log(typeof(this.element1));
      
      
    })
    this.resetForm();
    this.userServ.getTestimonial().subscribe((arr)=>{
        this.testimonialList = arr.map((el)=>{
          return {id:el.payload.doc.id, ...el.payload.doc.data() as Testimonial};  
        }) 
    });
  }
  
  resetForm(form?:NgForm){
    if(form!=null){
		  form.resetForm();
		}
		  this.userServ.testimonialData={
			id : null,
			name : '',
			testimonial: ''
	
		  } 
  }
  onSubmit(form:NgForm){
    this.firestore.collection('Testimonials').add(form.value);
    this.resetForm();
    this.toastr.success("Experience Shared")

    // this.elRef.nativeElement.querySelector('#name').class.remove = "ng-touched";

  }


}
