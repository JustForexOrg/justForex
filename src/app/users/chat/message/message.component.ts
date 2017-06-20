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

  constructor(private messageService: MessageService, private userService: UserService) {
  }

  ngOnInit() {
    //find the sender by using sender_id in the message
    // this.sender = JSON.stringify(this.userService.getById(this.message.sender_id));
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

        this.accept();
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
    this.userService.getById(this.message.sender_id).subscribe(data => this.sender = data.name);
  }

  /* Accepting the offer will:
    - Add up the lifetime investment of the sender
    - Find the sender's new profit split
    - Put a waiting parameter on how much profit made by the investor
  */
  accept() {

  }
}
