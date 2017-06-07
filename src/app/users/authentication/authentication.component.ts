import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../users'

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  users: User[];
  isRegister:boolean = false;
  isActive: boolean = true;

  email: string;
  username: string;
  password: string;

  constructor(private userService:UsersService) { }

  ngOnInit() {
  }

  switchPage(toLogin: boolean) {
    if((!this.isRegister && !toLogin) || (this.isRegister && toLogin)) {
      this.isRegister = this.isRegister ? false : true;
      this.isActive = this.isActive ? false : true;
    }
  }

  addUser() {
    event.preventDefault();
    var u = {
      id: 1,
      email: this.email,
      username: this.username,
      password: this.password
    }

    this.userService.addUser(u)
        .subscribe(user => {
            this.users.push(user);
        });
  }
}
