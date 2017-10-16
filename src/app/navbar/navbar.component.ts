import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin = false;


  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService, public router: Router) {
    this.isAdmin = this.as.isAuthed();
  }



  ngOnInit() {

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
      thisSaved.router.navigate(['/shop']);
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



}
