import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/content/services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-table',
  templateUrl: './set-table.component.html',
  styleUrls: ['./set-table.component.css']
})
export class SetTableComponent implements OnInit {

  constructor( public userServ: UserService,
              private firestore: AngularFirestore,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null){
      form.resetForm();
    }
    this.userServ.unresTableData = {
      id: 'RMMYsT84fXvKZZIoCUN2',
      twoSeat: ''  ,
      fourSeat: ''  ,
      eightSeat: ''  
    }
  }
  onSubmit(form:NgForm){
    let data = Object.assign({},form.value);
    delete data.id;
  //   if(form.value.id==null){
  //   this.firestore.collection('UnreservedTables').add(data);
  // }
    
      this.firestore.doc("UnreservedTables/"+form.value.id).update(data);
    
      this.resetForm();
      this.toastr.success('Table Count Updated !');
      this.router.navigate(['/admin/order']);
    
    
 
 }
 
}
