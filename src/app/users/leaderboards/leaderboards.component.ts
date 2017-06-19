import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { MessageService } from '../chat/message.service'
import { Message } from '../chat/message/message'

import { films } from './leaderboards.data';

declare var $:any;

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css', '../../../../node_modules/font-awesome/css/font-awesome.min.css']
})

export class LeaderboardsComponent {
   public data;
   public filterQuery = "";
   public rowsOnPage = 10;
   public sortBy = "position";
   public sortOrder = "asc";

   isSent: boolean = false;
   risk;

   recipient_id: string;
   proposed_split:number = 50;
   proposed_amount: number;

   constructor(private http: Http, private messageService: MessageService) {
   }

   ngOnInit(): void {
       this.http.get("/api/tasks/")
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

  //  public sortByWordLength = (a: any) => {
  //      return a.address.city.length;
  //  }
   //
  //  public sortByCity = (a: any) => {
  //      return a.address.city;
  //  }
   //
  //  public sortByRisk = (a: any) => {
  //      return this.makeRisk(this.abs(a.address.geo.lat));
  //  }
   //
  //  public sortBySplit = (a: any) => {
  //      return this.makeSplit(this.abs(a.address.geo.lng));
  //  }
   //
  //  public sortByTotal = (a: any) => {
  //      return Number(this.makeTotal(this.abs(a.address.geo.lng), this.makeRisk(this.abs(a.address.geo.lat))));
  //  }

  public sortByCountry = (a: any) => {
      return a.country;
  }

  public sortBySplit = (a: any) => {
      return Number(a.split);
  }

  public sortByReturns = (a: any) => {
      return Number(a.returns);
  }

   public sortByRisk = (a: any) => {
       return Number(a.risk);
   }

   public saveMessage(id) {
     if(!this.isSent) {
       var m: Message = {
         sender_id: JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body)._id,
         recipient_id: id,
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
