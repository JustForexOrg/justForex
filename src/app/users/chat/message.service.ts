import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Message } from './message/message'

@Injectable()
export class MessageService {
  hasNotRead: number;

  constructor(private http: Http) { }

  getMessages() {
    return this.http.get('/api/chat/all')
        .map(res => res.json(), res => this.hasNotRead = res.length);
  }

  saveMessage(msg) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.hasNotRead++;

    return this.http.post('/api/chat/save', JSON.stringify(msg), {headers: headers})
        .map(res => res.json());
  }

  hasRead() {
    return this.hasNotRead--;
  }

  getMessagesFromRecipient() {
    return this.http.get('/api/chat/recipient/' + JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body)._id)
            .map(res => res.json());
  }

}
