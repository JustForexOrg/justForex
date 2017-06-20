import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Message } from './message/message';
import { AppSocketIoService } from '../../app.socketIo.service';

import { ToasterService } from 'angular2-toaster';


@Injectable()
export class MessageService {
  hasNotRead: number;

  constructor(private http: Http,
              private toasterService: ToasterService, private appSocketIoService: AppSocketIoService) { }

  getMessages() {
    return this.http.get('/api/chat/all')
        .map(res => res.json(), res => this.hasNotRead = res.length);
  }

  saveMessage(msg) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.hasNotRead++;

    return this.http.post('/api/chat/save', JSON.stringify(msg), {headers: headers})
        .map(res => {
          res = res.json();
          if(res) {
            this.appSocketIoService.emitEventOnMessageSaved(res);
          } else {
            //on error
            this.toasterService.pop('error', 'ERROR', 'ERROR-PLEASE TRY AGAIN');
          }
        })
        .subscribe(data => console.log(data));
  }

  hasRead() {
    return this.hasNotRead--;
  }

  getMessagesFromRecipient() {
    return this.http.get('/api/chat/recipient/' + JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body)._id)
            .map(res => res.json());
  }
}
