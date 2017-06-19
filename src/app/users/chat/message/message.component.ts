import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message';
import { MessageService } from '../message.service'
import { UserService } from '../../authentication/services/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: [
    './message.component.css',
    '../../../../../node_modules/font-awesome/css/font-awesome.min.css'
  ]
})
export class MessageComponent implements OnInit {
  visibility: boolean = true;
  tick: boolean = false;
  pending: boolean = false;
  sender: string;

  constructor(private messageService: MessageService, private userService: UserService) {  }

  ngOnInit() {
  }

  @Input() message: Message;

  hasNotRead() {
    this.messageService.hasRead();
  }

  choose(str: string) {
    if(this.visibility && !this.tick && !this.pending) {
      if(str === 'accept') {
        this.tick = true;
        this.pending = false;
        this.visibility = true;
      } else if(str === 'decline') {
        this.visibility = false;
        this.tick = false;
        this.pending = false;
      } else if(str === 'counter') {
        this.pending = true;
        this.visibility = true;
        this.tick = false;
      }
    }
  }

  findSender() {
    // this.sender = JSON.stringify(this.userService.getById(this.message.sender_id));
    this.userService.getById(this.message.sender_id).subscribe(data => this.sender = data.name);
  }
}
