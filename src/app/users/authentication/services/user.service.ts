import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../../user.model';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/authenticate/getall', this.jwt()).map((response: Response) => response.json());
    }

    getById(id) {
        return this.http.get('/api/authenticate/get/' + id, this.jwt()).map((response: Response) => response.json());
    }

    getByUsername(username: string) {
        return this.http.get('/api/authenticate/get' + username, this.jwt()).map((response: Response) => response.json());
    }

    create(user) {
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        return this.http.post('/api/authenticate/save', user, this.jwt()).map(response => response.json());
    }

    update(user) {
        return this.http.put('/api/authenticate/update' + user._id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/authenticate/delete' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
