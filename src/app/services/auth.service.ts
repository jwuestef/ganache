import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class AuthService {
  authState;



  // The contructor function runs automatically on service load, each and every time it's called
  constructor(public afa: AngularFireAuth, public router: Router, public afd: AngularFireDatabase) {
    this.afa.authState.subscribe((authState) => {
      this.authState = authState;
    });
  }



  // Logs the user in through Firebase authentication
  login(email, pass) {
    return this.afa.auth.signInWithEmailAndPassword(email, pass).then(() => {
      // If we succeed in logging in, direct them to the homepage and return null
      localStorage.setItem('currentUser', 'ganacheChocolatier');
      this.router.navigateByUrl('/');
      return;
    }).catch((err) => {
      // If there is an error logging in, return that error to the calling function
      // console.log('Error in login function inside auth.service.ts: ');
      // console.log(err);
      return err;
    });
  }



  // Signs user out with given Firebase method, and clear the local storage
  logout() {
    this.afa.auth.signOut().then(() => {
      localStorage.removeItem('currentUser');
    }).catch((err) => {
      console.log('Error in signout function inside auth.service.ts: ');
      console.log(err);
    });
  }



  // Check whether the current user is admin, !! forces result to be true/false (as opposed to null or undefined)
  isAuthed() {
    if (localStorage.getItem('currentUser') === 'ganacheChocolatier') {
      return true;
    } else {
      return false;
    }
  }



}  // End of component
