import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service'

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  isRegister:boolean = false;
  isActive: boolean = true;

  email: string;
  username: string;
  password: string;

  //for logging in
  loading = false;
  error = '';

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService) { }

  ngOnInit() {
    // reset login status
       this.authenticationService.logout();
  }

  switchPage(toLogin: boolean) {
    if((!this.isRegister && !toLogin) || (this.isRegister && toLogin)) {
      this.isRegister = this.isRegister ? false : true;
      this.isActive = this.isActive ? false : true;
    }
  }

  register() {
    this.loading = true;
    event.preventDefault();
    var model = {
      email: this.email,
      username: this.username,
      password: this.password,
      split: 50,
      risk: 10,
      city: "London",
      returns: 0,
      profile_pic: "http://imgur.com/Eri6H6V",
      isInvestor: true
    }
    this.userService.create(model)
        .subscribe(
            data => {
                this.isRegister = false;
                this.router.navigate(['/getting-started']);
            },
            error => {
                this.loading = false;
            });
  }

    login() {
        this.loading = true;

        this.authenticationService.login(this.username, this.password)
            .subscribe(result => {
                if (result === true) {
                    if(JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body).isInvestor) {
                      // login successful
                      this.router.navigate(['/dashboard/investor']);
                    } else {
                      this.router.navigate(['/dashboard/developer']);
                    }
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
