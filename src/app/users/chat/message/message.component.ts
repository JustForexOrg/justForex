import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message';
import { MessageService } from '../message.service'
import { UserService } from '../../authentication/services/user.service';
import { Router } from '@angular/router';

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
  cross: boolean = false;
  sender;

  //For counter offer
  isSent: boolean = false;
  risk;
  algorithm_name: string;

  recipient_id: string;
  proposed_split:number = 50;
  proposed_amount: number;
  end_date: string;

  constructor(private messageService: MessageService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    //find the sender by using sender_id in the message
    this.userService.getById(this.message.sender_id).subscribe(data => this.sender = data);
  }

  @Input() message: Message;

  hasNotRead() {
    this.messageService.hasRead();
  }

  choose(str: string) {
    // console.log(this.tick);
    // console.log(this.pending);
    // console.log(this.cross);
      if(str === 'accept') {
        this.tick = true;
        this.pending = false;
        this.visibility = true;
        this.cross = false;

        this.message.isSuccess="tick";
        // console.log("tick");
        // reset();
      } else if(str === 'decline') {
        this.visibility = false;
        this.tick = false;
        this.pending = false;
        this.cross = true;

        this.message.isSuccess="cross";
        // console.log("cross");
      } else if(str === 'counter') {
        this.pending = true;
        this.visibility = true;
        this.tick = false;
        this.cross = false;

        this.message.isSuccess="pending";
        // console.log("pending");
    }
    this.update();
    if (str === 'accept') {
      this.router.navigate(['/contract/' + String(this.message._id)]);
    }
  }

  findSender() {
    this.userService.getById(this.message.sender_id).subscribe(data => this.sender = data);
  }

  /* Accepting the offer will:
    - Add up the lifetime investment of the sender
    - Find the sender's new profit split
    - Put a waiting parameter on how much profit made by the investor
  */
  update() {
    var newChat = {
      sender_id: this.message.sender_id,
      recipient_id: this.message.recipient_id,
      proposed_split: this.message.proposed_split,
      proposed_amount: this.message.proposed_amount,
      algorithm_name: this.message.algorithm_name,
      isSuccess: this.message.isSuccess
    }
    this.messageService.updateChat(newChat,this.message._id);

  }

  public saveMessage(id) {
    console.log(this.isSent);
    if(!this.isSent) {
      var m = {
        sender_id: JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body)._id,
        recipient_id: id,
        proposed_split: this.proposed_split,
        proposed_amount: this.proposed_amount,
        algorithm_name: this.algorithm_name,
        proposed_end_date: this.end_date
      }
      this.messageService.saveMessage(m);
      this.isSent = true;
    }
  }

  public resetSentData() {
    this.isSent = false;
  }
}
