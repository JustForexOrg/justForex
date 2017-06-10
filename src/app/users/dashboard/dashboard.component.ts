import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  selected: string;
  button = [
    'developer',
    'investor'
  ]
  active: boolean;

  onSelect(chosen:string) {
    console.log(this.selected + ", " + chosen);
    this.active = this.selected != chosen ? false : true;
  }

  setDeveloper() {
    if(!this.selected) {
      this.selected = 'developer';
    }
    this.onSelect('developer');
  }

  setInvestor() {
    if(!this.selected) {
      this.selected = 'investor';
    }
    this.onSelect('developer');
  }

  findColor() {
    if(this.active) {
      return '#65D292';
    }
    return 'white';
  }
}
