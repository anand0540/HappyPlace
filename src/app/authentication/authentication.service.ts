import { Output, EventEmitter } from '@angular/core';

export class AuthService{
   @Output() logInClicked = new EventEmitter<void>();
   @Output() signUpClicked = new EventEmitter<void>();
}