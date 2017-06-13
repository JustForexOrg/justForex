import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { MessageService } from '../chat/message.service'
import { Message } from '../chat/message/message'

import { films } from './leaderboards.data';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent {
   public data;
   public filterQuery = "";
   public rowsOnPage = 10;
   public sortBy = "email";
   public sortOrder = "asc";

   sender_id: number;
   recipient_id: number;
   proposed_split: 50;
   proposed_amount: number;

   constructor(private http: Http, private messageService: MessageService) {
   }
   ngOnInit(): void {
       this.http.get("https://jsonplaceholder.typicode.com/users")
           .subscribe((data)=> {
               setTimeout(()=> {
                   this.data = data.json();
               }, 1000);
           });
   }

   public toInt(num: string) {
       return +num;
   }

   public sortByWordLength = (a: any) => {
       return a.city.length;
   }

   public saveMessage() {
     var m: Message = {
       sender_id: 1,
       recipient_id: this.recipient_id,
       proposed_split: this.proposed_split,
       proposed_amount: this.proposed_amount
     }

     this.messageService.saveMessage(m);
   }
}
