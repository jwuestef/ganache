import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Ganache Chocolatier';
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/chainsign.png' },
      { name: 'assets/ganachesign.png' },
    ];
  }
  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.

    //if statement determines if screen width is less than 1100 pixels wide. If it is, the desktop navbar
    //is displayed and the admin button is hidden
    if (window.screen.width < 1080) {
      document.getElementById('desktopNav').setAttribute('style', 'display:none;');
      document.getElementById('adminLogin').setAttribute('style', 'display:none;');
      document.getElementById('adminLogout').setAttribute('style', 'display:none;');

    }
    //if statement hides mobile navbar if device is more than 1100 pixels wide
    if (window.screen.width >= 1080) {
      document.getElementById('mobileNav').setAttribute('style', 'display:none;');
    }
  }
}
