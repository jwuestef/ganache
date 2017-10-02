import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database/database';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { Image } from '../services/image';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  isAdmin = false;
  selectedFiles: FileList;
  currentUpload: Image;
  image1Description: string;
  image1Src: string;


  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService, public cs: ContentService) {
    // Check to see if this is the logged in administrator
    this.isAdmin = this.as.isAuthed();
    // Pull updated content from Firebase
    this.getContent();
  }



  // Pulls page content from Firebase and assigns it to content based on admin status
  getContent() {
    const thisSaved = this;
    this.cs.getPageContent('aboutPage').then(function (pageContent) {
      if (thisSaved.isAdmin) {
        // If they're an admin, set the content of the editors
        tinymce.get('mainHeader').setContent(pageContent.mainHeader);
        tinymce.get('aboutParagraph').setContent(pageContent.aboutParagraph);
        $('#image1Description').val(pageContent.image1.description);
      } else {
        // Otherwise, set the content of the regularly displayed fields
        $('#mainHeader').html(pageContent.mainHeader);
        $('#aboutParagraph').html(pageContent.aboutParagraph);
      }
      // The image gets displayed regardless of admin status
      thisSaved.image1Src = pageContent.image1.url;
      thisSaved.image1Description = pageContent.image1.description;
    });
  }



  // As an admin, saves the content of the editor for the main header of the page
  saveMainHeader() {
    this.cs.savePageContent('aboutPage', 'mainHeader', tinymce.get('mainHeader').getContent());
  }



  // As an admin, saves the content of the editor for the about paragraph
  saveAboutParagraph() {
    this.cs.savePageContent('aboutPage', 'aboutParagraph', tinymce.get('aboutParagraph').getContent());
  }


  // Detects when a new image has been inserted and fills the appropriate variable
  detectImage1(event) {
    this.selectedFiles = event.target.files;
  }



  // Uploads a new image
  uploadImage1() {
    // Set file-to-be-uploaded to the file taken from the input field
    this.currentUpload = new Image(this.selectedFiles.item(0));
    // Include the image description
    this.currentUpload.description = this.image1Description;
    // Set the name
    this.currentUpload.name = 'image1';
    // Upload the file via UploadService (pageName, whichElement, newImage)
    this.cs.pushUpload('aboutPage', 'image1', this.currentUpload);
  }



}
