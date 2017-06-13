import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Message } from './message/message'

@Injectable()
export class MessageService {

  constructor(private http: Http) { }

  getMessages() {
    return this.http.get('/api/chat/getall')
        .map(res => res.json());
  }

  saveMessage(msg) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/chat/save', JSON.stringify(msg), {headers: headers})
        .map(res => res.json());
  }

}
