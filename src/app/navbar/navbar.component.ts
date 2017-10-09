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
    $(function(){

          var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);

          $('#container ul li a').each(function() {
          if ($(this).attr('href') === pathname)
          {
              $(this).addClass('current');
          }
          });
      });
  }

    logout() {
      this.as.logout();
    }


}
