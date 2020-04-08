import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  // constructor(props) {
	// 	// super(props);
	// 	state = {
	// 		qty1: 0,
	// 		qty2: 0,
	// 		qty3: 0,
	// 		qty4: 0,
	// 		qty5: 0,
	// 		qty6: 0,
	// 		qty7: 0,
	// 		qty8: 0,
	// 		total: 0,
	// 		items: []
	// 	};
	// 	this.increaseQty = this.increaseQty.bind(this);
	// 	this.decreaseQty = this.decreaseQty.bind(this);
	// 	this.orderMenuCompleted = this.orderMenuCompleted.bind(this);
	// }
	// increaseQty(item) {
	// 	let currItem = "qty" + item;
	// 	let currItems = this.state.items;
	// 	let currQty = this.state[currItem];
	// 	let itemId = "00" + item;
	// 	if (currQty < 5) {
	// 		currItems.push(itemId);
	// 		let newTotal = currItems.length * 10000;
	// 		this.setState({
	// 			[currItem]: currQty + 1,
	// 			total: newTotal,
	// 			items: currItems
	// 		});
	// 	}
	// }
	// decreaseQty(item) {
	// 	let currItem = "qty" + item;
	// 	let itemId = "00" + item;
	// 	let currQty = this.state[currItem];

	// 	if (currQty > 0) {
	// 		let currItems = this.state.items;
	// 		var index = currItems.indexOf(itemId);
	// 		if (index !== -1) currItems.splice(index, 1);
	// 		let newTotal = currItems.length * 10000;
	// 		let currQty = this.state[currItem];
	// 		this.setState({
	// 			[currItem]: currQty - 1,
	// 			total: newTotal,
	// 			items: currItems
	// 		});
	// 	}
	// }
	// orderMenuCompleted() {
	// 	this.props.orderMenuConfix(this.state.total, this.state.items);
	// }

  ngOnInit(): void {
  }

}
