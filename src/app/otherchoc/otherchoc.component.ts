import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otherchoc',
  templateUrl: './otherchoc.component.html',
  styleUrls: ['./otherchoc.component.css']
})
export class OtherchocComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Sets black border around selected view in navbar
    if (window.location.pathname === '/otherchoc') {
      document.getElementById('homeBtn').setAttribute('style', 'border: none;');
      document.getElementById('contactBtn').setAttribute('style', 'border: none;');
      document.getElementById('aboutBtn').setAttribute('style', 'border: none;');
      document.getElementById('shopBtn').setAttribute('style', 'border: none;');
      document.getElementById('chocoBtn').setAttribute('style', 'outline: 4px solid black; outline-offset:-4px;');
    }
  }

}
