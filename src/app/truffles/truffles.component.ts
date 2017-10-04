import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { Image } from '../services/image';

@Component({
  selector: 'app-truffles',
  templateUrl: './truffles.component.html',
  styleUrls: ['./truffles.component.css']
})
export class TrufflesComponent {
  isAdmin = false;
  selectedFiles: FileList;
  currentUpload: Image;
  image1Description: string;
  image1Src: string;

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
  this.cs.getPageContent('trufflesPage').then(function (pageContent) {
    if (thisSaved.isAdmin) {
      // If they're an admin, set the content of the editors
      tinymce.get('mainHeader').setContent(pageContent.mainHeader);
      tinymce.get('trufflesParagraph').setContent(pageContent.trufflesParagraph);
      $('#image1Description').val(pageContent.image1.description);
    } else {
      // Otherwise, set the content of the regularly displayed fields
      $('#mainHeader').html(pageContent.mainHeader);
      $('#trufflesParagraph').html(pageContent.trufflesParagraph);
    }
    // The image gets displayed regardless of admin status
    thisSaved.image1Src = pageContent.image1.url;
    thisSaved.image1Description = pageContent.image1.description;
  });
}

 // As an admin, saves the content of the editor for the main header of the page
saveMainHeader() {
  const thisSaved = this;
  this.cs.savePageContent('trufflesPage', 'mainHeader', tinymce.get('mainHeader').getContent()).then(function () {
    thisSaved.fms.show('Main Header Updated', { cssClass: 'alert-success', timeout: 2000 });
  });
}

 // As an admin, saves the content of the editor for the truffles paragraph
 saveTrufflesParagraph() {
  const thisSaved = this;
  this.cs.savePageContent('trufflesPage', 'trufflesParagraph', tinymce.get('trufflesParagraph').getContent()).then(function () {
    thisSaved.fms.show('Truffles Paragraph Updated', { cssClass: 'alert-success', timeout: 2000 });
  });
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
  const thisSaved = this;
  // Upload the file via UploadService (pageName, whichElement, newImage)
  this.cs.pushUpload('trufflesPage', 'image1', this.currentUpload).then(function(newURL) {
    // Updates thumbnail image
    thisSaved.image1Src = newURL.toString();
  });
}




}
