import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { Image } from '../services/image';


@Component({
  selector: 'app-otherchoc',
  templateUrl: './otherchoc.component.html',
  styleUrls: ['./otherchoc.component.css']
})
export class OtherchocComponent implements OnInit {
  isAdmin = false;
  otherchocParagraphUpdated = false;
  otherchocCurrentUpload: Image;
  otherchocImage1Src: string;
  otherchocImage2Src: string;
  otherchocImage3Src: string;
  otherchocImage4Src: string;
  otherchocImage5Src: string;
  otherchocImage1Description: string;
  otherchocImage2Description: string;
  otherchocImage3Description: string;
  otherchocImage4Description: string;
  otherchocImage5Description: string;
  otherchocImage1Link: string;
  otherchocImage2Link: string;
  otherchocImage3Link: string;
  otherchocImage4Link: string;
  otherchocImage5Link: string;
  otherchocSelectedFile1: FileList;
  otherchocSelectedFile2: FileList;
  otherchocSelectedFile3: FileList;
  otherchocSelectedFile4: FileList;
  otherchocSelectedFile5: FileList;
  otherchocUploadingImage1 = false;
  otherchocUploadingImage2 = false;
  otherchocUploadingImage3 = false;
  otherchocUploadingImage4 = false;
  otherchocUploadingImage5 = false;



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
    document.getElementById('homeBtn').setAttribute('style', 'border: none;');
    document.getElementById('contactBtn').setAttribute('style', 'border: none;');
    document.getElementById('aboutBtn').setAttribute('style', 'border: none;');
    document.getElementById('shopBtn').setAttribute('style', 'border: none;');
    document.getElementById('chocoBtn').setAttribute('style', 'outline: 4px solid black; outline-offset:-4px;');
  }



  // Pulls page content from Firebase and assigns it to content based on admin status
  getContent() {
    const thisSaved = this;
    this.cs.getPageContent('otherchocPage').then(function (pageContent) {
      if (thisSaved.isAdmin) {
        // If they're an admin, set the content of paragraph editors
        tinymce.get('otherchocParagraph').setContent(pageContent.otherchocParagraph);
      } else {
        // Otherwise, set the content of the regularly displayed fields
        $('#otherchocParagraph').html(pageContent.otherchocParagraph);
      }
      // The image gets displayed regardless of admin status
      thisSaved.otherchocImage1Src = pageContent.image1.url;
      thisSaved.otherchocImage2Src = pageContent.image2.url;
      thisSaved.otherchocImage3Src = pageContent.image3.url;
      thisSaved.otherchocImage4Src = pageContent.image4.url;
      thisSaved.otherchocImage5Src = pageContent.image5.url;
      thisSaved.otherchocImage1Description = pageContent.image1.description;
      thisSaved.otherchocImage2Description = pageContent.image2.description;
      thisSaved.otherchocImage3Description = pageContent.image3.description;
      thisSaved.otherchocImage4Description = pageContent.image4.description;
      thisSaved.otherchocImage5Description = pageContent.image5.description;
      thisSaved.otherchocImage1Link = pageContent.image1.link;
      thisSaved.otherchocImage2Link = pageContent.image2.link;
      thisSaved.otherchocImage3Link = pageContent.image3.link;
      thisSaved.otherchocImage4Link = pageContent.image4.link;
      thisSaved.otherchocImage5Link = pageContent.image5.link;
    });
  }



  // As an admin, saves the content of the editor for the otherchoc paragraph, and then shows a success message
  saveOtherchocParagraph() {
    this.otherchocParagraphUpdated = false;
    const thisSaved = this;
    this.cs.savePageContent('otherchocPage', 'otherchocParagraph', tinymce.get('otherchocParagraph').getContent()).then(function () {
      thisSaved.otherchocParagraphUpdated = true;
    });
  }



  // Detects when a new image has been inserted and fills the appropriate variable
  otherchocDetectImage1(event) {
    this.otherchocSelectedFile1 = event.target.files;
  }
  otherchocDetectImage2(event) {
    this.otherchocSelectedFile2 = event.target.files;
  }
  otherchocDetectImage3(event) {
    this.otherchocSelectedFile3 = event.target.files;
  }
  otherchocDetectImage4(event) {
    this.otherchocSelectedFile4 = event.target.files;
  }
  otherchocDetectImage5(event) {
    this.otherchocSelectedFile5 = event.target.files;
  }



  // Uploads a new image
  otherchocUploadImage1() {
    if (!this.otherchocImage1Description || !this.otherchocImage1Link || !this.otherchocSelectedFile1) {
      return;
    }
    // Display the upload progress bar for image 1 and no others
    this.otherchocUploadingImage1 = true;
    this.otherchocUploadingImage2 = false;
    this.otherchocUploadingImage3 = false;
    this.otherchocUploadingImage4 = false;
    this.otherchocUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.otherchocCurrentUpload = new Image(this.otherchocSelectedFile1.item(0));
    this.otherchocCurrentUpload.description = this.otherchocImage1Description;
    this.otherchocCurrentUpload.link = this.otherchocImage1Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('otherchocPage', 'image1', this.otherchocCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.otherchocImage1Src = newURL.toString();
    });
  }



  // Uploads a new image
  otherchocUploadImage2() {
    if (!this.otherchocImage2Description || !this.otherchocImage2Link || !this.otherchocSelectedFile2) {
      return;
    }
    // Display the upload progress bar for image 2 and no others
    this.otherchocUploadingImage1 = false;
    this.otherchocUploadingImage2 = true;
    this.otherchocUploadingImage3 = false;
    this.otherchocUploadingImage4 = false;
    this.otherchocUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.otherchocCurrentUpload = new Image(this.otherchocSelectedFile2.item(0));
    this.otherchocCurrentUpload.description = this.otherchocImage2Description;
    this.otherchocCurrentUpload.link = this.otherchocImage2Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('otherchocPage', 'image2', this.otherchocCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.otherchocImage2Src = newURL.toString();
    });
  }



  // Uploads a new image
  otherchocUploadImage3() {
    if (!this.otherchocImage3Description || !this.otherchocImage3Link || !this.otherchocSelectedFile3) {
      return;
    }
    // Display the upload progress bar for image 3 and no others
    this.otherchocUploadingImage1 = false;
    this.otherchocUploadingImage2 = false;
    this.otherchocUploadingImage3 = true;
    this.otherchocUploadingImage4 = false;
    this.otherchocUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.otherchocCurrentUpload = new Image(this.otherchocSelectedFile3.item(0));
    this.otherchocCurrentUpload.description = this.otherchocImage3Description;
    this.otherchocCurrentUpload.link = this.otherchocImage3Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('otherchocPage', 'image3', this.otherchocCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.otherchocImage3Src = newURL.toString();
    });
  }



  // Uploads a new image
  otherchocUploadImage4() {
    if (!this.otherchocImage4Description || !this.otherchocImage4Link || !this.otherchocSelectedFile4) {
      return;
    }
    // Display the upload progress bar for image 4 and no others
    this.otherchocUploadingImage1 = false;
    this.otherchocUploadingImage2 = false;
    this.otherchocUploadingImage3 = false;
    this.otherchocUploadingImage4 = true;
    this.otherchocUploadingImage5 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.otherchocCurrentUpload = new Image(this.otherchocSelectedFile4.item(0));
    this.otherchocCurrentUpload.description = this.otherchocImage4Description;
    this.otherchocCurrentUpload.link = this.otherchocImage4Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('otherchocPage', 'image4', this.otherchocCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.otherchocImage4Src = newURL.toString();
    });
  }



  // Uploads a new image
  otherchocUploadImage5() {
    if (!this.otherchocImage5Description || !this.otherchocImage5Link || !this.otherchocSelectedFile5) {
      return;
    }
    // Display the upload progress bar for image 5 and no others
    this.otherchocUploadingImage1 = false;
    this.otherchocUploadingImage2 = false;
    this.otherchocUploadingImage3 = false;
    this.otherchocUploadingImage4 = false;
    this.otherchocUploadingImage5 = true;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.otherchocCurrentUpload = new Image(this.otherchocSelectedFile5.item(0));
    this.otherchocCurrentUpload.description = this.otherchocImage5Description;
    this.otherchocCurrentUpload.link = this.otherchocImage5Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('otherchocPage', 'image5', this.otherchocCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.otherchocImage5Src = newURL.toString();
    });
  }



}
