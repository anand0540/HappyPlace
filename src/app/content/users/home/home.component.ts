import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Testimonial } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  testimonialList : Testimonial[];
  count:number;
  todayList : any[];
  length:number = 0;
  constructor(public userServ: UserService,
              public authServ: AuthService,
              private firestore: AngularFirestore,
              private elRef: ElementRef,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.userServ.imgDetailList.snapshotChanges().subscribe((list)=>{
      this.length = (list.length -1);
      console.log(this.length);
      
      this.todayList = list.map((res)=>{
        return res.payload.val(); 
      })
      // this.element1 = this.todayList[0];
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
