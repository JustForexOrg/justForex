import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../chat/message.service'
import { Message} from '../chat/message/message'
import { User } from '../user.model'
import { UserService } from '../authentication/services/user.service'

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  //contract id is identified by chat id
  id;
  message: Message;
  recipient: User;
  sender: User;

  constructor(private route: ActivatedRoute, private messageService: MessageService, private userService: UserService) {
    this.route.params.subscribe(params => {
      this.id = params['id'] //set value of id (field variable) to the value of id extracted from the URL
    });

    this.messageService.getMessage(this.id).subscribe(data => {
      this.message = data;

      this.userService.getById(this.message.recipient_id).subscribe(recipient => this.recipient = recipient);
      this.userService.getById(this.message.sender_id).subscribe(sender => this.sender = sender);

    });
  }


  ngOnInit() {
  }

}
