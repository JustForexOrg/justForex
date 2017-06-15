import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { MessageService } from '../chat/message.service'
import { Message } from '../chat/message/message'

import { films } from './leaderboards.data';
// import { DataPipe } from '@angular/common';
// import {DataTableDirectives} from '../../../../node_modules/angular2-datatable';


declare var $:any;

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
  // providers: [Http],
  // directives: [DataTableDirectives],
  // pipes: [DatePipe]
})
export class LeaderboardsComponent {
   public data;
   public filterQuery = "";
   public rowsOnPage = 10;
   public sortBy = "position";
   public sortOrder = "asc";

   isSent: boolean = false;
   risk;

   sender_id: number;
   recipient_id: number;
   proposed_split:number = 50;
   proposed_amount: number;

   constructor(private http: Http, private messageService: MessageService) {
    //  this.gridOptions = {
    //    enableColResize: true,
    //    enableSorting: true,
    //    enableFilter: true
    //  }
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

   public createRange(number) {
     var items: number[] = [];
     for (var i = 1; i <= number; i++) {
       items.push(i);
     }
     return items;
   }

   public sortByWordLength = (a: any) => {
       return a.address.city.length;
   }

   public sortByRisk = (a: any) => {
       return this.makeRisk(this.abs(a.address.geo.lat));
   }

   public sortBySplit = (a: any) => {
       return this.makeSplit(this.abs(a.address.geo.lng));
   }

   public sortByTotal = (a: any) => {
       return Number(this.makeTotal(this.abs(a.address.geo.lng), this.makeRisk(this.abs(a.address.geo.lat))));
   }

   public saveMessage() {
     if(!this.isSent) {
       var m: Message = {
         sender_id: 1,
         recipient_id: this.recipient_id,
         proposed_split: this.proposed_split,
         proposed_amount: this.proposed_amount
       }
       this.messageService.saveMessage(m);
       this.isSent = true;
     }
   }

   public resetSentData() {
     this.isSent = false;
   }

   public abs(num: number) {
       return Math.abs(num);
   }

   public makeSplit(num: number) {
       var n1 = this.roundToTwo(num %= 100);
       var n2 = this.roundToTwo(100 - num);
       return String(n1) + " : " + String(n2);
   }

   public makeRisk(n: number) {
       var NewMax = 10;
       var NewMin = 1;
       var OldMax = 90;
       var OldMin = -90;
       this.risk = this.roundToTwo((((n - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin);
       return this.risk;
   }

   public makeTotal(splitFor: number, risk: number) {
       splitFor %= 100;
       return this.roundToTwo((risk*1000)/(100-splitFor) * Math.pow(splitFor, risk/10));
   }

   public roundToTwo(n: number) {
       return n.toFixed(2);
   }
}
