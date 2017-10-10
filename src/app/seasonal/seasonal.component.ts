import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { Image } from '../services/image';


@Component({
  selector: 'app-seasonal',
  templateUrl: './seasonal.component.html',
  styleUrls: ['./seasonal.component.css']
})
export class SeasonalComponent implements OnInit {
  isAdmin = false;
  seasonalParagraphUpdated = false;
  seasonalCurrentUpload: Image;
  seasonalImage1Src: string;
  seasonalImage2Src: string;
  seasonalImage3Src: string;
  seasonalImage4Src: string;
  seasonalImage5Src: string;
  seasonalImage1Description: string;
  seasonalImage2Description: string;
  seasonalImage3Description: string;
  seasonalImage4Description: string;
  seasonalImage5Description: string;
  seasonalImage1Link: string;
  seasonalImage2Link: string;
  seasonalImage3Link: string;
  seasonalImage4Link: string;
  seasonalImage5Link: string;
  seasonalSelectedFile1: FileList;
  seasonalSelectedFile2: FileList;
  seasonalSelectedFile3: FileList;
  seasonalSelectedFile4: FileList;
  seasonalSelectedFile5: FileList;
  seasonalUploadingImage1 = false;
  seasonalUploadingImage2 = false;
  seasonalUploadingImage3 = false;
  seasonalUploadingImage4 = false;
  seasonalUploadingImage5 = false;



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
    if (window.location.pathname === '/seasonal') {
      if (this.isAdmin) {
        // Set black border around selected view for admins
        document.getElementById('homeBtnAdmin').setAttribute('style', 'border: none;');
        document.getElementById('contactBtnAdmin').setAttribute('style', 'border: none;');
        document.getElementById('aboutBtnAdmin').setAttribute('style', 'border: none;');
        document.getElementById('shopBtnAdmin').setAttribute('style', 'border: none;');
        document.getElementById('chocoBtnAdmin').setAttribute('style', 'border: 5px solid black;');
      } else {
        // Set black border around selected view for non-admins
        document.getElementById('homeBtn').setAttribute('style', 'border: none;');
        document.getElementById('contactBtn').setAttribute('style', 'border: none;');
        document.getElementById('aboutBtn').setAttribute('style', 'border: none;');
        document.getElementById('shopBtn').setAttribute('style', 'border: none;');
        document.getElementById('chocoBtn').setAttribute('style', 'border: 5px solid black;');
      }
    }
  }



  // Pulls page content from Firebase and assigns it to content based on admin status
  getContent() {
    const thisSaved = this;
    this.cs.getPageContent('seasonalPage').then(function (pageContent) {
      if (thisSaved.isAdmin) {
        // If they're an admin, set the content of paragraph editors
        tinymce.get('seasonalParagraph').setContent(pageContent.seasonalParagraph);
      } else {
        // Otherwise, set the content of the regularly displayed fields
        $('#seasonalParagraph').html(pageContent.seasonalParagraph);
      }
      // The image gets displayed regardless of admin status
      thisSaved.seasonalImage1Src = pageContent.image1.url;
      thisSaved.seasonalImage2Src = pageContent.image2.url;
      thisSaved.seasonalImage3Src = pageContent.image3.url;
      thisSaved.seasonalImage4Src = pageContent.image4.url;
      thisSaved.seasonalImage5Src = pageContent.image5.url;
      thisSaved.seasonalImage1Description = pageContent.image1.description;
      thisSaved.seasonalImage2Description = pageContent.image2.description;
      thisSaved.seasonalImage3Description = pageContent.image3.description;
      thisSaved.seasonalImage4Description = pageContent.image4.description;
      thisSaved.seasonalImage5Description = pageContent.image5.description;
      thisSaved.seasonalImage1Link = pageContent.image1.link;
      thisSaved.seasonalImage2Link = pageContent.image2.link;
      thisSaved.seasonalImage3Link = pageContent.image3.link;
      thisSaved.seasonalImage4Link = pageContent.image4.link;
      thisSaved.seasonalImage5Link = pageContent.image5.link;
    });
  }



  // As an admin, saves the content of the editor for the seasonal treats paragraph, and then shows a success message
  saveSeasonalParagraph() {
    this.seasonalParagraphUpdated = false;
    const thisSaved = this;
    this.cs.savePageContent('seasonalPage', 'seasonalParagraph', tinymce.get('seasonalParagraph').getContent()).then(function () {
      thisSaved.seasonalParagraphUpdated = true;
    });
  }



  // Detects when a new image has been inserted and fills the appropriate variable
  seasonalDetectImage1(event) {
    this.seasonalSelectedFile1 = event.target.files;
  }
  seasonalDetectImage2(event) {
    this.seasonalSelectedFile2 = event.target.files;
  }
  seasonalDetectImage3(event) {
    this.seasonalSelectedFile3 = event.target.files;
  }
  seasonalDetectImage4(event) {
    this.seasonalSelectedFile4 = event.target.files;
  }
  seasonalDetectImage5(event) {
    this.seasonalSelectedFile5 = event.target.files;
  }



  // Uploads a new image
  seasonalUploadImage1() {
    if (!this.seasonalImage1Description || !this.seasonalImage1Link || !this.seasonalSelectedFile1) {
      return;
    }
    // Display the upload progress bar for image 1 and no others
    this.seasonalUploadingImage1 = true;
    this.seasonalUploadingImage2 = false;
    this.seasonalUploadingImage3 = false;
    this.seasonalUploadingImage4 = false;
    this.seasonalUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.seasonalCurrentUpload = new Image(this.seasonalSelectedFile1.item(0));
    this.seasonalCurrentUpload.description = this.seasonalImage1Description;
    this.seasonalCurrentUpload.link = this.seasonalImage1Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('seasonalPage', 'image1', this.seasonalCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.seasonalImage1Src = newURL.toString();
    });
  }



  // Uploads a new image
  seasonalUploadImage2() {
    if (!this.seasonalImage2Description || !this.seasonalImage2Link || !this.seasonalSelectedFile2) {
      return;
    }
    // Display the upload progress bar for image 2 and no others
    this.seasonalUploadingImage1 = false;
    this.seasonalUploadingImage2 = true;
    this.seasonalUploadingImage3 = false;
    this.seasonalUploadingImage4 = false;
    this.seasonalUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.seasonalCurrentUpload = new Image(this.seasonalSelectedFile2.item(0));
    this.seasonalCurrentUpload.description = this.seasonalImage2Description;
    this.seasonalCurrentUpload.link = this.seasonalImage2Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('seasonalPage', 'image2', this.seasonalCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.seasonalImage2Src = newURL.toString();
    });
  }



  // Uploads a new image
  seasonalUploadImage3() {
    if (!this.seasonalImage3Description || !this.seasonalImage3Link || !this.seasonalSelectedFile3) {
      return;
    }
    // Display the upload progress bar for image 3 and no others
    this.seasonalUploadingImage1 = false;
    this.seasonalUploadingImage2 = false;
    this.seasonalUploadingImage3 = true;
    this.seasonalUploadingImage4 = false;
    this.seasonalUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.seasonalCurrentUpload = new Image(this.seasonalSelectedFile3.item(0));
    this.seasonalCurrentUpload.description = this.seasonalImage3Description;
    this.seasonalCurrentUpload.link = this.seasonalImage3Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('seasonalPage', 'image3', this.seasonalCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.seasonalImage3Src = newURL.toString();
    });
  }



  // Uploads a new image
  seasonalUploadImage4() {
    if (!this.seasonalImage4Description || !this.seasonalImage4Link || !this.seasonalSelectedFile4) {
      return;
    }
    // Display the upload progress bar for image 4 and no others
    this.seasonalUploadingImage1 = false;
    this.seasonalUploadingImage2 = false;
    this.seasonalUploadingImage3 = false;
    this.seasonalUploadingImage4 = true;
    this.seasonalUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.seasonalCurrentUpload = new Image(this.seasonalSelectedFile4.item(0));
    this.seasonalCurrentUpload.description = this.seasonalImage4Description;
    this.seasonalCurrentUpload.link = this.seasonalImage4Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('seasonalPage', 'image4', this.seasonalCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.seasonalImage4Src = newURL.toString();
    });
  }



  // Uploads a new image
  seasonalUploadImage5() {
    if (!this.seasonalImage5Description || !this.seasonalImage5Link || !this.seasonalSelectedFile5) {
      return;
    }
    // Display the upload progress bar for image 5 and no others
    this.seasonalUploadingImage1 = false;
    this.seasonalUploadingImage2 = false;
    this.seasonalUploadingImage3 = false;
    this.seasonalUploadingImage4 = false;
    this.seasonalUploadingImage5 = true;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.seasonalCurrentUpload = new Image(this.seasonalSelectedFile5.item(0));
    this.seasonalCurrentUpload.description = this.seasonalImage5Description;
    this.seasonalCurrentUpload.link = this.seasonalImage5Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('seasonalPage', 'image5', this.seasonalCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.seasonalImage5Src = newURL.toString();
    });
  }




}
