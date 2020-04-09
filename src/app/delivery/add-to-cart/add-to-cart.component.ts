import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
    order={
     
      total: 0,
      fOrder:[]
    }
		state = {
			qty1: 0,
			qty2: 0,
			qty3: 0,
			qty4: 0,
			qty5: 0,
			qty6: 0,
			qty7: 0,
			qty8: 0,
			total: 0,
			items: []
	 	};
	// 	this.increaseQty = this.increaseQty.bind(this);
	// 	this.decreaseQty = this.decreaseQty.bind(this);
	// 	this.orderMenuCompleted = this.orderMenuCompleted.bind(this);
  // }
   count:number[]=[0,0,0,0,0,0,0,0];
   total:number=0;
	increaseQty(item) {
    let id = "qty" + item;
   
    let countIndex = item-1;
    if(this.count[countIndex]<5){    this.count[countIndex]+=1;
    }
    let itemId = "00" + item+' quantity-'+ this.count[countIndex];
    let currItems = this.state.items;

    this.total = (this.count[0]*300+this.count[1]*400+this.count[2]*600+this.count[3]*300+this.count[4]*200+this.count[5]*200+this.count[6]*150+this.count[7]*700);
    if(this.count[countIndex]>0){
      currItems.push(itemId);
      
    }
    this.order = {
      total: this.total,
      fOrder:currItems,
    }
		// let currItems = this.state.items;
		// let currQty = this.state[currItem];
		// if (currQty < 5) {
		// 	currItems.push(itemId);
		// 	let newTotal = currItems.length * 10000;
			// this.setState({
			// 	[currItem]: currQty + 1,
			// 	total: newTotal,
			// 	items: currItems
			// });
    // }
   console.log(this.order);
   
    
	 }
	decreaseQty(item) {
    let currItem = "qty" + item;
    let countIndex = item-1;

    if(this.count[countIndex]>0){this.count[countIndex]-=1;}
    this.total = (this.count[0]*300+this.count[1]*400+this.count[2]*600+this.count[3]*300+this.count[4]*200+this.count[5]*200+this.count[6]*150+this.count[7]*700);
  
    let itemId = "00" + item+' quantity-'+ this.count[countIndex];
    let currItems = this.state.items;
    if(this.count[countIndex]>0){
      var index = currItems.indexOf(itemId);
      currItems.splice(index,1);
    }
    this.order = {
      total: this.total,
      fOrder:currItems,
    }
    console.log(this.order);

    		// let currQty = this.state[currItem];

		// if (currQty > 0) {
		// 	let currItems = this.state.items;
		// 	var index = currItems.indexOf(itemId);
		// 	if (index !== -1) currItems.splice(index, 1);
		// 	let newTotal = currItems.length * 10000;
		// 	let currQty = this.state[currItem];
			// this.setState({
			// 	[currItem]: currQty - 1,
			// 	total: newTotal,
			// 	items: currItems
			// });
		//}
	}
	// orderMenuCompleted() {
	// 	this.props.orderMenuConfix(this.state.total, this.state.items);
	// }

  ngOnInit() {
  }

}
