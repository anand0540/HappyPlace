import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/content/services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
	selector: 'app-add-to-cart',
	templateUrl: './add-to-cart.component.html',
	styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
	constructor(public userServ: UserService,
				private router: Router){}
	// @Output() sendOrder = new EventEmitter<Object>();
	order = {
		total: null,
		fOrder:[]
	}
	items = [];
	currItem = [];
	orderFinalised = false;
	todayList:any [];
	length:number=0;

	count: number[] = [0, 0, 0, 0, 0, 0, 0, 0,0];
	total: number = 0;

	increaseQty(item) {
		let id = "qty" + item;

		let countIndex = item - 1;
		if (this.count[countIndex] < 5) {
		this.count[countIndex] += 1;
		}
		let itemId = "00" + item + ' quantity-' + this.count[countIndex];
		let currItems = this.items;
		this.total = (this.count[0] * 300 + this.count[1] * 400 + this.count[2] * 600 + this.count[3] * 300 + this.count[4] * 200 + this.count[5] * 200 + this.count[6] * 150 + this.count[7] * 700 + this.count[8]*400);
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

	
	}	 
	
	

	ngOnInit() {
		this.userServ.imgDetailList.snapshotChanges().subscribe((list)=>{
			this.length = (list.length -1);			
			this.todayList = list.map((res)=>{
			  return res.payload.val(); 
			});
	})
}
	onSubmit(){
		this.userServ.billData = this.order;
		this.router.navigate(['/users/delivery'])
	}

}
