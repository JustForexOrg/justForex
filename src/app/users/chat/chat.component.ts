import { Component } from '@angular/core';
import * as globalVars from "./global";

declare const io;
declare const ENTER = 13;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent {
  reference: any;
  text: string[] = [];
  socket = null;

  clientsNameList: number[];
  typed = "";

  constructor(){
    let reference = this;
    this.socket = io('http://localhost:8000');
    this.socket.on('chat message', function(msg){
        this.text.push(msg);
    }.bind(this));

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
