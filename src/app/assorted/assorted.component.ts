import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ContentService } from '../services/content.service';
import { GridImage } from '../services/gridImage';


@Component({
  selector: 'app-assorted',
  templateUrl: './assorted.component.html',
  styleUrls: ['./assorted.component.css']
})
export class AssortedComponent implements OnInit {
  isAdmin = false;
  assortedParagraphUpdated = false;
  assortedCurrentUpload: GridImage;
  assortedImage1Src: string;
  assortedImage2Src: string;
  assortedImage3Src: string;
  assortedImage4Src: string;
  assortedImage5Src: string;
  assortedImage6Src: string;
  assortedImage7Src: string;
  assortedImage8Src: string;
  assortedImage9Src: string;
  assortedImage10Src: string;
  assortedImage11Src: string;
  assortedImage12Src: string;
  assortedImage13Src: string;
  assortedImage14Src: string;
  assortedImage15Src: string;
  assortedImage16Src: string;
  assortedImage17Src: string;
  assortedImage18Src: string;
  assortedImage19Src: string;
  assortedImage20Src: string;
  assortedImage21Src: string;
  assortedImage22Src: string;
  assortedImage23Src: string;
  assortedImage24Src: string;
  assortedImage1Title: string;
  assortedImage2Title: string;
  assortedImage3Title: string;
  assortedImage4Title: string;
  assortedImage5Title: string;
  assortedImage6Title: string;
  assortedImage7Title: string;
  assortedImage8Title: string;
  assortedImage9Title: string;
  assortedImage10Title: string;
  assortedImage11Title: string;
  assortedImage12Title: string;
  assortedImage13Title: string;
  assortedImage14Title: string;
  assortedImage15Title: string;
  assortedImage16Title: string;
  assortedImage17Title: string;
  assortedImage18Title: string;
  assortedImage19Title: string;
  assortedImage20Title: string;
  assortedImage21Title: string;
  assortedImage22Title: string;
  assortedImage23Title: string;
  assortedImage24Title: string;
  assortedImage1TitleItalic = false;
  assortedImage2TitleItalic = false;
  assortedImage3TitleItalic = false;
  assortedImage4TitleItalic = false;
  assortedImage5TitleItalic = false;
  assortedImage6TitleItalic = false;
  assortedImage7TitleItalic = false;
  assortedImage8TitleItalic = false;
  assortedImage9TitleItalic = false;
  assortedImage10TitleItalic = false;
  assortedImage11TitleItalic = false;
  assortedImage12TitleItalic = false;
  assortedImage13TitleItalic = false;
  assortedImage14TitleItalic = false;
  assortedImage15TitleItalic = false;
  assortedImage16TitleItalic = false;
  assortedImage17TitleItalic = false;
  assortedImage18TitleItalic = false;
  assortedImage19TitleItalic = false;
  assortedImage20TitleItalic = false;
  assortedImage21TitleItalic = false;
  assortedImage22TitleItalic = false;
  assortedImage23TitleItalic = false;
  assortedImage24TitleItalic = false;
  assortedImage1Description: string;
  assortedImage2Description: string;
  assortedImage3Description: string;
  assortedImage4Description: string;
  assortedImage5Description: string;
  assortedImage6Description: string;
  assortedImage7Description: string;
  assortedImage8Description: string;
  assortedImage9Description: string;
  assortedImage10Description: string;
  assortedImage11Description: string;
  assortedImage12Description: string;
  assortedImage13Description: string;
  assortedImage14Description: string;
  assortedImage15Description: string;
  assortedImage16Description: string;
  assortedImage17Description: string;
  assortedImage18Description: string;
  assortedImage19Description: string;
  assortedImage20Description: string;
  assortedImage21Description: string;
  assortedImage22Description: string;
  assortedImage23Description: string;
  assortedImage24Description: string;
  assortedImage1Link: string;
  assortedImage2Link: string;
  assortedImage3Link: string;
  assortedImage4Link: string;
  assortedImage5Link: string;
  assortedImage6Link: string;
  assortedImage7Link: string;
  assortedImage8Link: string;
  assortedImage9Link: string;
  assortedImage10Link: string;
  assortedImage11Link: string;
  assortedImage12Link: string;
  assortedImage13Link: string;
  assortedImage14Link: string;
  assortedImage15Link: string;
  assortedImage16Link: string;
  assortedImage17Link: string;
  assortedImage18Link: string;
  assortedImage19Link: string;
  assortedImage20Link: string;
  assortedImage21Link: string;
  assortedImage22Link: string;
  assortedImage23Link: string;
  assortedImage24Link: string;
  assortedSelectedFile1: FileList;
  assortedSelectedFile2: FileList;
  assortedSelectedFile3: FileList;
  assortedSelectedFile4: FileList;
  assortedSelectedFile5: FileList;
  assortedSelectedFile6: FileList;
  assortedSelectedFile7: FileList;
  assortedSelectedFile8: FileList;
  assortedSelectedFile9: FileList;
  assortedSelectedFile10: FileList;
  assortedSelectedFile11: FileList;
  assortedSelectedFile12: FileList;
  assortedSelectedFile13: FileList;
  assortedSelectedFile14: FileList;
  assortedSelectedFile15: FileList;
  assortedSelectedFile16: FileList;
  assortedSelectedFile17: FileList;
  assortedSelectedFile18: FileList;
  assortedSelectedFile19: FileList;
  assortedSelectedFile20: FileList;
  assortedSelectedFile21: FileList;
  assortedSelectedFile22: FileList;
  assortedSelectedFile23: FileList;
  assortedSelectedFile24: FileList;
  assortedUploadingImage1 = false;
  assortedUploadingImage2 = false;
  assortedUploadingImage3 = false;
  assortedUploadingImage4 = false;
  assortedUploadingImage5 = false;
  assortedUploadingImage6 = false;
  assortedUploadingImage7 = false;
  assortedUploadingImage8 = false;
  assortedUploadingImage9 = false;
  assortedUploadingImage10 = false;
  assortedUploadingImage11 = false;
  assortedUploadingImage12 = false;
  assortedUploadingImage13 = false;
  assortedUploadingImage14 = false;
  assortedUploadingImage15 = false;
  assortedUploadingImage16 = false;
  assortedUploadingImage17 = false;
  assortedUploadingImage18 = false;
  assortedUploadingImage19 = false;
  assortedUploadingImage20 = false;
  assortedUploadingImage21 = false;
  assortedUploadingImage22 = false;
  assortedUploadingImage23 = false;
  assortedUploadingImage24 = false;



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
    this.cs.getPageContent('assortedPage').then(function (pageContent) {
      if (thisSaved.isAdmin) {
        // If they're an admin, set the content of paragraph editors
        tinymce.get('assortedParagraph').setContent(pageContent.assortedParagraph);
      } else {
        // Otherwise, set the content of the regularly displayed fields
        $('#assortedParagraph').html(pageContent.assortedParagraph);
      }
      // The images gets displayed regardless of admin status
      thisSaved.assortedImage1Src = pageContent.image1.url;
      thisSaved.assortedImage2Src = pageContent.image2.url;
      thisSaved.assortedImage3Src = pageContent.image3.url;
      thisSaved.assortedImage4Src = pageContent.image4.url;
      thisSaved.assortedImage5Src = pageContent.image5.url;
      thisSaved.assortedImage6Src = pageContent.image6.url;
      thisSaved.assortedImage7Src = pageContent.image7.url;
      thisSaved.assortedImage8Src = pageContent.image8.url;
      thisSaved.assortedImage9Src = pageContent.image9.url;
      thisSaved.assortedImage10Src = pageContent.image10.url;
      thisSaved.assortedImage11Src = pageContent.image11.url;
      thisSaved.assortedImage12Src = pageContent.image12.url;
      thisSaved.assortedImage13Src = pageContent.image13.url;
      thisSaved.assortedImage14Src = pageContent.image14.url;
      thisSaved.assortedImage15Src = pageContent.image15.url;
      thisSaved.assortedImage16Src = pageContent.image16.url;
      thisSaved.assortedImage17Src = pageContent.image17.url;
      thisSaved.assortedImage18Src = pageContent.image18.url;
      thisSaved.assortedImage19Src = pageContent.image19.url;
      thisSaved.assortedImage20Src = pageContent.image20.url;
      thisSaved.assortedImage21Src = pageContent.image21.url;
      thisSaved.assortedImage22Src = pageContent.image22.url;
      thisSaved.assortedImage23Src = pageContent.image23.url;
      thisSaved.assortedImage24Src = pageContent.image24.url;
      thisSaved.assortedImage1Title = pageContent.image1.title;
      thisSaved.assortedImage2Title = pageContent.image2.title;
      thisSaved.assortedImage3Title = pageContent.image3.title;
      thisSaved.assortedImage4Title = pageContent.image4.title;
      thisSaved.assortedImage5Title = pageContent.image5.title;
      thisSaved.assortedImage6Title = pageContent.image6.title;
      thisSaved.assortedImage7Title = pageContent.image7.title;
      thisSaved.assortedImage8Title = pageContent.image8.title;
      thisSaved.assortedImage9Title = pageContent.image9.title;
      thisSaved.assortedImage10Title = pageContent.image10.title;
      thisSaved.assortedImage11Title = pageContent.image11.title;
      thisSaved.assortedImage12Title = pageContent.image12.title;
      thisSaved.assortedImage13Title = pageContent.image13.title;
      thisSaved.assortedImage14Title = pageContent.image14.title;
      thisSaved.assortedImage15Title = pageContent.image15.title;
      thisSaved.assortedImage16Title = pageContent.image16.title;
      thisSaved.assortedImage17Title = pageContent.image17.title;
      thisSaved.assortedImage18Title = pageContent.image18.title;
      thisSaved.assortedImage19Title = pageContent.image19.title;
      thisSaved.assortedImage20Title = pageContent.image20.title;
      thisSaved.assortedImage21Title = pageContent.image21.title;
      thisSaved.assortedImage22Title = pageContent.image22.title;
      thisSaved.assortedImage23Title = pageContent.image23.title;
      thisSaved.assortedImage24Title = pageContent.image24.title;
      thisSaved.assortedImage1Description = pageContent.image1.description;
      thisSaved.assortedImage2Description = pageContent.image2.description;
      thisSaved.assortedImage3Description = pageContent.image3.description;
      thisSaved.assortedImage4Description = pageContent.image4.description;
      thisSaved.assortedImage5Description = pageContent.image5.description;
      thisSaved.assortedImage6Description = pageContent.image6.description;
      thisSaved.assortedImage7Description = pageContent.image7.description;
      thisSaved.assortedImage8Description = pageContent.image8.description;
      thisSaved.assortedImage9Description = pageContent.image9.description;
      thisSaved.assortedImage10Description = pageContent.image10.description;
      thisSaved.assortedImage11Description = pageContent.image11.description;
      thisSaved.assortedImage12Description = pageContent.image12.description;
      thisSaved.assortedImage13Description = pageContent.image13.description;
      thisSaved.assortedImage14Description = pageContent.image14.description;
      thisSaved.assortedImage15Description = pageContent.image15.description;
      thisSaved.assortedImage16Description = pageContent.image16.description;
      thisSaved.assortedImage17Description = pageContent.image17.description;
      thisSaved.assortedImage18Description = pageContent.image18.description;
      thisSaved.assortedImage19Description = pageContent.image19.description;
      thisSaved.assortedImage20Description = pageContent.image20.description;
      thisSaved.assortedImage21Description = pageContent.image21.description;
      thisSaved.assortedImage22Description = pageContent.image22.description;
      thisSaved.assortedImage23Description = pageContent.image23.description;
      thisSaved.assortedImage24Description = pageContent.image24.description;
      thisSaved.assortedImage1Link = pageContent.image1.link;
      thisSaved.assortedImage2Link = pageContent.image2.link;
      thisSaved.assortedImage3Link = pageContent.image3.link;
      thisSaved.assortedImage4Link = pageContent.image4.link;
      thisSaved.assortedImage5Link = pageContent.image5.link;
      thisSaved.assortedImage6Link = pageContent.image6.link;
      thisSaved.assortedImage7Link = pageContent.image7.link;
      thisSaved.assortedImage8Link = pageContent.image8.link;
      thisSaved.assortedImage9Link = pageContent.image9.link;
      thisSaved.assortedImage10Link = pageContent.image10.link;
      thisSaved.assortedImage11Link = pageContent.image11.link;
      thisSaved.assortedImage12Link = pageContent.image12.link;
      thisSaved.assortedImage13Link = pageContent.image13.link;
      thisSaved.assortedImage14Link = pageContent.image14.link;
      thisSaved.assortedImage15Link = pageContent.image15.link;
      thisSaved.assortedImage16Link = pageContent.image16.link;
      thisSaved.assortedImage17Link = pageContent.image17.link;
      thisSaved.assortedImage18Link = pageContent.image18.link;
      thisSaved.assortedImage19Link = pageContent.image19.link;
      thisSaved.assortedImage20Link = pageContent.image20.link;
      thisSaved.assortedImage21Link = pageContent.image21.link;
      thisSaved.assortedImage22Link = pageContent.image22.link;
      thisSaved.assortedImage23Link = pageContent.image23.link;
      thisSaved.assortedImage24Link = pageContent.image24.link;

      // After image titles are populated, check to see if each title contains a + sign
      // If so, then the title needs to be italicized, and the + sign removed
      if (!thisSaved.isAdmin) {
        if (thisSaved.assortedImage1Title.indexOf('+') > -1) {
          thisSaved.assortedImage1TitleItalic = true;
          thisSaved.assortedImage1Title = thisSaved.assortedImage1Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage2Title.indexOf('+') > -1) {
          thisSaved.assortedImage2TitleItalic = true;
          thisSaved.assortedImage2Title = thisSaved.assortedImage2Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage3Title.indexOf('+') > -1) {
          thisSaved.assortedImage3TitleItalic = true;
          thisSaved.assortedImage3Title = thisSaved.assortedImage3Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage4Title.indexOf('+') > -1) {
          thisSaved.assortedImage4TitleItalic = true;
          thisSaved.assortedImage4Title = thisSaved.assortedImage4Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage5Title.indexOf('+') > -1) {
          thisSaved.assortedImage5TitleItalic = true;
          thisSaved.assortedImage5Title = thisSaved.assortedImage5Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage6Title.indexOf('+') > -1) {
          thisSaved.assortedImage6TitleItalic = true;
          thisSaved.assortedImage6Title = thisSaved.assortedImage6Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage7Title.indexOf('+') > -1) {
          thisSaved.assortedImage7TitleItalic = true;
          thisSaved.assortedImage7Title = thisSaved.assortedImage7Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage8Title.indexOf('+') > -1) {
          thisSaved.assortedImage8TitleItalic = true;
          thisSaved.assortedImage8Title = thisSaved.assortedImage8Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage9Title.indexOf('+') > -1) {
          thisSaved.assortedImage9TitleItalic = true;
          thisSaved.assortedImage9Title = thisSaved.assortedImage9Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage10Title.indexOf('+') > -1) {
          thisSaved.assortedImage10TitleItalic = true;
          thisSaved.assortedImage10Title = thisSaved.assortedImage10Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage11Title.indexOf('+') > -1) {
          thisSaved.assortedImage11TitleItalic = true;
          thisSaved.assortedImage11Title = thisSaved.assortedImage11Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage12Title.indexOf('+') > -1) {
          thisSaved.assortedImage12TitleItalic = true;
          thisSaved.assortedImage12Title = thisSaved.assortedImage12Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage13Title.indexOf('+') > -1) {
          thisSaved.assortedImage13TitleItalic = true;
          thisSaved.assortedImage13Title = thisSaved.assortedImage13Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage14Title.indexOf('+') > -1) {
          thisSaved.assortedImage14TitleItalic = true;
          thisSaved.assortedImage14Title = thisSaved.assortedImage14Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage15Title.indexOf('+') > -1) {
          thisSaved.assortedImage15TitleItalic = true;
          thisSaved.assortedImage15Title = thisSaved.assortedImage15Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage16Title.indexOf('+') > -1) {
          thisSaved.assortedImage16TitleItalic = true;
          thisSaved.assortedImage16Title = thisSaved.assortedImage16Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage17Title.indexOf('+') > -1) {
          thisSaved.assortedImage17TitleItalic = true;
          thisSaved.assortedImage17Title = thisSaved.assortedImage17Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage18Title.indexOf('+') > -1) {
          thisSaved.assortedImage18TitleItalic = true;
          thisSaved.assortedImage18Title = thisSaved.assortedImage18Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage19Title.indexOf('+') > -1) {
          thisSaved.assortedImage19TitleItalic = true;
          thisSaved.assortedImage19Title = thisSaved.assortedImage19Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage20Title.indexOf('+') > -1) {
          thisSaved.assortedImage20TitleItalic = true;
          thisSaved.assortedImage20Title = thisSaved.assortedImage20Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage21Title.indexOf('+') > -1) {
          thisSaved.assortedImage21TitleItalic = true;
          thisSaved.assortedImage21Title = thisSaved.assortedImage21Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage22Title.indexOf('+') > -1) {
          thisSaved.assortedImage22TitleItalic = true;
          thisSaved.assortedImage22Title = thisSaved.assortedImage22Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage23Title.indexOf('+') > -1) {
          thisSaved.assortedImage23TitleItalic = true;
          thisSaved.assortedImage23Title = thisSaved.assortedImage23Title.replace(/\+/g, '');
        }
        if (thisSaved.assortedImage24Title.indexOf('+') > -1) {
          thisSaved.assortedImage24TitleItalic = true;
          thisSaved.assortedImage24Title = thisSaved.assortedImage24Title.replace(/\+/g, '');
        }
      }
      // End of if (!isAdmin)

    });
  }



  // As an admin, saves the content of the editor for the assorted paragraph, and then shows a success message
  saveAssortedParagraph() {
    this.assortedParagraphUpdated = false;
    const thisSaved = this;
    this.cs.savePageContent('assortedPage', 'assortedParagraph', tinymce.get('assortedParagraph').getContent()).then(function () {
      thisSaved.assortedParagraphUpdated = true;
    });
  }



  // Detects when a new image has been inserted and fills the appropriate variable
  assortedDetectImage1(event) {
    this.assortedSelectedFile1 = event.target.files;
  }
  assortedDetectImage2(event) {
    this.assortedSelectedFile2 = event.target.files;
  }
  assortedDetectImage3(event) {
    this.assortedSelectedFile3 = event.target.files;
  }
  assortedDetectImage4(event) {
    this.assortedSelectedFile4 = event.target.files;
  }
  assortedDetectImage5(event) {
    this.assortedSelectedFile5 = event.target.files;
  }
  assortedDetectImage6(event) {
    this.assortedSelectedFile6 = event.target.files;
  }
  assortedDetectImage7(event) {
    this.assortedSelectedFile7 = event.target.files;
  }
  assortedDetectImage8(event) {
    this.assortedSelectedFile8 = event.target.files;
  }
  assortedDetectImage9(event) {
    this.assortedSelectedFile9 = event.target.files;
  }
  assortedDetectImage10(event) {
    this.assortedSelectedFile10 = event.target.files;
  }
  assortedDetectImage11(event) {
    this.assortedSelectedFile11 = event.target.files;
  }
  assortedDetectImage12(event) {
    this.assortedSelectedFile12 = event.target.files;
  }
  assortedDetectImage13(event) {
    this.assortedSelectedFile13 = event.target.files;
  }
  assortedDetectImage14(event) {
    this.assortedSelectedFile14 = event.target.files;
  }
  assortedDetectImage15(event) {
    this.assortedSelectedFile15 = event.target.files;
  }
  assortedDetectImage16(event) {
    this.assortedSelectedFile16 = event.target.files;
  }
  assortedDetectImage17(event) {
    this.assortedSelectedFile17 = event.target.files;
  }
  assortedDetectImage18(event) {
    this.assortedSelectedFile18 = event.target.files;
  }
  assortedDetectImage19(event) {
    this.assortedSelectedFile19 = event.target.files;
  }
  assortedDetectImage20(event) {
    this.assortedSelectedFile20 = event.target.files;
  }
  assortedDetectImage21(event) {
    this.assortedSelectedFile21 = event.target.files;
  }
  assortedDetectImage22(event) {
    this.assortedSelectedFile22 = event.target.files;
  }
  assortedDetectImage23(event) {
    this.assortedSelectedFile23 = event.target.files;
  }
  assortedDetectImage24(event) {
    this.assortedSelectedFile24 = event.target.files;
  }



  // Uploads a new image
  assortedUploadImage1() {
    if (!this.assortedImage1Title || !this.assortedImage1Description || !this.assortedImage1Link || !this.assortedSelectedFile1) {
      return;
    }
    // Display the upload progress bar for image 1 and no others
    this.assortedUploadingImage1 = true;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile1.item(0));
    this.assortedCurrentUpload.title = this.assortedImage1Title;
    this.assortedCurrentUpload.description = this.assortedImage1Description;
    this.assortedCurrentUpload.link = this.assortedImage1Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image1', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage1Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage2() {
    if (!this.assortedImage2Title || !this.assortedImage2Description || !this.assortedImage2Link || !this.assortedSelectedFile2) {
      return;
    }
    // Display the upload progress bar for image 2 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = true;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile2.item(0));
    this.assortedCurrentUpload.title = this.assortedImage2Title;
    this.assortedCurrentUpload.description = this.assortedImage2Description;
    this.assortedCurrentUpload.link = this.assortedImage2Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image2', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage2Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage3() {
    if (!this.assortedImage3Title || !this.assortedImage3Description || !this.assortedImage3Link || !this.assortedSelectedFile3) {
      return;
    }
    // Display the upload progress bar for image 3 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = true;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile3.item(0));
    this.assortedCurrentUpload.title = this.assortedImage3Title;
    this.assortedCurrentUpload.description = this.assortedImage3Description;
    this.assortedCurrentUpload.link = this.assortedImage3Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image3', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage3Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage4() {
    if (!this.assortedImage4Title || !this.assortedImage4Description || !this.assortedImage4Link || !this.assortedSelectedFile4) {
      return;
    }
    // Display the upload progress bar for image 4 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = true;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile4.item(0));
    this.assortedCurrentUpload.title = this.assortedImage4Title;
    this.assortedCurrentUpload.description = this.assortedImage4Description;
    this.assortedCurrentUpload.link = this.assortedImage4Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image4', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage4Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage5() {
    if (!this.assortedImage5Title || !this.assortedImage5Description || !this.assortedImage5Link || !this.assortedSelectedFile5) {
      return;
    }
    // Display the upload progress bar for image 5 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = true;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile5.item(0));
    this.assortedCurrentUpload.title = this.assortedImage5Title;
    this.assortedCurrentUpload.description = this.assortedImage5Description;
    this.assortedCurrentUpload.link = this.assortedImage5Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image5', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage5Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage6() {
    if (!this.assortedImage6Title || !this.assortedImage6Description || !this.assortedImage6Link || !this.assortedSelectedFile6) {
      return;
    }
    // Display the upload progress bar for image 6 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = true;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile6.item(0));
    this.assortedCurrentUpload.title = this.assortedImage6Title;
    this.assortedCurrentUpload.description = this.assortedImage6Description;
    this.assortedCurrentUpload.link = this.assortedImage6Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image6', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage6Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage7() {
    if (!this.assortedImage7Title || !this.assortedImage7Description || !this.assortedImage7Link || !this.assortedSelectedFile7) {
      return;
    }
    // Display the upload progress bar for image 7 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = true;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile7.item(0));
    this.assortedCurrentUpload.title = this.assortedImage7Title;
    this.assortedCurrentUpload.description = this.assortedImage7Description;
    this.assortedCurrentUpload.link = this.assortedImage7Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image7', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage7Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage8() {
    if (!this.assortedImage8Title || !this.assortedImage8Description || !this.assortedImage8Link || !this.assortedSelectedFile8) {
      return;
    }
    // Display the upload progress bar for image 8 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = true;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile8.item(0));
    this.assortedCurrentUpload.title = this.assortedImage8Title;
    this.assortedCurrentUpload.description = this.assortedImage8Description;
    this.assortedCurrentUpload.link = this.assortedImage8Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image8', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage8Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage9() {
    if (!this.assortedImage9Title || !this.assortedImage9Description || !this.assortedImage9Link || !this.assortedSelectedFile9) {
      return;
    }
    // Display the upload progress bar for image 9 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = true;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile9.item(0));
    this.assortedCurrentUpload.title = this.assortedImage9Title;
    this.assortedCurrentUpload.description = this.assortedImage9Description;
    this.assortedCurrentUpload.link = this.assortedImage9Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image9', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage9Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage10() {
    if (!this.assortedImage10Title || !this.assortedImage10Description || !this.assortedImage10Link || !this.assortedSelectedFile10) {
      return;
    }
    // Display the upload progress bar for image 10 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = true;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile10.item(0));
    this.assortedCurrentUpload.title = this.assortedImage10Title;
    this.assortedCurrentUpload.description = this.assortedImage10Description;
    this.assortedCurrentUpload.link = this.assortedImage10Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image10', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage10Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage11() {
    if (!this.assortedImage11Title || !this.assortedImage11Description || !this.assortedImage11Link || !this.assortedSelectedFile11) {
      return;
    }
    // Display the upload progress bar for image 11 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = true;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile11.item(0));
    this.assortedCurrentUpload.title = this.assortedImage11Title;
    this.assortedCurrentUpload.description = this.assortedImage11Description;
    this.assortedCurrentUpload.link = this.assortedImage11Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image11', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage11Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage12() {
    if (!this.assortedImage12Title || !this.assortedImage12Description || !this.assortedImage12Link || !this.assortedSelectedFile12) {
      return;
    }
    // Display the upload progress bar for image 12 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = true;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile12.item(0));
    this.assortedCurrentUpload.title = this.assortedImage12Title;
    this.assortedCurrentUpload.description = this.assortedImage12Description;
    this.assortedCurrentUpload.link = this.assortedImage12Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image12', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage12Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage13() {
    if (!this.assortedImage13Title || !this.assortedImage13Description || !this.assortedImage13Link || !this.assortedSelectedFile13) {
      return;
    }
    // Display the upload progress bar for image 13 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = true;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile13.item(0));
    this.assortedCurrentUpload.title = this.assortedImage13Title;
    this.assortedCurrentUpload.description = this.assortedImage13Description;
    this.assortedCurrentUpload.link = this.assortedImage13Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image13', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage13Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage14() {
    if (!this.assortedImage14Title || !this.assortedImage14Description || !this.assortedImage14Link || !this.assortedSelectedFile14) {
      return;
    }
    // Display the upload progress bar for image 14 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = true;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile14.item(0));
    this.assortedCurrentUpload.title = this.assortedImage14Title;
    this.assortedCurrentUpload.description = this.assortedImage14Description;
    this.assortedCurrentUpload.link = this.assortedImage14Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image14', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage14Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage15() {
    if (!this.assortedImage15Title || !this.assortedImage15Description || !this.assortedImage15Link || !this.assortedSelectedFile15) {
      return;
    }
    // Display the upload progress bar for image 15 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = true;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile15.item(0));
    this.assortedCurrentUpload.title = this.assortedImage15Title;
    this.assortedCurrentUpload.description = this.assortedImage15Description;
    this.assortedCurrentUpload.link = this.assortedImage15Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image15', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage15Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage16() {
    if (!this.assortedImage16Title || !this.assortedImage16Description || !this.assortedImage16Link || !this.assortedSelectedFile16) {
      return;
    }
    // Display the upload progress bar for image 16 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = true;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile16.item(0));
    this.assortedCurrentUpload.title = this.assortedImage16Title;
    this.assortedCurrentUpload.description = this.assortedImage16Description;
    this.assortedCurrentUpload.link = this.assortedImage16Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image16', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage16Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage17() {
    if (!this.assortedImage17Title || !this.assortedImage17Description || !this.assortedImage17Link || !this.assortedSelectedFile17) {
      return;
    }
    // Display the upload progress bar for image 17 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = true;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile17.item(0));
    this.assortedCurrentUpload.title = this.assortedImage17Title;
    this.assortedCurrentUpload.description = this.assortedImage17Description;
    this.assortedCurrentUpload.link = this.assortedImage17Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image17', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage17Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage18() {
    if (!this.assortedImage18Title || !this.assortedImage18Description || !this.assortedImage18Link || !this.assortedSelectedFile18) {
      return;
    }
    // Display the upload progress bar for image 18 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = true;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile18.item(0));
    this.assortedCurrentUpload.title = this.assortedImage18Title;
    this.assortedCurrentUpload.description = this.assortedImage18Description;
    this.assortedCurrentUpload.link = this.assortedImage18Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image18', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage18Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage19() {
    if (!this.assortedImage19Title || !this.assortedImage19Description || !this.assortedImage19Link || !this.assortedSelectedFile19) {
      return;
    }
    // Display the upload progress bar for image 19 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = true;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile19.item(0));
    this.assortedCurrentUpload.title = this.assortedImage19Title;
    this.assortedCurrentUpload.description = this.assortedImage19Description;
    this.assortedCurrentUpload.link = this.assortedImage19Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image19', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage19Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage20() {
    if (!this.assortedImage20Title || !this.assortedImage20Description || !this.assortedImage20Link || !this.assortedSelectedFile20) {
      return;
    }
    // Display the upload progress bar for image 20 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = true;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile20.item(0));
    this.assortedCurrentUpload.title = this.assortedImage20Title;
    this.assortedCurrentUpload.description = this.assortedImage20Description;
    this.assortedCurrentUpload.link = this.assortedImage20Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image20', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage20Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage21() {
    if (!this.assortedImage21Title || !this.assortedImage21Description || !this.assortedImage21Link || !this.assortedSelectedFile21) {
      return;
    }
    // Display the upload progress bar for image 21 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = true;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile21.item(0));
    this.assortedCurrentUpload.title = this.assortedImage21Title;
    this.assortedCurrentUpload.description = this.assortedImage21Description;
    this.assortedCurrentUpload.link = this.assortedImage21Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image21', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage21Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage22() {
    if (!this.assortedImage22Title || !this.assortedImage22Description || !this.assortedImage22Link || !this.assortedSelectedFile22) {
      return;
    }
    // Display the upload progress bar for image 22 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = true;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile22.item(0));
    this.assortedCurrentUpload.title = this.assortedImage22Title;
    this.assortedCurrentUpload.description = this.assortedImage22Description;
    this.assortedCurrentUpload.link = this.assortedImage22Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image22', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage22Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage23() {
    if (!this.assortedImage23Title || !this.assortedImage23Description || !this.assortedImage23Link || !this.assortedSelectedFile23) {
      return;
    }
    // Display the upload progress bar for image 23 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = true;
    this.assortedUploadingImage24 = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile23.item(0));
    this.assortedCurrentUpload.title = this.assortedImage23Title;
    this.assortedCurrentUpload.description = this.assortedImage23Description;
    this.assortedCurrentUpload.link = this.assortedImage23Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image23', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage23Src = newURL.toString();
    });
  }



  // Uploads a new image
  assortedUploadImage24() {
    if (!this.assortedImage24Title || !this.assortedImage24Description || !this.assortedImage24Link || !this.assortedSelectedFile24) {
      return;
    }
    // Display the upload progress bar for image 24 and no others
    this.assortedUploadingImage1 = false;
    this.assortedUploadingImage2 = false;
    this.assortedUploadingImage3 = false;
    this.assortedUploadingImage4 = false;
    this.assortedUploadingImage5 = false;
    this.assortedUploadingImage6 = false;
    this.assortedUploadingImage7 = false;
    this.assortedUploadingImage8 = false;
    this.assortedUploadingImage9 = false;
    this.assortedUploadingImage10 = false;
    this.assortedUploadingImage11 = false;
    this.assortedUploadingImage12 = false;
    this.assortedUploadingImage13 = false;
    this.assortedUploadingImage14 = false;
    this.assortedUploadingImage15 = false;
    this.assortedUploadingImage16 = false;
    this.assortedUploadingImage17 = false;
    this.assortedUploadingImage18 = false;
    this.assortedUploadingImage19 = false;
    this.assortedUploadingImage20 = false;
    this.assortedUploadingImage21 = false;
    this.assortedUploadingImage22 = false;
    this.assortedUploadingImage23 = false;
    this.assortedUploadingImage24 = true;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.assortedCurrentUpload = new GridImage(this.assortedSelectedFile24.item(0));
    this.assortedCurrentUpload.title = this.assortedImage24Title;
    this.assortedCurrentUpload.description = this.assortedImage24Description;
    this.assortedCurrentUpload.link = this.assortedImage24Link;
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    const thisSaved = this;
    this.cs.pushGridUpload('assortedPage', 'image24', this.assortedCurrentUpload).then(function (newURL) {
      // Updates thumbnail image
      thisSaved.assortedImage24Src = newURL.toString();
    });
  }



}
