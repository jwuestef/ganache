import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { Image } from '../services/image';


@Component({
  selector: 'app-chocolates',
  templateUrl: './chocolates.component.html',
  styleUrls: ['./chocolates.component.css']
})
export class ChocolatesComponent implements OnInit {
  isAdmin = false;
  chocolatesParagraphUpdated = false;
  chocolatesCurrentUpload: Image;
  chocolatesImage1Src: string;
  chocolatesImage2Src: string;
  chocolatesImage3Src: string;
  chocolatesImage4Src: string;
  chocolatesImage5Src: string;
  chocolatesImage1Description: string;
  chocolatesImage2Description: string;
  chocolatesImage3Description: string;
  chocolatesImage4Description: string;
  chocolatesImage5Description: string;
  chocolatesImage1Link: string;
  chocolatesImage2Link: string;
  chocolatesImage3Link: string;
  chocolatesImage4Link: string;
  chocolatesImage5Link: string;
  chocolatesSelectedFile1: FileList;
  chocolatesSelectedFile2: FileList;
  chocolatesSelectedFile3: FileList;
  chocolatesSelectedFile4: FileList;
  chocolatesSelectedFile5: FileList;
  chocolatesUploadingImage1 = false;
  chocolatesUploadingImage2 = false;
  chocolatesUploadingImage3 = false;
  chocolatesUploadingImage4 = false;
  chocolatesUploadingImage5 = false;



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
    if (window.location.pathname === '/chocolates') {
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
    this.cs.getPageContent('chocolatesPage').then(function (pageContent) {
      if (thisSaved.isAdmin) {
        // If they're an admin, set the content of paragraph editors
        tinymce.get('chocolatesParagraph').setContent(pageContent.chocolatesParagraph);
      } else {
        // Otherwise, set the content of the regularly displayed fields
        $('#chocolatesParagraph').html(pageContent.chocolatesParagraph);
      }
      // The image gets displayed regardless of admin status
      thisSaved.chocolatesImage1Src = pageContent.image1.url;
      thisSaved.chocolatesImage2Src = pageContent.image2.url;
      thisSaved.chocolatesImage3Src = pageContent.image3.url;
      thisSaved.chocolatesImage4Src = pageContent.image4.url;
      thisSaved.chocolatesImage5Src = pageContent.image5.url;
      thisSaved.chocolatesImage1Description = pageContent.image1.description;
      thisSaved.chocolatesImage2Description = pageContent.image2.description;
      thisSaved.chocolatesImage3Description = pageContent.image3.description;
      thisSaved.chocolatesImage4Description = pageContent.image4.description;
      thisSaved.chocolatesImage5Description = pageContent.image5.description;
      thisSaved.chocolatesImage1Link = pageContent.image1.link;
      thisSaved.chocolatesImage2Link = pageContent.image2.link;
      thisSaved.chocolatesImage3Link = pageContent.image3.link;
      thisSaved.chocolatesImage4Link = pageContent.image4.link;
      thisSaved.chocolatesImage5Link = pageContent.image5.link;
    });
  }



  // As an admin, saves the content of the editor for the chocolates paragraph, and then shows a success message
  saveChocolatesParagraph() {
    this.chocolatesParagraphUpdated = false;
    const thisSaved = this;
    this.cs.savePageContent('chocolatesPage', 'chocolatesParagraph', tinymce.get('chocolatesParagraph').getContent()).then(function () {
      thisSaved.chocolatesParagraphUpdated = true;
    });
  }



  // Detects when a new image has been inserted and fills the appropriate variable
  chocolatesDetectImage1(event) {
    this.chocolatesSelectedFile1 = event.target.files;
  }
  chocolatesDetectImage2(event) {
    this.chocolatesSelectedFile2 = event.target.files;
  }
  chocolatesDetectImage3(event) {
    this.chocolatesSelectedFile3 = event.target.files;
  }
  chocolatesDetectImage4(event) {
    this.chocolatesSelectedFile4 = event.target.files;
  }
  chocolatesDetectImage5(event) {
    this.chocolatesSelectedFile5 = event.target.files;
  }



  // Uploads a new image
  chocolatesUploadImage1() {
    if (!this.chocolatesImage1Description || !this.chocolatesImage1Link || !this.chocolatesSelectedFile1) {
      return;
    }
    // Display the upload progress bar for image 1 and no others
    this.chocolatesUploadingImage1 = true;
    this.chocolatesUploadingImage2 = false;
    this.chocolatesUploadingImage3 = false;
    this.chocolatesUploadingImage4 = false;
    this.chocolatesUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.chocolatesCurrentUpload = new Image(this.chocolatesSelectedFile1.item(0));
    this.chocolatesCurrentUpload.description = this.chocolatesImage1Description;
    this.chocolatesCurrentUpload.link = this.chocolatesImage1Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('chocolatesPage', 'image1', this.chocolatesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.chocolatesImage1Src = newURL.toString();
    });
  }



  // Uploads a new image
  chocolatesUploadImage2() {
    if (!this.chocolatesImage2Description || !this.chocolatesImage2Link || !this.chocolatesSelectedFile2) {
      return;
    }
    // Display the upload progress bar for image 2 and no others
    this.chocolatesUploadingImage1 = false;
    this.chocolatesUploadingImage2 = true;
    this.chocolatesUploadingImage3 = false;
    this.chocolatesUploadingImage4 = false;
    this.chocolatesUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.chocolatesCurrentUpload = new Image(this.chocolatesSelectedFile2.item(0));
    this.chocolatesCurrentUpload.description = this.chocolatesImage2Description;
    this.chocolatesCurrentUpload.link = this.chocolatesImage2Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('chocolatesPage', 'image2', this.chocolatesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.chocolatesImage2Src = newURL.toString();
    });
  }



  // Uploads a new image
  chocolatesUploadImage3() {
    if (!this.chocolatesImage3Description || !this.chocolatesImage3Link || !this.chocolatesSelectedFile3) {
      return;
    }
    // Display the upload progress bar for image 3 and no others
    this.chocolatesUploadingImage1 = false;
    this.chocolatesUploadingImage2 = false;
    this.chocolatesUploadingImage3 = true;
    this.chocolatesUploadingImage4 = false;
    this.chocolatesUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.chocolatesCurrentUpload = new Image(this.chocolatesSelectedFile3.item(0));
    this.chocolatesCurrentUpload.description = this.chocolatesImage3Description;
    this.chocolatesCurrentUpload.link = this.chocolatesImage3Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('chocolatesPage', 'image3', this.chocolatesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.chocolatesImage3Src = newURL.toString();
    });
  }



  // Uploads a new image
  chocolatesUploadImage4() {
    if (!this.chocolatesImage4Description || !this.chocolatesImage4Link || !this.chocolatesSelectedFile4) {
      return;
    }
    // Display the upload progress bar for image 4 and no others
    this.chocolatesUploadingImage1 = false;
    this.chocolatesUploadingImage2 = false;
    this.chocolatesUploadingImage3 = false;
    this.chocolatesUploadingImage4 = true;
    this.chocolatesUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.chocolatesCurrentUpload = new Image(this.chocolatesSelectedFile4.item(0));
    this.chocolatesCurrentUpload.description = this.chocolatesImage4Description;
    this.chocolatesCurrentUpload.link = this.chocolatesImage4Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('chocolatesPage', 'image4', this.chocolatesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.chocolatesImage4Src = newURL.toString();
    });
  }



  // Uploads a new image
  chocolatesUploadImage5() {
    if (!this.chocolatesImage5Description || !this.chocolatesImage5Link || !this.chocolatesSelectedFile5) {
      return;
    }
    // Display the upload progress bar for image 5 and no others
    this.chocolatesUploadingImage1 = false;
    this.chocolatesUploadingImage2 = false;
    this.chocolatesUploadingImage3 = false;
    this.chocolatesUploadingImage4 = false;
    this.chocolatesUploadingImage5 = true;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.chocolatesCurrentUpload = new Image(this.chocolatesSelectedFile5.item(0));
    this.chocolatesCurrentUpload.description = this.chocolatesImage5Description;
    this.chocolatesCurrentUpload.link = this.chocolatesImage5Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('chocolatesPage', 'image5', this.chocolatesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.chocolatesImage5Src = newURL.toString();
    });
  }




}
