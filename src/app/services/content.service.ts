import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { FlashMessagesService } from 'angular2-flash-messages';

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
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${pageName}/${whichElement}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // upload in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        upload.progress = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        this.fms.show('Upload In Progress: ' + upload.progress + '%', { cssClass: 'alert-warning', timeout: 2000 });
      },
      (error) => {
        // upload failed
        console.log('Error in content.service.ts in the pushUpload function:');
        console.log(error);
        this.fms.show('Error Updating Image', { cssClass: 'alert-danger', timeout: 2000 });
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        // write file details to db
        const thisSaved = this;
        this.afd.database.ref('/' + pageName + '/' + whichElement).update({
          description: upload.description,
          url: upload.url
        }).then(function() {
          console.log('Yey!');
          thisSaved.fms.show('Image Updated', { cssClass: 'alert-success', timeout: 3000 });
        }).catch(function(err) {
          console.log('Error updating new image URL inside content.service.ts:');
          console.log(err);
          thisSaved.fms.show('Error Updating Image', { cssClass: 'alert-danger', timeout: 2000 });
        });
        return undefined;
      }
    );
  }



}
