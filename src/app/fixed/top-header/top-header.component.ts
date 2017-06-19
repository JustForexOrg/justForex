import { Component } from '@angular/core'
import { AuthenticationService } from '../../users/authentication/services/authentication.service'

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
  authenticate: AuthenticationService;

  constructor() {
    this.name = JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body).name;
  }

  logout(): void {
    this.authenticate.logout();
  }
}
