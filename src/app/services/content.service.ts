import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as firebase from 'firebase';

import { Image } from './image';


@Injectable()
export class ContentService {
  uploads: FirebaseListObservable<Image[]>;



  // The contructor function runs automatically on service load, each and every time it's called
  constructor(public afd: AngularFireDatabase, public fms: FlashMessagesService) {

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



  // Uploads file to Firebase storage, and updates the database with the file's URL
  pushUpload(pageName, whichElement, upload: Image) {
    // Returns a promise, so we can use .then() when pushUpload is called
    return new Promise((resolve, reject) => {
      // Upload the file
      const uploadTask = firebase.storage().ref().child(`${pageName}/${whichElement}`).put(upload.file);
      // Based on how the upload is going, perform the following actions:
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // Upload in progress, show a flash message with the % complete
          const snap = snapshot as firebase.storage.UploadTaskSnapshot;
          upload.progress = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        },
        (error) => {
          // Upload failed, output error to the console and show a flash error message
          console.log('Error in content.service.ts in the pushUpload function:');
          console.log(error);
          this.fms.show('Error Updating Image', { cssClass: 'alert-danger', timeout: 3000 });
        },
        () => {
          // Upload succeeded, update the url in the database
          // Pull relevant information out of the returned info from storage
          upload.url = uploadTask.snapshot.downloadURL;
          // Make database call to update info
          const thisSaved = this;
          this.afd.database.ref('/' + pageName + '/' + whichElement).update({
            description: upload.description,
            url: upload.url,
            link: upload.link
          }).then(function () {
            // Successfully updated database, return the new url
            resolve(upload.url);
          }).catch(function (err) {
            // Error updating url in database, output error to console and show flash error message.
            console.log('Error updating new image URL inside content.service.ts:');
            console.log(err);
            thisSaved.fms.show('Error Updating Image', { cssClass: 'alert-danger', timeout: 3000 });
          });
        }
      ); // End of uploadTask.on()
    }); // End of returned promise
  } // End of pushUpload()



}
