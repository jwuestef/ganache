import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { Image } from '../services/image';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isAdmin = false;
  homeParagraphUpdated = false;
  currentUpload: Image;
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
  image1Link: string;
  image2Link: string;
  image3Link: string;
  image4Link: string;
  image5Link: string;
  selectedFile1: FileList;
  selectedFile2: FileList;
  selectedFile3: FileList;
  selectedFile4: FileList;
  selectedFile5: FileList;
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
  getContent() {
    const thisSaved = this;
    this.cs.getPageContent('homePage').then(function (pageContent) {
      if (thisSaved.isAdmin) {
        // If they're an admin, set the content of paragraph editors
        tinymce.get('homeParagraph').setContent(pageContent.homeParagraph);
      } else {
        // Otherwise, set the content of the regularly displayed fields
        $('#homeParagraph').html(pageContent.homeParagraph);
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
      thisSaved.image1Link = pageContent.image1.link;
      thisSaved.image2Link = pageContent.image2.link;
      thisSaved.image3Link = pageContent.image3.link;
      thisSaved.image4Link = pageContent.image4.link;
      thisSaved.image5Link = pageContent.image5.link;
    });
  }



  // As an admin, saves the content of the editor for the home paragraph, and then shows a success message
  saveHomeParagraph() {
    this.homeParagraphUpdated = false;
    const thisSaved = this;
    this.cs.savePageContent('homePage', 'homeParagraph', tinymce.get('homeParagraph').getContent()).then(function () {
      thisSaved.homeParagraphUpdated = true;
    });
  }



  // Detects when a new image has been inserted and fills the appropriate variable
  detectImage1(event) {
    this.selectedFile1 = event.target.files;
  }
  detectImage2(event) {
    this.selectedFile2 = event.target.files;
  }
  detectImage3(event) {
    this.selectedFile3 = event.target.files;
  }
  detectImage4(event) {
    this.selectedFile4 = event.target.files;
  }
  detectImage5(event) {
    this.selectedFile5 = event.target.files;
  }



  // Uploads a new image
  uploadImage1() {
    if (!this.image1Description || !this.image1Link || !this.selectedFile1) {
      return;
    }
    // Display the upload progress bar for image 1 and no others
    this.uploadingImage1 = true;
    this.uploadingImage2 = false;
    this.uploadingImage3 = false;
    this.uploadingImage4 = false;
    this.uploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.selectedFile1.item(0));
    this.currentUpload.description = this.image1Description;
    this.currentUpload.link = this.image1Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('homePage', 'image1', this.currentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.image1Src = newURL.toString();
    });
  }



  // Uploads a new image
  uploadImage2() {
    if (!this.image2Description || !this.image2Link || !this.selectedFile2) {
      return;
    }
    // Display the upload progress bar for image 2 and no others
    this.uploadingImage1 = false;
    this.uploadingImage2 = true;
    this.uploadingImage3 = false;
    this.uploadingImage4 = false;
    this.uploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.selectedFile2.item(0));
    this.currentUpload.description = this.image2Description;
    this.currentUpload.link = this.image2Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('homePage', 'image2', this.currentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.image2Src = newURL.toString();
    });
  }



  // Uploads a new image
  uploadImage3() {
    if (!this.image3Description || !this.image3Link || !this.selectedFile3) {
      return;
    }
    // Display the upload progress bar for image 3 and no others
    this.uploadingImage1 = false;
    this.uploadingImage2 = false;
    this.uploadingImage3 = true;
    this.uploadingImage4 = false;
    this.uploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.selectedFile3.item(0));
    this.currentUpload.description = this.image3Description;
    this.currentUpload.link = this.image3Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('homePage', 'image3', this.currentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.image3Src = newURL.toString();
    });
  }



  // Uploads a new image
  uploadImage4() {
    if (!this.image4Description || !this.image4Link || !this.selectedFile4) {
      return;
    }
    // Display the upload progress bar for image 4 and no others
    this.uploadingImage1 = false;
    this.uploadingImage2 = false;
    this.uploadingImage3 = false;
    this.uploadingImage4 = true;
    this.uploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.selectedFile4.item(0));
    this.currentUpload.description = this.image4Description;
    this.currentUpload.link = this.image4Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('homePage', 'image4', this.currentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.image4Src = newURL.toString();
    });
  }



  // Uploads a new image
  uploadImage5() {
    if (!this.image5Description || !this.image5Link || !this.selectedFile5) {
      return;
    }
    // Display the upload progress bar for image 5 and no others
    this.uploadingImage1 = false;
    this.uploadingImage2 = false;
    this.uploadingImage3 = false;
    this.uploadingImage4 = false;
    this.uploadingImage5 = true;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.selectedFile5.item(0));
    this.currentUpload.description = this.image5Description;
    this.currentUpload.link = this.image5Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('homePage', 'image5', this.currentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.image5Src = newURL.toString();
    });
  }



}
