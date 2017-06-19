import { Component } from '@angular/core';

@Component({
  templateUrl: './myprofile.component.html',
  styleUrls: [
    './myprofile.component.css'
  ]
})

export class MyProfileComponent {
  currentUser;
  isSent: boolean = false;

  ngOnInit() {
    this.currentUser = JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body);
    // console.log(this.currentUser);
  }

  public resetSentData() {
    this.isSent = false;
  }

}
