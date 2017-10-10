import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  isAdmin = false;

  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService) {
    this.isAdmin = this.as.isAuthed();
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // Sets black border around selected view in navbar
    if (window.location.pathname === '/shop') {
      document.getElementById('chocoBtn').setAttribute('style', 'border: none;');
      document.getElementById('aboutBtn').setAttribute('style', 'border: none;');
      document.getElementById('homeBtn').setAttribute('style', 'border: none;');
      document.getElementById('contactBtn').setAttribute('style', 'border: none;');
      document.getElementById('shopBtn').setAttribute('style', 'outline: 4px solid black; outline-offset:-4px;');
    }
  }
}
