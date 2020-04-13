export interface User{
     uid: string;
     email: string;
     displayName: string;
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