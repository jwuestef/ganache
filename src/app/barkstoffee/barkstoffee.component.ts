import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-barkstoffee',
  templateUrl: './barkstoffee.component.html',
  styleUrls: ['./barkstoffee.component.css']
})
export class AboutComponent {
  isAdmin = false;

    // The contructor function runs automatically on component load, each and every time it's called
    constructor(public as: AuthService) {
      this.isAdmin = this.as.isAuthed();
    }

}
