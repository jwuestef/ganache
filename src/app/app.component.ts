import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ganache Chocolatier';
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/chainsign.png' },
      { name: 'assets/ganachesign.png' },
    ];
  }
}
