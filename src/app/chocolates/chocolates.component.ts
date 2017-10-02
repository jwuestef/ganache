import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-chocolates',
  templateUrl: './chocolates.component.html',
  styleUrls: ['./chocolates.component.css']
})
export class ChocolatesComponent implements OnInit {
  isAdmin = false;
  myChocolates = ['Buttercreme', 'Vanilla', 'Swirl'];

  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService) {
    this.isAdmin = this.as.isAuthed();
  }

  ngOnInit() {

  }

}
