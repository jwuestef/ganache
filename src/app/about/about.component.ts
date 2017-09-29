import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';


import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { AngularFireDatabase } from 'angularfire2/database/';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  isAdmin = false;
  mainHeader;



  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService, public cs: ContentService, public afd: AngularFireDatabase) {
    // Check to see if this is the logged in administrator
    this.isAdmin = this.as.isAuthed();
    // Pull updated content from Firebase
    this.getContent();
  }



  // Pulls page content from Firebase and assigns it to variables
  getContent() {
    const thisSaved = this;
    this.cs.getPageContent('aboutPage').then(function(pageContent) {
      console.log(pageContent);
      thisSaved.mainHeader = pageContent.mainHeader;
    });
  }


  updateMainHeader() {
    const thisSaved = this;
    this.afd.app.database().ref('/aboutPage').update({
      mainHeader: thisSaved.mainHeader
    });
  }




}
