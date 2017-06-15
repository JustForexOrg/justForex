import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service'
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: Http, private userService:UserService) {
    //set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // find if any user matches login credentials
  }

  login(username: string, password: string): Observable<boolean> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/authenticate', JSON.stringify({
      username: username, password: password
    }), {headers: headers}).map((response: Response) => {
      //login successful if there's a jwt in the response
      let token = response.json();
      // && response.json().token;
      if (token) {
        // set token property
        this.token = token;

        // store username and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(response));
        // return true to indicate successful login
        return true;
      } else {
        // return false to indicate failed login
        alert("Incorrect Login: Please re-enter Login details");
        return false;
      }


    })
  }

  logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
  }
}
