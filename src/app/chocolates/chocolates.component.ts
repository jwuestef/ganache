import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chocolates',
  templateUrl: './chocolates.component.html',
  styleUrls: ['./chocolates.component.css']
})
export class ChocolatesComponent implements OnInit {
  myChocolates = ['Buttercreme','Vanilla','Swirl'];

  constructor() { }

  ngOnInit() {
  }

}
