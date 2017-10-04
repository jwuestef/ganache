import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { Image } from '../services/image';


@Component({
  selector: 'app-chocolates',
  templateUrl: './chocolates.component.html',
  styleUrls: ['./chocolates.component.css']
})

export class ChocolatesComponent {
  isAdmin = false;
  selectedFiles: FileList;
  currentUpload: Image;
  image1Description: string;
  image1Src: string;

  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService, public cs: ContentService, public fms: FlashMessagesService) {
    // Admin check
    this.isAdmin = this.as.isAuthed();
    // Pull updated content from Firebase
    this.getContent();
  }

  // Pulls page content from Firebase and assigns it to content based on admin status
  public getContent() {
    const thisSaved = this;
    this.cs.getPageContent('chocolatesPage').then(function (pageContent) {
      if (thisSaved.isAdmin) {
        // If they're an admin, set the content of the editors
        tinymce.get('mainHeader').setContent(pageContent.mainHeader);
      } else {
        // Otherwise, set the content of the regularly displayed fields
        $('#mainHeader').html(pageContent.mainHeader);
      }
    });
  }

  // As an admin, saves the content of the editor for the main header of the page
  saveMainHeader() {
    const thisSaved = this;
    this.cs.savePageContent('chocolatesPage', 'mainHeader', tinymce.get('mainHeader').getContent()).then(function () {
      thisSaved.fms.show('Main Header Updated', { cssClass: 'alert-success', timeout: 2000 });
    });
  }

}
