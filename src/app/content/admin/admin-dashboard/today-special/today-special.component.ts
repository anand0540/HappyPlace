import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { finalize } from "rxjs/operators";
import { AngularFireStorage } from '@angular/fire/storage';
import { UserService } from 'src/app/content/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-today-special',
  templateUrl: './today-special.component.html',
  styleUrls: ['./today-special.component.css']
})
export class TodaySpecialComponent implements OnInit {

  imgSrc : string = '../../../../../assets/imgSrc.jpeg';
  selectedImg:any = null;
  isSubmitted: boolean= false;
  dishTemplate = new FormGroup({
    caption: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    amount: new FormControl('',Validators.required),
    imageUrl: new FormControl('',Validators.required)
  }) 
  constructor( private storage: AngularFireStorage, private userServ: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    // this.userServ.getImgDetailsList();
  }

  showPreview(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any)=> this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImg = event.target.files[0];
    }
    else{
      this.imgSrc = '../../../../../assets/imgSrc.jpeg';
      this.selectedImg = null;
    }
  }
  onSubmit(formValue){
    this.isSubmitted = true;
    if(this.dishTemplate.valid){
    var imagePath = `dishes/${this.selectedImg.name.split('.').slice(0,-1).join('.')}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(imagePath);
    this.storage.upload(imagePath,this.selectedImg).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe((url)=>{
          formValue['imageUrl'] = url;
          this.userServ.insertImgDetails(formValue);
          this.resetForm();
        })
      })
    ).subscribe();
    }
    this.toastr.success("Today's Special Updated!")
  }
  get formControls(){
    return this.dishTemplate['controls'];
  }
  resetForm(){
    this.dishTemplate.reset();
    this.dishTemplate.setValue({
      caption: '',
      description: '',
      imageUrl:'',
      amount: ''
    });
    this.imgSrc = '../../../../../assets/imgSrc.jpeg';
  this.selectedImg= null;
  this.isSubmitted= false;
  }
}
