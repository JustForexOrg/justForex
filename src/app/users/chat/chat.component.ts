import { Component, Inject } from '@angular/core';
import { Message } from './message/message';
import { MessageService } from './message.service'

@Component({
  selector: 'chat-app',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: Message[] = [];

  numMsg: number = 0;

  constructor(private messageService: MessageService) {
    // Retrieve posts from the API
    this.messageService.getMessagesFromRecipient().subscribe(messages => {
      this.messages = messages;
      // this.numMsg = this.messageService.hasNotRead;
    });
  }

}
