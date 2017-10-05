import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { Image } from '../services/image';

@Component({
  selector: 'app-creams',
  templateUrl: './creams.component.html',
  styleUrls: ['./creams.component.css']
})
export class CreamsComponent {
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
  this.cs.getPageContent('creamsPage').then(function (pageContent) {
    if (thisSaved.isAdmin) {
      // If they're an admin, set the content of the editors
      tinymce.get('creamsParagraph').setContent(pageContent.creamsParagraph);
      $('#image1Description').val(pageContent.image1.description);
    } else {
      // Otherwise, set the content of the regularly displayed fields
      $('#creamsParagraph').html(pageContent.creamsParagraph);
    }
    // The image gets displayed regardless of admin status
    thisSaved.image1Src = pageContent.image1.url;
    thisSaved.image1Description = pageContent.image1.description;
    });
  }

  // As an admin, saves the content of the editor for the creams paragraph
  saveCreamsParagraph() {
    const thisSaved = this;
    this.cs.savePageContent('creamsPage', 'creamsParagraph', tinymce.get('creamsParagraph').getContent()).then(function () {
      thisSaved.fms.show('Creams Paragraph Updated', { cssClass: 'alert-success', timeout: 2000 });
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
    this.cs.pushUpload('creamsPage', 'image1', this.currentUpload).then(function(newURL) {
      // Updates thumbnail image
      thisSaved.image1Src = newURL.toString();
    });
  }
}
