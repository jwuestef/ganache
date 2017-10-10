import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { Image } from '../services/image';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAdmin = false;
  homeParagraphUpdated = false;
  homeCurrentUpload: Image;
  homeImage1Src: string;
  homeImage2Src: string;
  homeImage3Src: string;
  homeImage4Src: string;
  homeImage5Src: string;
  homeImage1Description: string;
  homeImage2Description: string;
  homeImage3Description: string;
  homeImage4Description: string;
  homeImage5Description: string;
  homeImage1Link: string;
  homeImage2Link: string;
  homeImage3Link: string;
  homeImage4Link: string;
  homeImage5Link: string;
  homeSelectedFile1: FileList;
  homeSelectedFile2: FileList;
  homeSelectedFile3: FileList;
  homeSelectedFile4: FileList;
  homeSelectedFile5: FileList;
  homeUploadingImage1 = false;
  homeUploadingImage2 = false;
  homeUploadingImage3 = false;
  homeUploadingImage4 = false;
  homeUploadingImage5 = false;



  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService, public cs: ContentService) {
    // Check to see if this is the logged in administrator
    this.isAdmin = this.as.isAuthed();
    // Pull updated content from Firebase
    this.getContent();
  }



  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Sets black border around selected view in navbar
    if (window.location.pathname === '/') {
        document.getElementById('chocoBtn').setAttribute('style', 'border: none;');
        document.getElementById('contactBtn').setAttribute('style', 'border: none;');
        document.getElementById('aboutBtn').setAttribute('style', 'border: none;');
        document.getElementById('shopBtn').setAttribute('style', 'border: none;');
        document.getElementById('homeBtn').setAttribute('style', 'outline: 4px solid black; outline-offset:-4px;');
      }
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
      thisSaved.homeImage1Src = pageContent.image1.url;
      thisSaved.homeImage2Src = pageContent.image2.url;
      thisSaved.homeImage3Src = pageContent.image3.url;
      thisSaved.homeImage4Src = pageContent.image4.url;
      thisSaved.homeImage5Src = pageContent.image5.url;
      thisSaved.homeImage1Description = pageContent.image1.description;
      thisSaved.homeImage2Description = pageContent.image2.description;
      thisSaved.homeImage3Description = pageContent.image3.description;
      thisSaved.homeImage4Description = pageContent.image4.description;
      thisSaved.homeImage5Description = pageContent.image5.description;
      thisSaved.homeImage1Link = pageContent.image1.link;
      thisSaved.homeImage2Link = pageContent.image2.link;
      thisSaved.homeImage3Link = pageContent.image3.link;
      thisSaved.homeImage4Link = pageContent.image4.link;
      thisSaved.homeImage5Link = pageContent.image5.link;
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
  homeDetectImage1(event) {
    this.homeSelectedFile1 = event.target.files;
  }
  homeDetectImage2(event) {
    this.homeSelectedFile2 = event.target.files;
  }
  homeDetectImage3(event) {
    this.homeSelectedFile3 = event.target.files;
  }
  homeDetectImage4(event) {
    this.homeSelectedFile4 = event.target.files;
  }
  homeDetectImage5(event) {
    this.homeSelectedFile5 = event.target.files;
  }



  // Uploads a new image
  homeUploadImage1() {
    if (!this.homeImage1Description || !this.homeImage1Link || !this.homeSelectedFile1) {
      return;
    }
    // Display the upload progress bar for image 1 and no others
    this.homeUploadingImage1 = true;
    this.homeUploadingImage2 = false;
    this.homeUploadingImage3 = false;
    this.homeUploadingImage4 = false;
    this.homeUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.homeCurrentUpload = new Image(this.homeSelectedFile1.item(0));
    this.homeCurrentUpload.description = this.homeImage1Description;
    this.homeCurrentUpload.link = this.homeImage1Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('homePage', 'image1', this.homeCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.homeImage1Src = newURL.toString();
    });
  }



  // Uploads a new image
  homeUploadImage2() {
    if (!this.homeImage2Description || !this.homeImage2Link || !this.homeSelectedFile2) {
      return;
    }
    // Display the upload progress bar for image 2 and no others
    this.homeUploadingImage1 = false;
    this.homeUploadingImage2 = true;
    this.homeUploadingImage3 = false;
    this.homeUploadingImage4 = false;
    this.homeUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.homeCurrentUpload = new Image(this.homeSelectedFile2.item(0));
    this.homeCurrentUpload.description = this.homeImage2Description;
    this.homeCurrentUpload.link = this.homeImage2Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('homePage', 'image2', this.homeCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.homeImage2Src = newURL.toString();
    });
  }



  // Uploads a new image
  homeUploadImage3() {
    if (!this.homeImage3Description || !this.homeImage3Link || !this.homeSelectedFile3) {
      return;
    }
    // Display the upload progress bar for image 3 and no others
    this.homeUploadingImage1 = false;
    this.homeUploadingImage2 = false;
    this.homeUploadingImage3 = true;
    this.homeUploadingImage4 = false;
    this.homeUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.homeCurrentUpload = new Image(this.homeSelectedFile3.item(0));
    this.homeCurrentUpload.description = this.homeImage3Description;
    this.homeCurrentUpload.link = this.homeImage3Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('homePage', 'image3', this.homeCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.homeImage3Src = newURL.toString();
    });
  }



  // Uploads a new image
  homeUploadImage4() {
    if (!this.homeImage4Description || !this.homeImage4Link || !this.homeSelectedFile4) {
      return;
    }
    // Display the upload progress bar for image 4 and no others
    this.homeUploadingImage1 = false;
    this.homeUploadingImage2 = false;
    this.homeUploadingImage3 = false;
    this.homeUploadingImage4 = true;
    this.homeUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.homeCurrentUpload = new Image(this.homeSelectedFile4.item(0));
    this.homeCurrentUpload.description = this.homeImage4Description;
    this.homeCurrentUpload.link = this.homeImage4Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('homePage', 'image4', this.homeCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.homeImage4Src = newURL.toString();
    });
  }



  // Uploads a new image
  homeUploadImage5() {
    if (!this.homeImage5Description || !this.homeImage5Link || !this.homeSelectedFile5) {
      return;
    }
    // Display the upload progress bar for image 5 and no others
    this.homeUploadingImage1 = false;
    this.homeUploadingImage2 = false;
    this.homeUploadingImage3 = false;
    this.homeUploadingImage4 = false;
    this.homeUploadingImage5 = true;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.homeCurrentUpload = new Image(this.homeSelectedFile5.item(0));
    this.homeCurrentUpload.description = this.homeImage5Description;
    this.homeCurrentUpload.link = this.homeImage5Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('homePage', 'image5', this.homeCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.homeImage5Src = newURL.toString();
    });
  }



}
