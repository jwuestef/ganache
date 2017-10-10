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
    if (window.location.pathname === '/shop') {
      if (this.isAdmin){
      document.getElementById('chocoBtnAdmin').setAttribute('style', 'border: none;');
      document.getElementById('aboutBtnAdmin').setAttribute('style', 'border: none;');
      document.getElementById('homeBtnAdmin').setAttribute('style', 'border: none;');
      document.getElementById('contactBtnAdmin').setAttribute('style', 'border: none;');
      document.getElementById('shopBtnAdmin').setAttribute('style', 'border: 5px solid black;');
    } else {
      // Set black border around selected view for non-admins
      document.getElementById('chocoBtn').setAttribute('style', 'border: none;');
      document.getElementById('aboutBtn').setAttribute('style', 'border: none;');
      document.getElementById('homeBtn').setAttribute('style', 'border: none;');
      document.getElementById('contactBtn').setAttribute('style', 'border: none;');
      document.getElementById('shopBtn').setAttribute('style', 'border: 5px solid black;');
    }
  }
}
}
