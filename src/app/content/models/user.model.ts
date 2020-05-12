export interface User{
     uid: string;
     email: string;
     displayName: string;
     photoURL: string;
     emailVerified: boolean;
     phone: string;

}
export interface Admin{
     uid: string;
     email: string;
     name: string;
     photoURL: string;
     emailVerified: boolean;
}




export class Order {
     id: string;
     name : string;
     phone: string;
     email: string;
     address : string; 
     paymentType: string;
     order:string[];
     total:number;
    
    }
export class Table {
     id: string;
     name : string;
     phone: string;
     email: string;
     date: Date;
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
     firstName: string;
     lastName: string;
     house: string;
     street: string;
     area: string;
     pincode: number;
     mobile: number;
     addressType: string;
}
export var Stripe: any;