import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { Image } from '../services/image';


@Component({
  selector: 'app-fudge',
  templateUrl: './fudge.component.html',
  styleUrls: ['./fudge.component.css']
})
export class FudgeComponent implements OnInit {
  isAdmin = false;
  fudgeParagraphUpdated = false;
  fudgeCurrentUpload: Image;
  fudgeImage1Src: string;
  fudgeImage2Src: string;
  fudgeImage3Src: string;
  fudgeImage4Src: string;
  fudgeImage5Src: string;
  fudgeImage1Description: string;
  fudgeImage2Description: string;
  fudgeImage3Description: string;
  fudgeImage4Description: string;
  fudgeImage5Description: string;
  fudgeImage1Link: string;
  fudgeImage2Link: string;
  fudgeImage3Link: string;
  fudgeImage4Link: string;
  fudgeImage5Link: string;
  fudgeSelectedFile1: FileList;
  fudgeSelectedFile2: FileList;
  fudgeSelectedFile3: FileList;
  fudgeSelectedFile4: FileList;
  fudgeSelectedFile5: FileList;
  fudgeUploadingImage1 = false;
  fudgeUploadingImage2 = false;
  fudgeUploadingImage3 = false;
  fudgeUploadingImage4 = false;
  fudgeUploadingImage5 = false;



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
    if (window.location.pathname === '/fudge') {
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
        document.getElementById('chocoBtn').setAttribute('style', 'outline: 4px solid black; outline-offset:-1px;');
      }
    }
  }



  // Pulls page content from Firebase and assigns it to content based on admin status
  getContent() {
    const thisSaved = this;
    this.cs.getPageContent('fudgePage').then(function (pageContent) {
      if (thisSaved.isAdmin) {
        // If they're an admin, set the content of paragraph editors
        tinymce.get('fudgeParagraph').setContent(pageContent.fudgeParagraph);
      } else {
        // Otherwise, set the content of the regularly displayed fields
        $('#fudgeParagraph').html(pageContent.fudgeParagraph);
      }
      // The image gets displayed regardless of admin status
      thisSaved.fudgeImage1Src = pageContent.image1.url;
      thisSaved.fudgeImage2Src = pageContent.image2.url;
      thisSaved.fudgeImage3Src = pageContent.image3.url;
      thisSaved.fudgeImage4Src = pageContent.image4.url;
      thisSaved.fudgeImage5Src = pageContent.image5.url;
      thisSaved.fudgeImage1Description = pageContent.image1.description;
      thisSaved.fudgeImage2Description = pageContent.image2.description;
      thisSaved.fudgeImage3Description = pageContent.image3.description;
      thisSaved.fudgeImage4Description = pageContent.image4.description;
      thisSaved.fudgeImage5Description = pageContent.image5.description;
      thisSaved.fudgeImage1Link = pageContent.image1.link;
      thisSaved.fudgeImage2Link = pageContent.image2.link;
      thisSaved.fudgeImage3Link = pageContent.image3.link;
      thisSaved.fudgeImage4Link = pageContent.image4.link;
      thisSaved.fudgeImage5Link = pageContent.image5.link;
    });
  }



  // As an admin, saves the content of the editor for the fudge paragraph, and then shows a success message
  saveFudgeParagraph() {
    this.fudgeParagraphUpdated = false;
    const thisSaved = this;
    this.cs.savePageContent('fudgePage', 'fudgeParagraph', tinymce.get('fudgeParagraph').getContent()).then(function () {
      thisSaved.fudgeParagraphUpdated = true;
    });
  }



  // Detects when a new image has been inserted and fills the appropriate variable
  fudgeDetectImage1(event) {
    this.fudgeSelectedFile1 = event.target.files;
  }
  fudgeDetectImage2(event) {
    this.fudgeSelectedFile2 = event.target.files;
  }
  fudgeDetectImage3(event) {
    this.fudgeSelectedFile3 = event.target.files;
  }
  fudgeDetectImage4(event) {
    this.fudgeSelectedFile4 = event.target.files;
  }
  fudgeDetectImage5(event) {
    this.fudgeSelectedFile5 = event.target.files;
  }



  // Uploads a new image
  fudgeUploadImage1() {
    if (!this.fudgeImage1Description || !this.fudgeImage1Link || !this.fudgeSelectedFile1) {
      return;
    }
    // Display the upload progress bar for image 1 and no others
    this.fudgeUploadingImage1 = true;
    this.fudgeUploadingImage2 = false;
    this.fudgeUploadingImage3 = false;
    this.fudgeUploadingImage4 = false;
    this.fudgeUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.fudgeCurrentUpload = new Image(this.fudgeSelectedFile1.item(0));
    this.fudgeCurrentUpload.description = this.fudgeImage1Description;
    this.fudgeCurrentUpload.link = this.fudgeImage1Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('fudgePage', 'image1', this.fudgeCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.fudgeImage1Src = newURL.toString();
    });
  }



  // Uploads a new image
  fudgeUploadImage2() {
    if (!this.fudgeImage2Description || !this.fudgeImage2Link || !this.fudgeSelectedFile2) {
      return;
    }
    // Display the upload progress bar for image 2 and no others
    this.fudgeUploadingImage1 = false;
    this.fudgeUploadingImage2 = true;
    this.fudgeUploadingImage3 = false;
    this.fudgeUploadingImage4 = false;
    this.fudgeUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.fudgeCurrentUpload = new Image(this.fudgeSelectedFile2.item(0));
    this.fudgeCurrentUpload.description = this.fudgeImage2Description;
    this.fudgeCurrentUpload.link = this.fudgeImage2Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('fudgePage', 'image2', this.fudgeCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.fudgeImage2Src = newURL.toString();
    });
  }



  // Uploads a new image
  fudgeUploadImage3() {
    if (!this.fudgeImage3Description || !this.fudgeImage3Link || !this.fudgeSelectedFile3) {
      return;
    }
    // Display the upload progress bar for image 3 and no others
    this.fudgeUploadingImage1 = false;
    this.fudgeUploadingImage2 = false;
    this.fudgeUploadingImage3 = true;
    this.fudgeUploadingImage4 = false;
    this.fudgeUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.fudgeCurrentUpload = new Image(this.fudgeSelectedFile3.item(0));
    this.fudgeCurrentUpload.description = this.fudgeImage3Description;
    this.fudgeCurrentUpload.link = this.fudgeImage3Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('fudgePage', 'image3', this.fudgeCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.fudgeImage3Src = newURL.toString();
    });
  }



  // Uploads a new image
  fudgeUploadImage4() {
    if (!this.fudgeImage4Description || !this.fudgeImage4Link || !this.fudgeSelectedFile4) {
      return;
    }
    // Display the upload progress bar for image 4 and no others
    this.fudgeUploadingImage1 = false;
    this.fudgeUploadingImage2 = false;
    this.fudgeUploadingImage3 = false;
    this.fudgeUploadingImage4 = true;
    this.fudgeUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.fudgeCurrentUpload = new Image(this.fudgeSelectedFile4.item(0));
    this.fudgeCurrentUpload.description = this.fudgeImage4Description;
    this.fudgeCurrentUpload.link = this.fudgeImage4Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('fudgePage', 'image4', this.fudgeCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.fudgeImage4Src = newURL.toString();
    });
  }



  // Uploads a new image
  fudgeUploadImage5() {
    if (!this.fudgeImage5Description || !this.fudgeImage5Link || !this.fudgeSelectedFile5) {
      return;
    }
    // Display the upload progress bar for image 5 and no others
    this.fudgeUploadingImage1 = false;
    this.fudgeUploadingImage2 = false;
    this.fudgeUploadingImage3 = false;
    this.fudgeUploadingImage4 = false;
    this.fudgeUploadingImage5 = true;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.fudgeCurrentUpload = new Image(this.fudgeSelectedFile5.item(0));
    this.fudgeCurrentUpload.description = this.fudgeImage5Description;
    this.fudgeCurrentUpload.link = this.fudgeImage5Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('fudgePage', 'image5', this.fudgeCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.fudgeImage5Src = newURL.toString();
    });
  }



}
