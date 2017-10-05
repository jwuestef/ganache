import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

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
  aboutParagraphUpdated = false;
  image1Description: string;
  image1Src: string;
  uploadingImage1 = false;



  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService, public cs: ContentService, public fms: FlashMessagesService) {
    // Check to see if this is the logged in administrator
    this.isAdmin = this.as.isAuthed();
    // Pull updated content from Firebase
    this.getContent();
  }



  // Pulls page content from Firebase and assigns it to content based on admin status
  public getContent() {
    const thisSaved = this;
    this.cs.getPageContent('aboutPage').then(function (pageContent) {
      if (thisSaved.isAdmin) {
        // If they're an admin, set the content of the editors
        tinymce.get('aboutParagraph').setContent(pageContent.aboutParagraph);
        $('#image1Description').val(pageContent.image1.description);
      } else {
        // Otherwise, set the content of the regularly displayed fields
        $('#aboutParagraph').html(pageContent.aboutParagraph);
      }
      // The image gets displayed regardless of admin status
      thisSaved.image1Src = pageContent.image1.url;
      thisSaved.image1Description = pageContent.image1.description;
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
  detectImage1(event) {
    this.selectedFiles = event.target.files;
  }



  // Uploads a new image
  uploadImage1() {
    if (!this.image1Description) {
      return;
    }
    // Display the upload progress bar for image 1 and no others
    this.uploadingImage1 = true;
    // Set file-to-be-uploaded to the file taken from the input field
    this.currentUpload = new Image(this.selectedFiles.item(0));
    // Include the image description
    this.currentUpload.description = this.image1Description;
    // Set the name
    this.currentUpload.name = 'image1';
    const thisSaved = this;
    // Upload the file via UploadService (pageName, whichElement, newImage)
    this.cs.pushUpload('aboutPage', 'image1', this.currentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.image1Src = newURL.toString();
    });
  }



}
