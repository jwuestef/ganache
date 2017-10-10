import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
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
    //Add 'implements OnInit' to the class.
    if (window.screen.width < 1100) {
      document.getElementById('desktopNav').setAttribute('style', 'display:none;');
    }
    if (window.screen.width >= 1100) {
      document.getElementById('mobileNav').setAttribute('style', 'display:none;');
    }
  }
}
