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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.

    // These conditionals determine what elements to display based on device width
    // If the screen is smaller than 1100 pixels wide, the admin buttons and desktop navbar are not displayed
    if (window.screen.width < 1100) {
      document.getElementById('desktopNav').setAttribute('style', 'display:none;');
      document.getElementById('adminLogin').setAttribute('style', 'display:none;');
      document.getElementById('adminLogout').setAttribute('style', 'display:none;');

    }
    // If the screen is greater than or equal to 1100 pixels wide, the mobile navbar is not displayed
    if (window.screen.width >= 1100) {
      document.getElementById('mobileNav').setAttribute('style', 'display:none;');
    }
  }
}
