import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{
    constructor(private http:Http){
        console.log('User Service Initialized...');
    }

    getUser(){
        return this.http.get('/api/users/getall')
            .map(res => res.json());
    }

    addUser(newUser){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/users/save', JSON.stringify(newUser), {headers: headers})
            .map(res => res.json());
    }

    deleteUser(id){
        return this.http.delete('/api/users/delete'+id)
            .map(res => res.json());
    }
}
