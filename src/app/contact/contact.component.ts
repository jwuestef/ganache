import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  isAdmin = false;
  loginModel = { email: '', pass: '' };
  loginErrors = { email: '', pass: '' };


  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService) {
    this.isAdmin = this.as.isAuthed();
    // Wipe any pre-existing login info
    this.loginModel = { email: '', pass: '' };
    this.loginErrors = { email: '', pass: '' };
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Sets black border around selected view in navbar
    if (window.location.pathname === '/contact') {
        document.getElementById('chocoBtn').setAttribute('style', 'border: none;');
        document.getElementById('aboutBtn').setAttribute('style', 'border: none;');
        document.getElementById('homeBtn').setAttribute('style', 'border: none;');
        document.getElementById('shopBtn').setAttribute('style', 'border: none;');
        document.getElementById('contactBtn').setAttribute('style', 'outline: 4px solid black; outline-offset:-4px;');
     }
  }

  // If the login form isn't completely filled out, set error messages
  validateLogin() {
    this.loginErrors = { email: '', pass: '' };
    if (!this.loginModel.email) {
      this.loginErrors.email = 'Please provide an email';
    }
    if (!this.loginModel.pass) {
      this.loginErrors.pass = 'Please provide a password';
    }
    // Returns true if either is not filled out
    return (this.loginErrors.email || this.loginErrors.pass);
  }


  // Handles login logic
  adminLogin() {
    // If there are errors, do not submit the form
    if (this.validateLogin()) {
      return;
    }
    // Constructs user to login to firebase with, then login using the service
    const thisSaved = this;
    this.as.login(this.loginModel.email, this.loginModel.pass).then(function (err) {
      if (err !== undefined) {
        // If there is an error, then display a message to the user
        thisSaved.loginErrors.pass = err.message;
      } else {
        // Successful login!
        $('.modal-backdrop').remove();
        location.reload();
      }
    });
  }



}
