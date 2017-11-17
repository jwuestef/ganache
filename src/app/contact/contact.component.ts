import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { Image } from '../services/image';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isAdmin = false;
  contact1ParagraphUpdated = false;
  contact2ParagraphUpdated = false;
  contact3ParagraphUpdated = false;
  contactIframeSrc;
  contactIframeSrcDisplayed;
  contactIframeUpdated = false;
  contactName;
  contactPhone;
  contactEmail;
  contactComments;



  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService, public cs: ContentService, public sanitizer: DomSanitizer, private http: Http) {
    // Check to see if this is the logged in administrator
    this.isAdmin = this.as.isAuthed();
    // Pull updated content from Firebase
    this.getContent();
  }



  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Sets black border around selected view in navbar
    document.getElementById('chocoBtn').setAttribute('style', 'border: none;');
    document.getElementById('aboutBtn').setAttribute('style', 'border: none;');
    document.getElementById('homeBtn').setAttribute('style', 'border: none;');
    document.getElementById('shopBtn').setAttribute('style', 'border: none;');
    document.getElementById('contactBtn').setAttribute('style', 'outline: 4px solid black; outline-offset:-4px;');
  }



  // Pulls page content from Firebase and assigns it to content based on admin status
  getContent() {
    const thisSaved = this;
    this.cs.getPageContent('contactPage').then(function (pageContent) {
      if (thisSaved.isAdmin) {
        // If they're an admin, set the content of paragraph editors
        tinymce.get('contact1Paragraph').setContent(pageContent.contact1Paragraph);
        tinymce.get('contact2Paragraph').setContent(pageContent.contact2Paragraph);
        tinymce.get('contact3Paragraph').setContent(pageContent.contact3Paragraph);
      } else {
        // Otherwise, set the content of the regularly displayed fields
        $('#contact1Paragraph').html(pageContent.contact1Paragraph);
        $('#contact2Paragraph').html(pageContent.contact2Paragraph);
        $('#contact3Paragraph').html(pageContent.contact3Paragraph);
      }
      // The map (iframe) gets displayed regardless of admin status
      thisSaved.contactIframeSrcDisplayed = pageContent.iframeSrc;
      thisSaved.contactIframeSrc = thisSaved.sanitizer.bypassSecurityTrustResourceUrl(pageContent.iframeSrc);
    });
  }



  // As an admin, saves the content of the editor for the contact1 paragraph (Visit and Consultations), and then shows a success message
  saveContact1Paragraph() {
    this.contact1ParagraphUpdated = false;
    const thisSaved = this;
    this.cs.savePageContent('contactPage', 'contact1Paragraph', tinymce.get('contact1Paragraph').getContent()).then(function () {
      thisSaved.contact1ParagraphUpdated = true;
    });
  }



  // As an admin, saves the content of the editor for the contact2 paragraph (Form), and then shows a success message
  saveContact2Paragraph() {
    this.contact2ParagraphUpdated = false;
    const thisSaved = this;
    this.cs.savePageContent('contactPage', 'contact2Paragraph', tinymce.get('contact2Paragraph').getContent()).then(function () {
      thisSaved.contact2ParagraphUpdated = true;
    });
  }



  // As an admin, saves the content of the editor for the contact3 paragraph (Hours), and then shows a success message
  saveContact3Paragraph() {
    this.contact3ParagraphUpdated = false;
    const thisSaved = this;
    this.cs.savePageContent('contactPage', 'contact3Paragraph', tinymce.get('contact3Paragraph').getContent()).then(function () {
      thisSaved.contact3ParagraphUpdated = true;
    });
  }



  // As an admin, saves the content of the input field for the source of the Map (iframe), and then shows a success message
  saveContactIframe() {
    this.contactIframeUpdated = false;
    const thisSaved = this;
    this.cs.savePageContent('contactPage', 'iframeSrc', thisSaved.contactIframeSrcDisplayed).then(function () {
      thisSaved.contactIframeUpdated = true;
    });
  }



  // Sends a POST request to Formspree with content of contact form.
  // Formspree is not compatible with Angular by default, so we have to use the http client
  postEmail() {

    // Set the header options for the request
    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const options = new RequestOptions({ headers: headers });

    // Url that we are sending the POST request to
    const url = 'https://formspree.io/ganachezionsville@gmail.com';

    // WRONG
    // const data = {
    //   name: name,
    //   email: email,
    //   message: message
    // }

    // RIGHT
    const data = `name=${this.contactName}&phone=${this.contactPhone}&email=${this.contactEmail}&comments=${this.contactComments}`;

    // Actually send the post request, and listen for a response.
    this.http.post(url, data, options)
      .subscribe(
        value => { console.log('Response is: '); console.log(value); },
        error => { alert('Error in submission - please contact us at ganachezionsville@gmail.com.'); console.log(error); },
        () => { alert('Submission successful'); }
      );

  }





}
