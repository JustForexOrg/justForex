import {Component} from '@angular/core'

@Component({
  selector: 'top-header',
  templateUrl: './top-header.component.html',
  styleUrls: [
    './top-header.component.css',
    '../../../../node_modules/font-awesome/css/font-awesome.min.css'
  ]
})

export class TopHeaderComponent {
  name: string;

  constructor() {
    this.name = JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body).name;
  }
}
