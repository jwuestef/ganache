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
  linkClicked = false;


  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService, public router: Router) {
    this.isAdmin = this.as.isAuthed();
  }



  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    if (window.innerWidth < 500) {
      console.log('kittykittykitty');
    }


    // For admin view, the first time a link to an editable view has been clicked, it kicks an error and doesn't load the new page.
    // Detect clicks to navigate away from the page, and immediately routes the request correctly.
    // The original click will still kick the error out into the console and stop the new page from loading
    // But we forcefully navigate to the route anyways
    if (this.isAdmin) {
      const thisSaved = this;

      $('#homeBtnLink').on('click', function () {
        if (!thisSaved.linkClicked) {
          thisSaved.linkClicked = true;
          thisSaved.router.navigate(['/']);
        }
      });

      $('#aboutBtnLink').on('click', function () {
        if (!thisSaved.linkClicked) {
          thisSaved.linkClicked = true;
          thisSaved.router.navigate(['/about']);
        }
      });

      $('#chocoBtnLink').on('click', function () {
        if (!thisSaved.linkClicked) {
          thisSaved.linkClicked = true;
          thisSaved.router.navigate(['/chocolates']);
        }
      });

      $('#trufflesBtnLink').on('click', function () {
        if (!thisSaved.linkClicked) {
          thisSaved.linkClicked = true;
          thisSaved.router.navigate(['/truffles']);
        }
      });

      $('#barksBtnLink').on('click', function () {
        if (!thisSaved.linkClicked) {
          thisSaved.linkClicked = true;
          thisSaved.router.navigate(['/barks']);
        }
      });

      $('#creamsBtnLink').on('click', function () {
        if (!thisSaved.linkClicked) {
          thisSaved.linkClicked = true;
          thisSaved.router.navigate(['/creams']);
        }
      });

      $('#fudgeBtnLink').on('click', function () {
        if (!thisSaved.linkClicked) {
          thisSaved.linkClicked = true;
          thisSaved.router.navigate(['/fudge']);
        }
      });

      $('#seasonalBtnLink').on('click', function () {
        if (!thisSaved.linkClicked) {
          thisSaved.linkClicked = true;
          thisSaved.router.navigate(['/seasonal']);
        }
      });

      $('#otherchocBtnLink').on('click', function () {
        if (!thisSaved.linkClicked) {
          thisSaved.linkClicked = true;
          thisSaved.router.navigate(['/otherchoc']);
        }
      });

      $('#shopBtnLink').on('click', function () {
        if (!thisSaved.linkClicked) {
          thisSaved.linkClicked = true;
          thisSaved.router.navigate(['/shop']);
        }
      });

      $('#contactBtnLink').on('click', function () {
        if (!thisSaved.linkClicked) {
          thisSaved.linkClicked = true;
          thisSaved.router.navigate(['/contact']);
        }
      });

    } // End of if(this.isAdmin) for avoiding errors when clicking navbar links

  } // End of ngOnInit()



}
