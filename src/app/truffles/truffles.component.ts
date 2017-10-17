import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { GridImage } from '../services/gridImage';

@Component({
  selector: 'app-truffles',
  templateUrl: './truffles.component.html',
  styleUrls: ['./truffles.component.css']
})
export class TrufflesComponent implements OnInit {
  isAdmin = false;
  trufflesParagraphUpdated = false;
  trufflesCurrentUpload: GridImage;
  trufflesImage1Src: string;
  trufflesImage2Src: string;
  trufflesImage3Src: string;
  trufflesImage4Src: string;
  trufflesImage5Src: string;
  trufflesImage6Src: string;
  trufflesImage7Src: string;
  trufflesImage8Src: string;
  trufflesImage9Src: string;
  trufflesImage10Src: string;
  trufflesImage11Src: string;
  trufflesImage12Src: string;
  trufflesImage13Src: string;
  trufflesImage14Src: string;
  trufflesImage15Src: string;
  trufflesImage16Src: string;
  trufflesImage17Src: string;
  trufflesImage18Src: string;
  trufflesImage19Src: string;
  trufflesImage20Src: string;
  trufflesImage21Src: string;
  trufflesImage22Src: string;
  trufflesImage23Src: string;
  trufflesImage24Src: string;
  trufflesImage1Title: string;
  trufflesImage2Title: string;
  trufflesImage3Title: string;
  trufflesImage4Title: string;
  trufflesImage5Title: string;
  trufflesImage6Title: string;
  trufflesImage7Title: string;
  trufflesImage8Title: string;
  trufflesImage9Title: string;
  trufflesImage10Title: string;
  trufflesImage11Title: string;
  trufflesImage12Title: string;
  trufflesImage13Title: string;
  trufflesImage14Title: string;
  trufflesImage15Title: string;
  trufflesImage16Title: string;
  trufflesImage17Title: string;
  trufflesImage18Title: string;
  trufflesImage19Title: string;
  trufflesImage20Title: string;
  trufflesImage21Title: string;
  trufflesImage22Title: string;
  trufflesImage23Title: string;
  trufflesImage24Title: string;
  trufflesImage1Description: string;
  trufflesImage2Description: string;
  trufflesImage3Description: string;
  trufflesImage4Description: string;
  trufflesImage5Description: string;
  trufflesImage6Description: string;
  trufflesImage7Description: string;
  trufflesImage8Description: string;
  trufflesImage9Description: string;
  trufflesImage10Description: string;
  trufflesImage11Description: string;
  trufflesImage12Description: string;
  trufflesImage13Description: string;
  trufflesImage14Description: string;
  trufflesImage15Description: string;
  trufflesImage16Description: string;
  trufflesImage17Description: string;
  trufflesImage18Description: string;
  trufflesImage19Description: string;
  trufflesImage20Description: string;
  trufflesImage21Description: string;
  trufflesImage22Description: string;
  trufflesImage23Description: string;
  trufflesImage24Description: string;
  trufflesImage1Link: string;
  trufflesImage2Link: string;
  trufflesImage3Link: string;
  trufflesImage4Link: string;
  trufflesImage5Link: string;
  trufflesImage6Link: string;
  trufflesImage7Link: string;
  trufflesImage8Link: string;
  trufflesImage9Link: string;
  trufflesImage10Link: string;
  trufflesImage11Link: string;
  trufflesImage12Link: string;
  trufflesImage13Link: string;
  trufflesImage14Link: string;
  trufflesImage15Link: string;
  trufflesImage16Link: string;
  trufflesImage17Link: string;
  trufflesImage18Link: string;
  trufflesImage19Link: string;
  trufflesImage20Link: string;
  trufflesImage21Link: string;
  trufflesImage22Link: string;
  trufflesImage23Link: string;
  trufflesImage24Link: string;
  trufflesSelectedFile1: FileList;
  trufflesSelectedFile2: FileList;
  trufflesSelectedFile3: FileList;
  trufflesSelectedFile4: FileList;
  trufflesSelectedFile5: FileList;
  trufflesSelectedFile6: FileList;
  trufflesSelectedFile7: FileList;
  trufflesSelectedFile8: FileList;
  trufflesSelectedFile9: FileList;
  trufflesSelectedFile10: FileList;
  trufflesSelectedFile11: FileList;
  trufflesSelectedFile12: FileList;
  trufflesSelectedFile13: FileList;
  trufflesSelectedFile14: FileList;
  trufflesSelectedFile15: FileList;
  trufflesSelectedFile16: FileList;
  trufflesSelectedFile17: FileList;
  trufflesSelectedFile18: FileList;
  trufflesSelectedFile19: FileList;
  trufflesSelectedFile20: FileList;
  trufflesSelectedFile21: FileList;
  trufflesSelectedFile22: FileList;
  trufflesSelectedFile23: FileList;
  trufflesSelectedFile24: FileList;
  trufflesUploadingImage1 = false;
  trufflesUploadingImage2 = false;
  trufflesUploadingImage3 = false;
  trufflesUploadingImage4 = false;
  trufflesUploadingImage5 = false;
  trufflesUploadingImage6 = false;
  trufflesUploadingImage7 = false;
  trufflesUploadingImage8 = false;
  trufflesUploadingImage9 = false;
  trufflesUploadingImage10 = false;
  trufflesUploadingImage11 = false;
  trufflesUploadingImage12 = false;
  trufflesUploadingImage13 = false;
  trufflesUploadingImage14 = false;
  trufflesUploadingImage15 = false;
  trufflesUploadingImage16 = false;
  trufflesUploadingImage17 = false;
  trufflesUploadingImage18 = false;
  trufflesUploadingImage19 = false;
  trufflesUploadingImage20 = false;
  trufflesUploadingImage21 = false;
  trufflesUploadingImage22 = false;
  trufflesUploadingImage23 = false;
  trufflesUploadingImage24 = false;



  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService, public cs: ContentService) {
    // Check to see if this is the logged in administrator
    this.isAdmin = this.as.isAuthed();
    // Pull updated content from Firebase
    this.getContent();
  }



  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Sets black border around selected view in navbar
    document.getElementById('aboutBtn').setAttribute('style', 'border: none;');
    document.getElementById('contactBtn').setAttribute('style', 'border: none;');
    document.getElementById('homeBtn').setAttribute('style', 'border: none;');
    document.getElementById('shopBtn').setAttribute('style', 'border: none;');
    document.getElementById('chocoBtn').setAttribute('style', 'outline: 4px solid black; outline-offset:-4px;');
  }



  // Pulls page content from Firebase and assigns it to content based on admin status
  getContent() {
    const thisSaved = this;
    this.cs.getPageContent('trufflesPage').then(function (pageContent) {
      if (thisSaved.isAdmin) {
        // If they're an admin, set the content of paragraph editors
        tinymce.get('trufflesParagraph').setContent(pageContent.trufflesParagraph);
      } else {
        // Otherwise, set the content of the regularly displayed fields
        $('#trufflesParagraph').html(pageContent.trufflesParagraph);
      }
      // The images gets displayed regardless of admin status
      thisSaved.trufflesImage1Src = pageContent.image1.url;
      thisSaved.trufflesImage2Src = pageContent.image2.url;
      thisSaved.trufflesImage3Src = pageContent.image3.url;
      thisSaved.trufflesImage4Src = pageContent.image4.url;
      thisSaved.trufflesImage5Src = pageContent.image5.url;
      thisSaved.trufflesImage6Src = pageContent.image6.url;
      thisSaved.trufflesImage7Src = pageContent.image7.url;
      thisSaved.trufflesImage8Src = pageContent.image8.url;
      thisSaved.trufflesImage9Src = pageContent.image9.url;
      thisSaved.trufflesImage10Src = pageContent.image10.url;
      thisSaved.trufflesImage11Src = pageContent.image11.url;
      thisSaved.trufflesImage12Src = pageContent.image12.url;
      thisSaved.trufflesImage13Src = pageContent.image13.url;
      thisSaved.trufflesImage14Src = pageContent.image14.url;
      thisSaved.trufflesImage15Src = pageContent.image15.url;
      thisSaved.trufflesImage16Src = pageContent.image16.url;
      thisSaved.trufflesImage17Src = pageContent.image17.url;
      thisSaved.trufflesImage18Src = pageContent.image18.url;
      thisSaved.trufflesImage19Src = pageContent.image19.url;
      thisSaved.trufflesImage20Src = pageContent.image20.url;
      thisSaved.trufflesImage21Src = pageContent.image21.url;
      thisSaved.trufflesImage22Src = pageContent.image22.url;
      thisSaved.trufflesImage23Src = pageContent.image23.url;
      thisSaved.trufflesImage24Src = pageContent.image24.url;
      thisSaved.trufflesImage1Title = pageContent.image1.title;
      thisSaved.trufflesImage2Title = pageContent.image2.title;
      thisSaved.trufflesImage3Title = pageContent.image3.title;
      thisSaved.trufflesImage4Title = pageContent.image4.title;
      thisSaved.trufflesImage5Title = pageContent.image5.title;
      thisSaved.trufflesImage6Title = pageContent.image6.title;
      thisSaved.trufflesImage7Title = pageContent.image7.title;
      thisSaved.trufflesImage8Title = pageContent.image8.title;
      thisSaved.trufflesImage9Title = pageContent.image9.title;
      thisSaved.trufflesImage10Title = pageContent.image10.title;
      thisSaved.trufflesImage11Title = pageContent.image11.title;
      thisSaved.trufflesImage12Title = pageContent.image12.title;
      thisSaved.trufflesImage13Title = pageContent.image13.title;
      thisSaved.trufflesImage14Title = pageContent.image14.title;
      thisSaved.trufflesImage15Title = pageContent.image15.title;
      thisSaved.trufflesImage16Title = pageContent.image16.title;
      thisSaved.trufflesImage17Title = pageContent.image17.title;
      thisSaved.trufflesImage18Title = pageContent.image18.title;
      thisSaved.trufflesImage19Title = pageContent.image19.title;
      thisSaved.trufflesImage20Title = pageContent.image20.title;
      thisSaved.trufflesImage21Title = pageContent.image21.title;
      thisSaved.trufflesImage22Title = pageContent.image22.title;
      thisSaved.trufflesImage23Title = pageContent.image23.title;
      thisSaved.trufflesImage24Title = pageContent.image24.title;
      thisSaved.trufflesImage1Description = pageContent.image1.description;
      thisSaved.trufflesImage2Description = pageContent.image2.description;
      thisSaved.trufflesImage3Description = pageContent.image3.description;
      thisSaved.trufflesImage4Description = pageContent.image4.description;
      thisSaved.trufflesImage5Description = pageContent.image5.description;
      thisSaved.trufflesImage6Description = pageContent.image6.description;
      thisSaved.trufflesImage7Description = pageContent.image7.description;
      thisSaved.trufflesImage8Description = pageContent.image8.description;
      thisSaved.trufflesImage9Description = pageContent.image9.description;
      thisSaved.trufflesImage10Description = pageContent.image10.description;
      thisSaved.trufflesImage11Description = pageContent.image11.description;
      thisSaved.trufflesImage12Description = pageContent.image12.description;
      thisSaved.trufflesImage13Description = pageContent.image13.description;
      thisSaved.trufflesImage14Description = pageContent.image14.description;
      thisSaved.trufflesImage15Description = pageContent.image15.description;
      thisSaved.trufflesImage16Description = pageContent.image16.description;
      thisSaved.trufflesImage17Description = pageContent.image17.description;
      thisSaved.trufflesImage18Description = pageContent.image18.description;
      thisSaved.trufflesImage19Description = pageContent.image19.description;
      thisSaved.trufflesImage20Description = pageContent.image20.description;
      thisSaved.trufflesImage21Description = pageContent.image21.description;
      thisSaved.trufflesImage22Description = pageContent.image22.description;
      thisSaved.trufflesImage23Description = pageContent.image23.description;
      thisSaved.trufflesImage24Description = pageContent.image24.description;
      thisSaved.trufflesImage1Link = pageContent.image1.link;
      thisSaved.trufflesImage2Link = pageContent.image2.link;
      thisSaved.trufflesImage3Link = pageContent.image3.link;
      thisSaved.trufflesImage4Link = pageContent.image4.link;
      thisSaved.trufflesImage5Link = pageContent.image5.link;
      thisSaved.trufflesImage6Link = pageContent.image6.link;
      thisSaved.trufflesImage7Link = pageContent.image7.link;
      thisSaved.trufflesImage8Link = pageContent.image8.link;
      thisSaved.trufflesImage9Link = pageContent.image9.link;
      thisSaved.trufflesImage10Link = pageContent.image10.link;
      thisSaved.trufflesImage11Link = pageContent.image11.link;
      thisSaved.trufflesImage12Link = pageContent.image12.link;
      thisSaved.trufflesImage13Link = pageContent.image13.link;
      thisSaved.trufflesImage14Link = pageContent.image14.link;
      thisSaved.trufflesImage15Link = pageContent.image15.link;
      thisSaved.trufflesImage16Link = pageContent.image16.link;
      thisSaved.trufflesImage17Link = pageContent.image17.link;
      thisSaved.trufflesImage18Link = pageContent.image18.link;
      thisSaved.trufflesImage19Link = pageContent.image19.link;
      thisSaved.trufflesImage20Link = pageContent.image20.link;
      thisSaved.trufflesImage21Link = pageContent.image21.link;
      thisSaved.trufflesImage22Link = pageContent.image22.link;
      thisSaved.trufflesImage23Link = pageContent.image23.link;
      thisSaved.trufflesImage24Link = pageContent.image24.link;
    });
  }



  // As an admin, saves the content of the editor for the truffles paragraph, and then shows a success message
  saveTrufflesParagraph() {
    this.trufflesParagraphUpdated = false;
    const thisSaved = this;
    this.cs.savePageContent('trufflesPage', 'trufflesParagraph', tinymce.get('trufflesParagraph').getContent()).then(function () {
      thisSaved.trufflesParagraphUpdated = true;
    });
  }



  // Detects when a new image has been inserted and fills the appropriate variable
  trufflesDetectImage1(event) {
    this.trufflesSelectedFile1 = event.target.files;
  }
  trufflesDetectImage2(event) {
    this.trufflesSelectedFile2 = event.target.files;
  }
  trufflesDetectImage3(event) {
    this.trufflesSelectedFile3 = event.target.files;
  }
  trufflesDetectImage4(event) {
    this.trufflesSelectedFile4 = event.target.files;
  }
  trufflesDetectImage5(event) {
    this.trufflesSelectedFile5 = event.target.files;
  }
  trufflesDetectImage6(event) {
    this.trufflesSelectedFile6 = event.target.files;
  }
  trufflesDetectImage7(event) {
    this.trufflesSelectedFile7 = event.target.files;
  }
  trufflesDetectImage8(event) {
    this.trufflesSelectedFile8 = event.target.files;
  }
  trufflesDetectImage9(event) {
    this.trufflesSelectedFile9 = event.target.files;
  }
  trufflesDetectImage10(event) {
    this.trufflesSelectedFile10 = event.target.files;
  }
  trufflesDetectImage11(event) {
    this.trufflesSelectedFile11 = event.target.files;
  }
  trufflesDetectImage12(event) {
    this.trufflesSelectedFile12 = event.target.files;
  }
  trufflesDetectImage13(event) {
    this.trufflesSelectedFile13 = event.target.files;
  }
  trufflesDetectImage14(event) {
    this.trufflesSelectedFile14 = event.target.files;
  }
  trufflesDetectImage15(event) {
    this.trufflesSelectedFile15 = event.target.files;
  }
  trufflesDetectImage16(event) {
    this.trufflesSelectedFile16 = event.target.files;
  }
  trufflesDetectImage17(event) {
    this.trufflesSelectedFile17 = event.target.files;
  }
  trufflesDetectImage18(event) {
    this.trufflesSelectedFile18 = event.target.files;
  }
  trufflesDetectImage19(event) {
    this.trufflesSelectedFile19 = event.target.files;
  }
  trufflesDetectImage20(event) {
    this.trufflesSelectedFile20 = event.target.files;
  }
  trufflesDetectImage21(event) {
    this.trufflesSelectedFile21 = event.target.files;
  }
  trufflesDetectImage22(event) {
    this.trufflesSelectedFile22 = event.target.files;
  }
  trufflesDetectImage23(event) {
    this.trufflesSelectedFile23 = event.target.files;
  }
  trufflesDetectImage24(event) {
    this.trufflesSelectedFile24 = event.target.files;
  }



  // Uploads a new image
  trufflesUploadImage1() {
    if (!this.trufflesImage1Title || !this.trufflesImage1Description || !this.trufflesImage1Link || !this.trufflesSelectedFile1) {
      return;
    }
    // Display the upload progress bar for image 1 and no others
    this.trufflesUploadingImage1 = true;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile1.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage1Title;
    this.trufflesCurrentUpload.description = this.trufflesImage1Description;
    this.trufflesCurrentUpload.link = this.trufflesImage1Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image1', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage1Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage2() {
    if (!this.trufflesImage2Title || !this.trufflesImage2Description || !this.trufflesImage2Link || !this.trufflesSelectedFile2) {
      return;
    }
    // Display the upload progress bar for image 2 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = true;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile2.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage2Title;
    this.trufflesCurrentUpload.description = this.trufflesImage2Description;
    this.trufflesCurrentUpload.link = this.trufflesImage2Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image2', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage2Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage3() {
    if (!this.trufflesImage3Title || !this.trufflesImage3Description || !this.trufflesImage3Link || !this.trufflesSelectedFile3) {
      return;
    }
    // Display the upload progress bar for image 3 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = true;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile3.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage3Title;
    this.trufflesCurrentUpload.description = this.trufflesImage3Description;
    this.trufflesCurrentUpload.link = this.trufflesImage3Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image3', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage3Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage4() {
    if (!this.trufflesImage4Title || !this.trufflesImage4Description || !this.trufflesImage4Link || !this.trufflesSelectedFile4) {
      return;
    }
    // Display the upload progress bar for image 4 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = true;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile4.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage4Title;
    this.trufflesCurrentUpload.description = this.trufflesImage4Description;
    this.trufflesCurrentUpload.link = this.trufflesImage4Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image4', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage4Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage5() {
    if (!this.trufflesImage5Title || !this.trufflesImage5Description || !this.trufflesImage5Link || !this.trufflesSelectedFile5) {
      return;
    }
    // Display the upload progress bar for image 5 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = true;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile5.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage5Title;
    this.trufflesCurrentUpload.description = this.trufflesImage5Description;
    this.trufflesCurrentUpload.link = this.trufflesImage5Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image5', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage5Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage6() {
    if (!this.trufflesImage6Title || !this.trufflesImage6Description || !this.trufflesImage6Link || !this.trufflesSelectedFile6) {
      return;
    }
    // Display the upload progress bar for image 6 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = true;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile6.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage6Title;
    this.trufflesCurrentUpload.description = this.trufflesImage6Description;
    this.trufflesCurrentUpload.link = this.trufflesImage6Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image6', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage6Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage7() {
    if (!this.trufflesImage7Title || !this.trufflesImage7Description || !this.trufflesImage7Link || !this.trufflesSelectedFile7) {
      return;
    }
    // Display the upload progress bar for image 7 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = true;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile7.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage7Title;
    this.trufflesCurrentUpload.description = this.trufflesImage7Description;
    this.trufflesCurrentUpload.link = this.trufflesImage7Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image7', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage7Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage8() {
    if (!this.trufflesImage8Title || !this.trufflesImage8Description || !this.trufflesImage8Link || !this.trufflesSelectedFile8) {
      return;
    }
    // Display the upload progress bar for image 8 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = true;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile8.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage8Title;
    this.trufflesCurrentUpload.description = this.trufflesImage8Description;
    this.trufflesCurrentUpload.link = this.trufflesImage8Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image8', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage8Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage9() {
    if (!this.trufflesImage9Title || !this.trufflesImage9Description || !this.trufflesImage9Link || !this.trufflesSelectedFile9) {
      return;
    }
    // Display the upload progress bar for image 9 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = true;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile9.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage9Title;
    this.trufflesCurrentUpload.description = this.trufflesImage9Description;
    this.trufflesCurrentUpload.link = this.trufflesImage9Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image9', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage9Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage10() {
    if (!this.trufflesImage10Title || !this.trufflesImage10Description || !this.trufflesImage10Link || !this.trufflesSelectedFile10) {
      return;
    }
    // Display the upload progress bar for image 10 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = true;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile10.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage10Title;
    this.trufflesCurrentUpload.description = this.trufflesImage10Description;
    this.trufflesCurrentUpload.link = this.trufflesImage10Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image10', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage10Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage11() {
    if (!this.trufflesImage11Title || !this.trufflesImage11Description || !this.trufflesImage11Link || !this.trufflesSelectedFile11) {
      return;
    }
    // Display the upload progress bar for image 11 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = true;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile11.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage11Title;
    this.trufflesCurrentUpload.description = this.trufflesImage11Description;
    this.trufflesCurrentUpload.link = this.trufflesImage11Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image11', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage11Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage12() {
    if (!this.trufflesImage12Title || !this.trufflesImage12Description || !this.trufflesImage12Link || !this.trufflesSelectedFile12) {
      return;
    }
    // Display the upload progress bar for image 12 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = true;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile12.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage12Title;
    this.trufflesCurrentUpload.description = this.trufflesImage12Description;
    this.trufflesCurrentUpload.link = this.trufflesImage12Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image12', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage12Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage13() {
    if (!this.trufflesImage13Title || !this.trufflesImage13Description || !this.trufflesImage13Link || !this.trufflesSelectedFile13) {
      return;
    }
    // Display the upload progress bar for image 13 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = true;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile13.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage13Title;
    this.trufflesCurrentUpload.description = this.trufflesImage13Description;
    this.trufflesCurrentUpload.link = this.trufflesImage13Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image13', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage13Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage14() {
    if (!this.trufflesImage14Title || !this.trufflesImage14Description || !this.trufflesImage14Link || !this.trufflesSelectedFile14) {
      return;
    }
    // Display the upload progress bar for image 14 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = true;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile14.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage14Title;
    this.trufflesCurrentUpload.description = this.trufflesImage14Description;
    this.trufflesCurrentUpload.link = this.trufflesImage14Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image14', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage14Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage15() {
    if (!this.trufflesImage15Title || !this.trufflesImage15Description || !this.trufflesImage15Link || !this.trufflesSelectedFile15) {
      return;
    }
    // Display the upload progress bar for image 15 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = true;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile15.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage15Title;
    this.trufflesCurrentUpload.description = this.trufflesImage15Description;
    this.trufflesCurrentUpload.link = this.trufflesImage15Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image15', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage15Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage16() {
    if (!this.trufflesImage16Title || !this.trufflesImage16Description || !this.trufflesImage16Link || !this.trufflesSelectedFile16) {
      return;
    }
    // Display the upload progress bar for image 16 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = true;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile16.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage16Title;
    this.trufflesCurrentUpload.description = this.trufflesImage16Description;
    this.trufflesCurrentUpload.link = this.trufflesImage16Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image16', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage16Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage17() {
    if (!this.trufflesImage17Title || !this.trufflesImage17Description || !this.trufflesImage17Link || !this.trufflesSelectedFile17) {
      return;
    }
    // Display the upload progress bar for image 17 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = true;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile17.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage17Title;
    this.trufflesCurrentUpload.description = this.trufflesImage17Description;
    this.trufflesCurrentUpload.link = this.trufflesImage17Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image17', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage17Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage18() {
    if (!this.trufflesImage18Title || !this.trufflesImage18Description || !this.trufflesImage18Link || !this.trufflesSelectedFile18) {
      return;
    }
    // Display the upload progress bar for image 18 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = true;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile18.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage18Title;
    this.trufflesCurrentUpload.description = this.trufflesImage18Description;
    this.trufflesCurrentUpload.link = this.trufflesImage18Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image18', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage18Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage19() {
    if (!this.trufflesImage19Title || !this.trufflesImage19Description || !this.trufflesImage19Link || !this.trufflesSelectedFile19) {
      return;
    }
    // Display the upload progress bar for image 19 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = true;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile19.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage19Title;
    this.trufflesCurrentUpload.description = this.trufflesImage19Description;
    this.trufflesCurrentUpload.link = this.trufflesImage19Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image19', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage19Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage20() {
    if (!this.trufflesImage20Title || !this.trufflesImage20Description || !this.trufflesImage20Link || !this.trufflesSelectedFile20) {
      return;
    }
    // Display the upload progress bar for image 20 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = true;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile20.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage20Title;
    this.trufflesCurrentUpload.description = this.trufflesImage20Description;
    this.trufflesCurrentUpload.link = this.trufflesImage20Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image20', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage20Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage21() {
    if (!this.trufflesImage21Title || !this.trufflesImage21Description || !this.trufflesImage21Link || !this.trufflesSelectedFile21) {
      return;
    }
    // Display the upload progress bar for image 21 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = true;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile21.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage21Title;
    this.trufflesCurrentUpload.description = this.trufflesImage21Description;
    this.trufflesCurrentUpload.link = this.trufflesImage21Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image21', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage21Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage22() {
    if (!this.trufflesImage22Title || !this.trufflesImage22Description || !this.trufflesImage22Link || !this.trufflesSelectedFile22) {
      return;
    }
    // Display the upload progress bar for image 22 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = true;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile22.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage22Title;
    this.trufflesCurrentUpload.description = this.trufflesImage22Description;
    this.trufflesCurrentUpload.link = this.trufflesImage22Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image22', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage22Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage23() {
    if (!this.trufflesImage23Title || !this.trufflesImage23Description || !this.trufflesImage23Link || !this.trufflesSelectedFile23) {
      return;
    }
    // Display the upload progress bar for image 23 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = true;
    this.trufflesUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile23.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage23Title;
    this.trufflesCurrentUpload.description = this.trufflesImage23Description;
    this.trufflesCurrentUpload.link = this.trufflesImage23Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image23', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage23Src = newURL.toString();
    });
  }



  // Uploads a new image
  trufflesUploadImage24() {
    if (!this.trufflesImage24Title || !this.trufflesImage24Description || !this.trufflesImage24Link || !this.trufflesSelectedFile24) {
      return;
    }
    // Display the upload progress bar for image 24 and no others
    this.trufflesUploadingImage1 = false;
    this.trufflesUploadingImage2 = false;
    this.trufflesUploadingImage3 = false;
    this.trufflesUploadingImage4 = false;
    this.trufflesUploadingImage5 = false;
    this.trufflesUploadingImage6 = false;
    this.trufflesUploadingImage7 = false;
    this.trufflesUploadingImage8 = false;
    this.trufflesUploadingImage9 = false;
    this.trufflesUploadingImage10 = false;
    this.trufflesUploadingImage11 = false;
    this.trufflesUploadingImage12 = false;
    this.trufflesUploadingImage13 = false;
    this.trufflesUploadingImage14 = false;
    this.trufflesUploadingImage15 = false;
    this.trufflesUploadingImage16 = false;
    this.trufflesUploadingImage17 = false;
    this.trufflesUploadingImage18 = false;
    this.trufflesUploadingImage19 = false;
    this.trufflesUploadingImage20 = false;
    this.trufflesUploadingImage21 = false;
    this.trufflesUploadingImage22 = false;
    this.trufflesUploadingImage23 = false;
    this.trufflesUploadingImage24 = true;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.trufflesCurrentUpload = new GridImage(this.trufflesSelectedFile24.item(0));
    this.trufflesCurrentUpload.title = this.trufflesImage24Title;
    this.trufflesCurrentUpload.description = this.trufflesImage24Description;
    this.trufflesCurrentUpload.link = this.trufflesImage24Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('trufflesPage', 'image24', this.trufflesCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.trufflesImage24Src = newURL.toString();
    });
  }



}
