import { Component, OnInit } from '@angular/core';

// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-barks',
  templateUrl: './barks.component.html',
  styleUrls: ['./barks.component.css']
})
export class BarksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// export class AboutComponent {
//   isAdmin = false;

//     // The contructor function runs automatically on component load, each and every time it's called
//     constructor(public as: AuthService) {
//       this.isAdmin = this.as.isAuthed();
//     }

// }