import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database/database';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { UploadService } from '../services/upload.service';
import { Upload } from '../services/upload';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  isAdmin = false;
  selectedFiles: FileList;
  currentUpload: Upload;


  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService, public cs: ContentService, public afd: AngularFireDatabase, public us: UploadService) {
    // Check to see if this is the logged in administrator
    this.isAdmin = this.as.isAuthed();
    // Pull updated content from Firebase
    this.getContent();
  }



  // Pulls page content from Firebase and assigns it to content based on admin status
  getContent() {
    const thisSaved = this;
    this.cs.getPageContent('aboutPage').then(function (pageContent) {
      if (thisSaved.isAdmin) {
        // If they're an admin, set the content of the editors
        tinymce.get('mainHeader').setContent(pageContent.mainHeader);
        // TO DO - repeat for all fields
      } else {
        // Otherwise, set the content of the regularly displayed header
        $('#mainHeader').html(pageContent.mainHeader);
        // TO DO - repeat for all fields
      }
    });
  }



  // As an admin, saves the content of the editor for the main header of the page
  saveMainHeader() {
    this.cs.savePageContent('aboutPage', 'mainHeader', tinymce.get('mainHeader').getContent());
  }



  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }



  uploadImage() {
    this.currentUpload = new Upload(this.selectedFiles.item(0));
    this.us.pushUpload(this.currentUpload);
  }





}
