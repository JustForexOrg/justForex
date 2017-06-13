import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

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

   constructor(private http: Http) {
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

   public abs(num: number) {
       return Math.abs(num);
   }

   public makeSplit(num: number) {
       var n1 = Number(num %= 100).toFixed(2);
       var n2 = Number(100 - num).toFixed(2);
       return String(n1) + " : " + String(n2);
   }
}
