import { Component, Inject } from '@angular/core';
import { Message } from './message/message';
import { MessageService } from './message.service'

declare const io;
declare const ENTER = 13;

@Component({
  selector: 'chat-app',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: Message[];

    constructor(private messageService: MessageService) {
      // Retrieve posts from the API
      this.messageService.getMessages().subscribe(messages => {
        this.messages = messages;
      });
    }
}
