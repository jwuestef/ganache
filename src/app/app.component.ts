import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  constructor() { }



  // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  ngOnInit() {

    // Hides desktop navbar and admin login if screen width is less than 1100 pixels wide.
    if (window.screen.width < 1080) {
      document.getElementById('desktopNav').setAttribute('style', 'display:none;');
      document.getElementById('adminLogin').setAttribute('style', 'display:none;');
      document.getElementById('adminLogout').setAttribute('style', 'display:none;');
    }

    // Hides mobile navbar if device is more than 1100 pixels wide.
    if (window.screen.width >= 1080) {
      document.getElementById('mobileNav').setAttribute('style', 'display:none;');
    }

  }



}
