import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isAdmin = false;

  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService) {
    this.isAdmin = this.as.isAuthed();
  }


}
