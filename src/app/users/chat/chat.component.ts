
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
  messages: Message[];
  private socket: SocketIOClient.Socket; // The client instance of socket.io

  numMsg: number = 0;

  constructor(private messageService: MessageService) {
    // Retrieve posts from the API
    this.messageService.getMessagesFromRecipient().subscribe(messages => {
      this.messages = messages;
      // this.numMsg = this.messageService.hasNotRead;
    });
  }

  // Emit: message saved event
  emitEventOnMessageSaved(messageSaved){
      this.socket.emit('messageSaved', messageSaved);
      this.messages.push(messageSaved);
  }

}
