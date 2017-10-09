import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { Image } from '../services/image';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isAdmin = false;
  aboutParagraphUpdated = false;
  aboutCurrentUpload: Image;
  aboutImage1Src: string;
  aboutImage1Description: string;
  aboutImage1Link: string;
  aboutSelectedFile1: FileList;
  aboutUploadingImage1 = false;



  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService, public cs: ContentService) {
    // Check to see if this is the logged in administrator
    this.isAdmin = this.as.isAuthed();
    // Pull updated content from Firebase
    this.getContent();
  }



  // Sets black border around selected view in navbar
  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    if (window.location.pathname === '/about') {
      if (this.isAdmin) {
        // Set black border around selected view for admins
        document.getElementById('chocoBtnAdmin').setAttribute('style', 'border: none;');
        document.getElementById('contactBtnAdmin').setAttribute('style', 'border: none;');
        document.getElementById('homeBtnAdmin').setAttribute('style', 'border: none;');
        document.getElementById('shopBtnAdmin').setAttribute('style', 'border: none;');
        document.getElementById('aboutBtnAdmin').setAttribute('style', 'border: 5px solid black;');
      } else {
        // Set black border around selected view for non-admins
        document.getElementById('chocoBtn').setAttribute('style', 'border: none;');
        document.getElementById('contactBtn').setAttribute('style', 'border: none;');
        document.getElementById('homeBtn').setAttribute('style', 'border: none;');
        document.getElementById('shopBtn').setAttribute('style', 'border: none;');
        document.getElementById('aboutBtn').setAttribute('style', 'border: 5px solid black;');
      }
    }
  }



  // Pulls page content from Firebase and assigns it to content based on admin status
  getContent() {
    const thisSaved = this;
    this.cs.getPageContent('aboutPage').then(function (pageContent) {
      if (thisSaved.isAdmin) {
        // If they're an admin, set the content of paragraph editors
        tinymce.get('aboutParagraph').setContent(pageContent.aboutParagraph);
      } else {
        // Otherwise, set the content of the regularly displayed fields
        $('#aboutParagraph').html(pageContent.aboutParagraph);
      }
      // The image gets displayed regardless of admin status
      thisSaved.aboutImage1Src = pageContent.image1.url;
      thisSaved.aboutImage1Description = pageContent.image1.description;
      thisSaved.aboutImage1Link = pageContent.image1.link;
    });
  }



  // As an admin, saves the content of the editor for the about paragraph, and then shows a success message
  saveAboutParagraph() {
    this.aboutParagraphUpdated = false;
    const thisSaved = this;
    this.cs.savePageContent('aboutPage', 'aboutParagraph', tinymce.get('aboutParagraph').getContent()).then(function () {
      thisSaved.aboutParagraphUpdated = true;
    });
  }



  // Detects when a new image has been inserted and fills the appropriate variable
  aboutDetectImage1(event) {
    this.aboutSelectedFile1 = event.target.files;
  }



  // Uploads a new image
  aboutUploadImage1() {
    if (!this.aboutImage1Description || !this.aboutImage1Link || !this.aboutSelectedFile1) {
      return;
    }
    // Display the upload progress bar for image 1 and no others
    this.aboutUploadingImage1 = true;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.aboutCurrentUpload = new Image(this.aboutSelectedFile1.item(0));
    this.aboutCurrentUpload.description = this.aboutImage1Description;
    this.aboutCurrentUpload.link = this.aboutImage1Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('aboutPage', 'image1', this.aboutCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.aboutImage1Src = newURL.toString();
    });
  }



}
