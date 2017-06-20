import { Injectable, Inject } from '@angular/core';
import { Message } from './users/chat/message/message';
import * as io from 'socket.io-client';
import { MessageService } from './users/chat/message.service';
import { ToasterService } from 'angular2-toaster';

declare var $:any;

@Injectable()
export class AppSocketIoService {
  private socket: SocketIOClient.Socket; // The client instance of socket.io

  // Constructor with an injection of ToastService
  constructor(private toasterService: ToasterService) {
    this.socket = io('http://localhost:8000');
  }

  // Emit: message saved event
  emitEventOnMessageSaved(messageSaved){
      this.socket.emit('messageSaved', messageSaved);
  }

  // Emit: message updated event
  emitEventOnMessageUpdated(messageUpdated){
    this.socket.emit('messageUpdated', messageUpdated);
  }

  // Consume: on message saved then append the changes to the recipient's chat list
  consumeEventOnMessageSaved(){
    var self = this;
    this.socket.on('messageSaved', function(message: Message){
      // this.toasterService.pop('success', 'NEW MESSAGE SENT',
      //       message.recipient_id + ' have received an offer from ' + message.sender_id);
        if(message.recipient_id == JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body)._id) {
          console.log("hihihih");
          location.reload();
        }
    });


  }

  // // Consume on gist updated
  // consumeEvenOnMessageUpdated(){
  //   var self = this;
  //   this.socket.on('gistUpdated', function(message: Message){
  //     self.toasterService.pop('info', 'GIST UPDATED',
  //         'A gist with title \"' + gist.title + '\" has just been updated');
  //   });
  // }
}
