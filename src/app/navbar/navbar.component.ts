import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAdmin = false;

    // The contructor function runs automatically on component load, each and every time it's called
    constructor(public as: AuthService) {
      this.isAdmin = this.as.isAuthed();
    }

    logout() {
      this.as.logout();
    }

}
