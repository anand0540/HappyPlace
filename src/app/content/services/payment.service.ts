import {Injectable } from '@angular/core';
import { Stripe } from '../models/user.model';
@Injectable()
 
export class PaymentService{
    stripe = Stripe( 'pk_test_KTduziTRF9YDLjOYr92QIiQl00emWvxWFo');
    
    constructor(){}
}