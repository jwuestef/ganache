import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { Image } from '../services/image';


@Component({
  selector: 'app-barks',
  templateUrl: './barks.component.html',
  styleUrls: ['./barks.component.css']
})
export class BarksComponent {
  isAdmin = false;
  selectedFiles: FileList;
  currentUpload: Image;
  barksParagraphUpdated = false;
  image1Src: string;
  image2Src: string;
  image3Src: string;
  image4Src: string;
  image5Src: string;
  image1Description: string;
  image2Description: string;
  image3Description: string;
  image4Description: string;
  image5Description: string;
  uploadingImage1 = false;
  uploadingImage2 = false;
  uploadingImage3 = false;
  uploadingImage4 = false;
  uploadingImage5 = false;



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
    this.cs.getPageContent('barksPage').then(function (pageContent) {
      if (thisSaved.isAdmin) {
        // If they're an admin, set the content of the editors
        tinymce.get('barksParagraph').setContent(pageContent.barksParagraph);
        $('#image1Description').val(pageContent.image1.description);
        $('#image2Description').val(pageContent.image2.description);
        $('#image3Description').val(pageContent.image3.description);
        $('#image4Description').val(pageContent.image4.description);
        $('#image5Description').val(pageContent.image5.description);
      } else {
        // Otherwise, set the content of the regularly displayed fields
        $('#barksParagraph').html(pageContent.barksParagraph);
      }
      // The image gets displayed regardless of admin status
      thisSaved.image1Src = pageContent.image1.url;
      thisSaved.image2Src = pageContent.image2.url;
      thisSaved.image3Src = pageContent.image3.url;
      thisSaved.image4Src = pageContent.image4.url;
      thisSaved.image5Src = pageContent.image5.url;
      thisSaved.image1Description = pageContent.image1.description;
      thisSaved.image2Description = pageContent.image2.description;
      thisSaved.image3Description = pageContent.image3.description;
      thisSaved.image4Description = pageContent.image4.description;
      thisSaved.image5Description = pageContent.image5.description;
    });
  }



  // As an admin, saves the content of the editor for the barks paragraph, and then shows a success message
  saveBarksParagraph() {
    this.barksParagraphUpdated = false;
    const thisSaved = this;
    this.cs.savePageContent('barksPage', 'barksParagraph', tinymce.get('barksParagraph').getContent()).then(function () {
      thisSaved.barksParagraphUpdated = true;
    });
  }



  // Detects when a new image has been inserted and fills the appropriate variable
  detectImage1(event) {
    this.selectedFiles = event.target.files;
  }
  detectImage2(event) {
    this.selectedFiles = event.target.files;
  }
  detectImage3(event) {
    this.selectedFiles = event.target.files;
  }
  detectImage4(event) {
    this.selectedFiles = event.target.files;
  }
  detectImage5(event) {
    this.selectedFiles = event.target.files;
  }



  // Uploads a new image
  uploadImage1() {
    if (!this.image1Description) {
      return;
    }
    // Display the upload progress bar for image 1 and no others
    this.uploadingImage1 = true;
    this.uploadingImage2 = false;
    this.uploadingImage3 = false;
    this.uploadingImage4 = false;
    this.uploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input field
    this.currentUpload = new Image(this.selectedFiles.item(0));
    // Include the image description
    this.currentUpload.description = this.image1Description;
    // Set the name
    this.currentUpload.name = 'image1';
    const thisSaved = this;
    // Upload the file via UploadService (pageName, whichElement, newImage)
    this.cs.pushUpload('barksPage', 'image1', this.currentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.image1Src = newURL.toString();
    });
  }



  // Uploads a new image
  uploadImage2() {
    if (!this.image2Description) {
      return;
    }
    // Display the upload progress bar for image 2 and no others
    this.uploadingImage1 = false;
    this.uploadingImage2 = true;
    this.uploadingImage3 = false;
    this.uploadingImage4 = false;
    this.uploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input field
    this.currentUpload = new Image(this.selectedFiles.item(0));
    // Include the image description
    this.currentUpload.description = this.image2Description;
    // Set the name
    this.currentUpload.name = 'image2';
    const thisSaved = this;
    // Upload the file via UploadService (pageName, whichElement, newImage)
    this.cs.pushUpload('barksPage', 'image2', this.currentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.image2Src = newURL.toString();
    });
  }



  // Uploads a new image
  uploadImage3() {
    if (!this.image3Description) {
      return;
    }
    // Display the upload progress bar for image 3 and no others
    this.uploadingImage1 = false;
    this.uploadingImage2 = false;
    this.uploadingImage3 = true;
    this.uploadingImage4 = false;
    this.uploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input field
    this.currentUpload = new Image(this.selectedFiles.item(0));
    // Include the image description
    this.currentUpload.description = this.image3Description;
    // Set the name
    this.currentUpload.name = 'image3';
    const thisSaved = this;
    // Upload the file via UploadService (pageName, whichElement, newImage)
    this.cs.pushUpload('barksPage', 'image3', this.currentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.image3Src = newURL.toString();
    });
  }



  // Uploads a new image
  uploadImage4() {
    if (!this.image4Description) {
      return;
    }
    // Display the upload progress bar for image 4 and no others
    this.uploadingImage1 = false;
    this.uploadingImage2 = false;
    this.uploadingImage3 = false;
    this.uploadingImage4 = true;
    this.uploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input field
    this.currentUpload = new Image(this.selectedFiles.item(0));
    // Include the image description
    this.currentUpload.description = this.image4Description;
    // Set the name
    this.currentUpload.name = 'image4';
    const thisSaved = this;
    // Upload the file via UploadService (pageName, whichElement, newImage)
    this.cs.pushUpload('barksPage', 'image4', this.currentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.image4Src = newURL.toString();
    });
  }



  // Uploads a new image
  uploadImage5() {
    if (!this.image5Description) {
      return;
    }
    // Display the upload progress bar for image 5 and no others
    this.uploadingImage1 = false;
    this.uploadingImage2 = false;
    this.uploadingImage3 = false;
    this.uploadingImage4 = false;
    this.uploadingImage5 = true;
    // Set file-to-be-uploaded to the file taken from the input field
    this.currentUpload = new Image(this.selectedFiles.item(0));
    // Include the image description
    this.currentUpload.description = this.image5Description;
    // Set the name
    this.currentUpload.name = 'image5';
    const thisSaved = this;
    // Upload the file via UploadService (pageName, whichElement, newImage)
    this.cs.pushUpload('barksPage', 'image5', this.currentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.image5Src = newURL.toString();
    });
  }



}
