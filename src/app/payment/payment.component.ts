import { Component, AfterViewInit, Input, ViewChild } from '@angular/core';
import { PaymentService } from '../content/services/payment.service';
import { async } from 'q';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements AfterViewInit {
  @Input() amount: number;
  @Input() label: string;
  
  elements: any;
  paymentRequest: any;
  prButton: any; 
  @ViewChild('payElement') payElement;

  constructor(private pmt: PaymentService) { }

  ngAfterViewInit(){
    this.paymentRequest = this.pmt.stripe.paymentRequest({
      country: 'IN',
      currency: 'inr',
      total: {
        amount: this.amount,
        label: this.label
      }
    });
    this.elements = this.pmt.stripe.elements();
    this.paymentRequest.on('source', async (event) =>{
      console.log(event);
      setTimeout(() => {
        event.complete('success');
      }, 1000);
      
    });
    this.prButton = this.elements.create('paymentRequestButton',{
      paymentRequest: this.paymentRequest,
      style: {
        paymentRequestButton: {
          type: 'buy',
          theme:'dark'
        },
      }
    })
    this.mountButton();


  }
  async mountButton(){
    const result = await this.paymentRequest.canMakePayment();
    if(result){
      this.prButton.mount(this.payElement.nativeElement);
    }
    else{
      console.log('your browser is old school');
      
    }
  }

}
