import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isAdmin = false;
  loginModel = { email: '', pass: '' };
  loginErrors = { email: '', pass: '' };
  footerParagraph;
  footerSocialMedia = { instagram: '', facebook: '' };
  footerParagraphUpdated = false;
  footerSocialMediaUpdated = false;


  constructor(public as: AuthService, public cs: ContentService) {
    this.loginModel = { email: '', pass: '' };
    this.loginErrors = { email: '', pass: '' };
    this.footerSocialMedia = { instagram: '', facebook: '' };
    // Check to see if this is the logged in administrator
    this.isAdmin = this.as.isAuthed();
    // Pull updated content from Firebase
    this.getContent();
  }



  ngOnInit() {
  }


  // Pulls page content from Firebase and assigns it to content based on admin status
  getContent() {
    const thisSaved = this;
    this.cs.getPageContent('footerPage').then(function (pageContent) {
      thisSaved.footerParagraph = pageContent.footerParagraph;
      thisSaved.footerSocialMedia = pageContent.footerSocialMedia;
    });
  }



  // As an admin, saves the content of the input field for the source of the Map (iframe), and then shows a success message
  saveFooterParagraph() {
    this.footerParagraphUpdated = false;
    const thisSaved = this;
    this.cs.savePageContent('footerPage', 'footerParagraph', thisSaved.footerParagraph).then(function () {
      thisSaved.footerParagraphUpdated = true;
    });
  }



  saveFooterSocialMedia() {
    this.footerSocialMediaUpdated = false;
    const thisSaved = this;
    this.cs.savePageContent('footerPage', 'footerSocialMedia', thisSaved.footerSocialMedia).then(function () {
      thisSaved.footerSocialMediaUpdated = true;
    });
  }



  logout() {
    this.as.logout();
    location.reload();
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
