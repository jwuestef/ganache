import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';


@Injectable()
export class ContentService {



  // The contructor function runs automatically on service load, each and every time it's called
  constructor(public afd: AngularFireDatabase) {

  }



  // Retrieves and returns content for a particular page from Firebase
  getPageContent(pageName) {
    return this.afd.database.ref('/' + pageName).once('value').then(function (pageContent) {
      return pageContent.val();
    });
  }



  // Saves a particular piece of page content
  savePageContent(pageName, whichElement, newContent) {
    return this.afd.database.ref('/' + pageName).update({ [whichElement]: newContent });
  }






}
