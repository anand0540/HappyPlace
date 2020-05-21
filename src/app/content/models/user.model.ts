export interface User{
     uid: string;
     email: string;
     displayName: string;
     photoURL: string;
     emailVerified: boolean;

}
export interface Admin{
     uid: string;
     email: string;
     displayName: string;
     photoURL: string;
     emailVerified: boolean;
}




export class Order {
     id: string;
     oid:string;
     uid:string;
     time:string;
     firstName: string;
     lastName: string;
     house: string;
     street: string;
     area: string;
     pincode: number;
     mobile: number;
     addressType: string;
     order:string[];
     total:number;
     email: string;
    
    }
    export class declinedOrder {
     oid:string;
     id: string;
     uid:string;
     time:string;
     firstName: string;
     lastName: string;
     house: string;
     street: string;
     area: string;
     pincode: number;
     mobile: number;
     addressType: string;
     order:string[];
     total:number;
     email: string;
    }
    export class acceptedOrder {
     oid:string;
     id: string;
     uid:string;
     time:string;
     firstName: string;
     lastName: string;
     house: string;
     street: string;
     area: string;
     pincode: number;
     mobile: number;
     addressType: string;
     order:string[];
     total:number;
     email: string;
    
    }
export class Table {
     id: string;
     name : string;
     phone: string;
     email: string;
     date: string;
     time: string;
     twoSeater: string;
     fourSeater: string;
     eightSeater: string;

}
export class acceptTable {
     id: string;
     name : string;
     phone: string;
     email: string;
     date: string;
     time: string;
     twoSeater: string;
     fourSeater: string;
     eightSeater: string;

}
export class declineTable {
     id: string;
     name : string;
     phone: string;
     email: string;
     date: string;
     time: string;
     twoSeater: string;
     fourSeater: string;
     eightSeater: string;

}

export class UnresTable{
     id:'RMMYsT84fXvKZZIoCUN2';
     twoSeat: string;
     fourSeat: string;
     eightSeat: string;
}
export class Testimonial{
     id:string;
     name: string;
     testimonial : string;
}
export class Address{
     id: string;
     uid: string;
     firstName: string;
     lastName: string;
     house: string;
     street: string;
     area: string;
     pincode: number;
     mobile: number;
     addressType: string;
}
export class Bill {
		total: number;
		fOrder: string[];
	
}
export var Stripe: any;