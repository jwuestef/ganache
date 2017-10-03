import {
  Component,
  OnInit
} from '@angular/core';
import {
  AuthService
} from '../services/auth.service';


@Component({
  selector: 'app-chocolates',
  templateUrl: './chocolates.component.html',
  styleUrls: ['./chocolates.component.css']
})

export class ChocolatesComponent implements OnInit {
  items: Array<any> = [];
  isAdmin = false;
  // myChocolates = ['Gourmet Truffles', 'Assorted Creams', 'Barks and Toffee', 'Fudge', 'More Chocolates', 'Seasonal Treats'];

  // The contructor function runs automatically on component load, each and every time it's called
  constructor(public as: AuthService) {
    // this.items = [
    //   { name: 'assets/sampleChocolate.png' },
    //   { name: 'assets/ganachesign.png' },
    //   { name: 'assets/sampleChocolate.png' },
    //   { name: 'assets/chainsign.png' },
    //   { name: 'assets/sampleChocolate.png' },
    // ];
    this.isAdmin = this.as.isAuthed();
  }

ngOnInit() {

  }

}

