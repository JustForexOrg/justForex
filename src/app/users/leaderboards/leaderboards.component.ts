import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
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
   // export class LeaderboardsComponent implements OnInit {
   //
   //   settings = {
   //     columns: {
   //       id: {
   //         title: 'Rank',
   //       },
   //       title: {
   //         title: 'User',
   //       },
   //       albumId: {
   //         title: 'Risk Rating',
   //       },
   //       split: {
   //         title: 'Split',
   //       },
   //       url: {
   //         title: 'Graphs',
   //       },
   //       nationality: {
   //         title: 'Nationality'
   //       }
   //     },
   //     //   id: {
   //     //     title: 'ID',
   //     //     filter: false
   //     //   },
   //     //   username: {
   //     //     title: 'Username',
   //     //     filter: false
   //     //   },
   //     //   email: {
   //     //     title: 'Email',
   //     //     filter: false
   //     //   },
   //     //   password: {
   //     //     title: 'Password',
   //     //     filter: false
   //     //   },
   //     //   score: {
   //     //     title: 'Score',
   //     //     filter: false
   //     //   },
   //     // },
   //     actions: false,
   //     hideSubHeader: true
   //   };
   //
   //   source: ServerDataSource;
   //
   //   constructor(http: Http, private router: Router) {
   //     this.source = new ServerDataSource(http, { endPoint: 'https://jsonplaceholder.typicode.com/photos' });
   //   }
   // >>>>>>> 92a0e45882e54483a9af50f9552fb642d23bc7a4
   //

// =======
  // onSearch(query: string = '') {
  // this.source.setFilter([
  //   // fields we want to include in the search
  //   {
  //     field: 'id',
  //     search: query
  //   },
  //   {
  //     field: 'username',
  //     search: query
  //   },
  //   {
  //     field: 'email',
  //     search: query
  //   },
  //   {
  //     field: 'score',
  //     search: query
  //   }
  // ], false);
  // second parameter specifying whether to perform 'AND' or 'OR' search
  // (meaning all columns should contain search query or at least one)
  // 'AND' by default, so changing to 'OR' by setting false here
// }

  // ngOnInit() {}

   public sortByWordLength = (a: any) => {
       return a.city.length;
   }
}
