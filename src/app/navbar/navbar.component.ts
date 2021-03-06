import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { Image } from '../services/image';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin = false;
  navbarCurrentUpload: Image;
  navbarImage1Src: string;
  navbarImage1Description: string;
  navbarSelectedFile1: FileList;
  navbarUploadingImage1 = false;



  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService, public router: Router, public cs: ContentService) {
    // Check to see if this is the logged in administrator
    this.isAdmin = this.as.isAuthed();
    // Pull updated content from Firebase
    this.getContent();
  }


  // When mobile navbar link is clicked, navigate to said path
  mobileNav(path) {
    this.router.navigate([path]);
  }
  // When mobile navbar shop-link is clicked, navigate to outside website
  shopNav() {
    window.location.href = 'https://shop.ganache.com/';
  }



  ngOnInit() {
    // The below jQuery collapses hamburger icon when navigation is executed
    $('.nav a').on('click', function () {
      $('.btn-navbar').click(); // bootstrap 2.x
      $('.navbar-toggle').click(); // bootstrap 3.x
    });
    // For admin view, if there are TinyMCE editors on the page when it's navigated away from, it will kick errors
    // So before the navigate command is sent, we first destroy all editors.
    // All links in the nevbar are dead, routing happens here
    const thisSaved = this;
    $('#homeBtnLink').on('click', function () {
      thisSaved.destroyAllEditors();
      thisSaved.router.navigate(['/']);
    });

    $('#aboutBtnLink').on('click', function () {
      thisSaved.destroyAllEditors();
      thisSaved.router.navigate(['/about']);
    });

    $('#chocoBtnLink').on('click', function () {
      thisSaved.destroyAllEditors();
      thisSaved.router.navigate(['/chocolates']);
    });

    $('#trufflesBtnLink').on('click', function () {
      thisSaved.destroyAllEditors();
      thisSaved.router.navigate(['/truffles']);
    });

    $('#barksBtnLink').on('click', function () {
      thisSaved.destroyAllEditors();
      thisSaved.router.navigate(['/barks']);
    });

    $('#assortedBtnLink').on('click', function () {
      thisSaved.destroyAllEditors();
      thisSaved.router.navigate(['/assorted']);
    });

    $('#fudgeBtnLink').on('click', function () {
      thisSaved.destroyAllEditors();
      thisSaved.router.navigate(['/fudge']);
    });

    $('#seasonalBtnLink').on('click', function () {
      thisSaved.destroyAllEditors();
      thisSaved.router.navigate(['/seasonal']);
    });

    $('#otherchocBtnLink').on('click', function () {
      thisSaved.destroyAllEditors();
      thisSaved.router.navigate(['/otherchoc']);
    });

    $('#shopBtnLink').on('click', function () {
      thisSaved.destroyAllEditors();
      window.location.href = 'https://shop.ganache.com/';
    });

    $('#contactBtnLink').on('click', function () {
      thisSaved.destroyAllEditors();
      thisSaved.router.navigate(['/contact']);
    });

  } // End of ngOnInit()



  // If logged in as an admin, when navigating away from an editable view, destroy all TinyMCE editors first to avoid errors
  destroyAllEditors() {
    if (this.isAdmin) {
      for (let i = tinymce.editors.length - 1; i > -1; i--) {
        const ed_id = tinymce.editors[i].id;
        tinymce.execCommand('mceRemoveEditor', true, ed_id);
      }
    }
  }



  // Pulls page content from Firebase and assigns it to content based on admin status
  getContent() {
    const thisSaved = this;
    this.cs.getPageContent('navbarPage').then(function (pageContent) {
      thisSaved.navbarImage1Src = pageContent.image1.url;
      thisSaved.navbarImage1Description = pageContent.image1.description;
    });
  }



  // Detects when a new image has been inserted and fills the appropriate variable
  navbarDetectImage1(event) {
    this.navbarSelectedFile1 = event.target.files;
  }



  // Uploads a new image
  navbarUploadImage1() {
    if (!this.navbarImage1Description || !this.navbarSelectedFile1) {
      return;
    }
    // Display the upload progress bar for image 1 and no others
    this.navbarUploadingImage1 = true;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.navbarCurrentUpload = new Image(this.navbarSelectedFile1.item(0));
    this.navbarCurrentUpload.description = this.navbarImage1Description;
    this.navbarCurrentUpload.link = 'NA';
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushUpload('navbarPage', 'image1', this.navbarCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.navbarImage1Src = newURL.toString();
    });
  }



}
