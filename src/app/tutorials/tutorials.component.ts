import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './tutorials.component.html',
  styleUrls: [
    './tutorials.component.css'
  ]
})

export class TutorialsComponent implements OnInit {
  isInvestor: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public investorClick() {
    this.isInvestor = true;
  }

  public developerClick() {
    console.log("Hi");
    this.isInvestor = false;
  }

}
