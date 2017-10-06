import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isAdmin = false;
  loginModel = { email: '', pass: '' };
  loginErrors = { email: '', pass: '' };

  constructor(public as:AuthService) {
    this.loginModel = { email: '', pass: '' };
    this.loginErrors = { email: '', pass: '' };
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

  ngOnInit() {
  }

}
