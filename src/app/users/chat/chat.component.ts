import {Observable} from 'rxjs/Observable';
import { Component, Inject } from '@angular/core';
import { Message } from './message/message';
import { MessageService } from './message.service';
import * as SocketIOClient from 'socket.io-client';

declare var $:any;

@Component({
  selector: 'chat-app',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: Message[] = [];
  private socket: SocketIOClient.Socket; // The client instance of socket.io

  numMsg: number = 0;

  constructor(private messageService: MessageService) {
    // Retrieve posts from the API
    // this.messageService.getMessagesFromRecipient().subscribe(messages => {
    //   this.messages = messages.json();
    //   // this.numMsg = this.messageService.hasNotRead;
    // });

    Observable.timer(0, 30000) // Run every 10 seconds
              .flatMap(() => this.messageService.getMessagesFromRecipient())
              .subscribe(messages => {
                  this.messages = messages.json();
              });
  }

  // Emit: message saved event
  saveMessage(messageSaved){
      this.messages.push(messageSaved);
  }

}
