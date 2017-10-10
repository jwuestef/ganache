import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { Image } from '../services/image';


@Component({
  selector: 'app-barks',
  templateUrl: './barks.component.html',
  styleUrls: ['./barks.component.css']
})
export class BarksComponent implements OnInit {
  isAdmin = false;
  barksParagraphUpdated = false;
  barksCurrentUpload: Image;
  barksImage1Src: string;
  barksImage2Src: string;
  barksImage3Src: string;
  barksImage4Src: string;
  barksImage5Src: string;
  barksImage1Description: string;
  barksImage2Description: string;
  barksImage3Description: string;
  barksImage4Description: string;
  barksImage5Description: string;
  barksImage1Link: string;
  barksImage2Link: string;
  barksImage3Link: string;
  barksImage4Link: string;
  barksImage5Link: string;
  barksSelectedFile1: FileList;
  barksSelectedFile2: FileList;
  barksSelectedFile3: FileList;
  barksSelectedFile4: FileList;
  barksSelectedFile5: FileList;
  barksUploadingImage1 = false;
  barksUploadingImage2 = false;
  barksUploadingImage3 = false;
  barksUploadingImage4 = false;
  barksUploadingImage5 = false;



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
    if (window.location.pathname === '/barks') {
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
    this.cs.getPageContent('barksPage').then(function (pageContent) {
      if (thisSaved.isAdmin) {
        // If they're an admin, set the content of paragraph editors
        tinymce.get('barksParagraph').setContent(pageContent.barksParagraph);
      } else {
        // Otherwise, set the content of the regularly displayed fields
        $('#barksParagraph').html(pageContent.barksParagraph);
      }
      // The image gets displayed regardless of admin status
      thisSaved.barksImage1Src = pageContent.image1.url;
      thisSaved.barksImage2Src = pageContent.image2.url;
      thisSaved.barksImage3Src = pageContent.image3.url;
      thisSaved.barksImage4Src = pageContent.image4.url;
      thisSaved.barksImage5Src = pageContent.image5.url;
      thisSaved.barksImage1Description = pageContent.image1.description;
      thisSaved.barksImage2Description = pageContent.image2.description;
      thisSaved.barksImage3Description = pageContent.image3.description;
      thisSaved.barksImage4Description = pageContent.image4.description;
      thisSaved.barksImage5Description = pageContent.image5.description;
      thisSaved.barksImage1Link = pageContent.image1.link;
      thisSaved.barksImage2Link = pageContent.image2.link;
      thisSaved.barksImage3Link = pageContent.image3.link;
      thisSaved.barksImage4Link = pageContent.image4.link;
      thisSaved.barksImage5Link = pageContent.image5.link;
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
  barksDetectImage1(event) {
    this.barksSelectedFile1 = event.target.files;
  }
  barksDetectImage2(event) {
    this.barksSelectedFile2 = event.target.files;
  }
  barksDetectImage3(event) {
    this.barksSelectedFile3 = event.target.files;
  }
  barksDetectImage4(event) {
    this.barksSelectedFile4 = event.target.files;
  }
  barksDetectImage5(event) {
    this.barksSelectedFile5 = event.target.files;
  }



  // Uploads a new image
  barksUploadImage1() {
    if (!this.barksImage1Description || !this.barksImage1Link || !this.barksSelectedFile1) {
      return;
    }
    // Display the upload progress bar for image 1 and no others
    this.barksUploadingImage1 = true;
    this.barksUploadingImage2 = false;
    this.barksUploadingImage3 = false;
    this.barksUploadingImage4 = false;
    this.barksUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.barksCurrentUpload = new Image(this.barksSelectedFile1.item(0));
    this.barksCurrentUpload.description = this.barksImage1Description;
    this.barksCurrentUpload.link = this.barksImage1Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('barksPage', 'image1', this.barksCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.barksImage1Src = newURL.toString();
    });
  }



  // Uploads a new image
  barksUploadImage2() {
    if (!this.barksImage2Description || !this.barksImage2Link || !this.barksSelectedFile2) {
      return;
    }
    // Display the upload progress bar for image 2 and no others
    this.barksUploadingImage1 = false;
    this.barksUploadingImage2 = true;
    this.barksUploadingImage3 = false;
    this.barksUploadingImage4 = false;
    this.barksUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.barksCurrentUpload = new Image(this.barksSelectedFile2.item(0));
    this.barksCurrentUpload.description = this.barksImage2Description;
    this.barksCurrentUpload.link = this.barksImage2Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('barksPage', 'image2', this.barksCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.barksImage2Src = newURL.toString();
    });
  }



  // Uploads a new image
  barksUploadImage3() {
    if (!this.barksImage3Description || !this.barksImage3Link || !this.barksSelectedFile3) {
      return;
    }
    // Display the upload progress bar for image 3 and no others
    this.barksUploadingImage1 = false;
    this.barksUploadingImage2 = false;
    this.barksUploadingImage3 = true;
    this.barksUploadingImage4 = false;
    this.barksUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.barksCurrentUpload = new Image(this.barksSelectedFile3.item(0));
    this.barksCurrentUpload.description = this.barksImage3Description;
    this.barksCurrentUpload.link = this.barksImage3Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('barksPage', 'image3', this.barksCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.barksImage3Src = newURL.toString();
    });
  }



  // Uploads a new image
  barksUploadImage4() {
    if (!this.barksImage4Description || !this.barksImage4Link || !this.barksSelectedFile4) {
      return;
    }
    // Display the upload progress bar for image 4 and no others
    this.barksUploadingImage1 = false;
    this.barksUploadingImage2 = false;
    this.barksUploadingImage3 = false;
    this.barksUploadingImage4 = true;
    this.barksUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.barksCurrentUpload = new Image(this.barksSelectedFile4.item(0));
    this.barksCurrentUpload.description = this.barksImage4Description;
    this.barksCurrentUpload.link = this.barksImage4Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('barksPage', 'image4', this.barksCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.barksImage4Src = newURL.toString();
    });
  }



  // Uploads a new image
  barksUploadImage5() {
    if (!this.barksImage5Description || !this.barksImage5Link || !this.barksSelectedFile5) {
      return;
    }
    // Display the upload progress bar for image 5 and no others
    this.barksUploadingImage1 = false;
    this.barksUploadingImage2 = false;
    this.barksUploadingImage3 = false;
    this.barksUploadingImage4 = false;
    this.barksUploadingImage5 = true;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.barksCurrentUpload = new Image(this.barksSelectedFile5.item(0));
    this.barksCurrentUpload.description = this.barksImage5Description;
    this.barksCurrentUpload.link = this.barksImage5Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('barksPage', 'image5', this.barksCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.barksImage5Src = newURL.toString();
    });
  }




}
