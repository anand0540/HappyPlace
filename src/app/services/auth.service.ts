// @Injectable({
//   providedIn: 'root'
// })


import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {
  @Output() logInClicked = new EventEmitter<void>();
  @Output() signUpClicked = new EventEmitter<void>();
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }
  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
 return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
 }
 signUpRegular(email, password){
    this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(res => {
    console.log('You are Successfully signed up!', res);
    })
    .catch(error => {
    console.log('Something is wrong:', error.message);
    });
  } 
  signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }
  // signInWithFacebook() {
  //   return this._firebaseAuth.auth.signInWithPopup(
  //     new firebase.auth.FacebookAuthProvider()
  //   )
  // }
  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }
  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}

