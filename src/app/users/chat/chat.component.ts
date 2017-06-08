import { Component, Inject } from '@angular/core';
import { ChatExampleData } from './data/chat-example-data';

import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';

// import * as globalVars from './service/global';

declare const io;
declare const ENTER = 13;

@Component({
  selector: 'chat-app',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  socket = null;
  text: string[] = [];
  typed = "";

    constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public usersService: UsersService) {
    this.socket = io('http://localhost:8000');
    this.socket.on('chat message', function(msg){
       this.text.push(msg);
   }.bind(this));

  //  globalVars.socket = io({ query: "userName=" + this.nickname });
  }

  bid(){
     this.socket.emit('chat message', this.typed);
     this.typed = '';
 }

 keyDownFunction(event) {
   if(event.keyCode == ENTER) {
     this.bid();
   }
 }
}
