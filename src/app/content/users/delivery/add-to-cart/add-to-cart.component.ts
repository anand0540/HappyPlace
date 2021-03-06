import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/content/services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-add-to-cart',
	templateUrl: './add-to-cart.component.html',
	styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
	constructor(public userServ: UserService, 
				private router: Router,
				private firestore: AngularFirestore,
				private toastr: ToastrService){}
	// @Output() sendOrder = new EventEmitter<Object>();
	order = {
		total: 0,
		fOrder: []
	}
	items = [];
	currItem = [];
	orderFinalised = false;

	count: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
	total: number = 0;
	increaseQty(item) {
		let id = "qty" + item;

		let countIndex = item - 1;
		if (this.count[countIndex] < 5) {
		this.count[countIndex] += 1;
		}
		let itemId = "00" + item + ' quantity-' + this.count[countIndex];
		let currItems = this.items;
		this.total = (this.count[0] * 300 + this.count[1] * 400 + this.count[2] * 600 + this.count[3] * 300 + this.count[4] * 200 + this.count[5] * 200 + this.count[6] * 150 + this.count[7] * 700);
		if (this.count[countIndex] > 0) {
			let countMinusOne = this.count[countIndex] - 1;
			let dupItemId = "00" + item + ' quantity-' + countMinusOne;
			currItems.forEach((el, i) => {
				if (el === dupItemId) {
					currItems.splice(i, 1);
					return currItems;
				}
			})
			currItems.push(itemId);

		}
		this.order = {
			total: this.total,
			fOrder: currItems,
		}
		console.log(this.order);
	}
	decreaseQty(item) {
		let id = "qty" + item;
		let countIndex = item - 1;

		if (this.count[countIndex] > 0) { this.count[countIndex] -= 1; }
		this.total = (this.count[0] * 300 + this.count[1] * 400 + this.count[2] * 600 + this.count[3] * 300 + this.count[4] * 200 + this.count[5] * 200 + this.count[6] * 150 + this.count[7] * 700);

		let itemId = "00" + item + ' quantity-' + this.count[countIndex];
		let currItems = this.items;
		if (this.count[countIndex] >= 0) {
			let countPlusOne = this.count[countIndex] + 1;
			let dupItemId = "00" + item + ' quantity-' + countPlusOne;
			currItems.forEach((el, i) => {
				if (el === dupItemId) {
					currItems.splice(i, 1);
					return currItems;
				}
			})
			if (this.count[countIndex] >0) {
			currItems.push(itemId);
			}
		}
		this.order = {
			total: this.total,
			fOrder: currItems,
		}
		console.log(this.order);

	
	}

	// Form//
	resetForm(form?:NgForm ){
		if(form!=null){
		  form.resetForm();
		}
		  this.userServ.formdata={
			id : null,
			name : '',
			phone: '',
			email : '',
			address: '',
			paymentType: '',
			order: [],
			total: 0
	
		  } 
	   }
	
	 
	   onSubmit(form:NgForm ){
			 console.log(form.value);
	
		 
		let data1 = form.value;
		 data1.order = this.order.fOrder;
		 data1.total = this.order.total;
		 let data = data1;
		 console.log(data);
		 
		
		this.firestore.collection('Orders').add(data);
		this.resetForm(form);
		this.toastr.success("Order Placed Successfully" )
		this.router.navigate(['/user']);
	}
	scroll(el: HTMLElement) {
		el.scrollIntoView();
		this.orderFinalised = true;

	}

	ngOnInit() {
		this.resetForm();
	}
	// onSubmit(){
	// 	this.userServ.sendOrder.emit(this.order);
	// 	this.router.navigate(['/user/order'])
	// }
	

}
