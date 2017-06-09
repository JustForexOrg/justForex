import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ServerDataSource } from './../../../../node_modules/ng2-smart-table'
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'Rank',
      },
      title: {
        title: 'User',
      },
      albumId: {
        title: 'Risk Rating',
      },
      split: {
        title: 'Split',
      },
      url: {
        title: 'Graphs',
      },
      nationality: {
        title: 'Nationality'
      }
    },
    //   id: {
    //     title: 'ID',
    //     filter: false
    //   },
    //   username: {
    //     title: 'Username',
    //     filter: false
    //   },
    //   email: {
    //     title: 'Email',
    //     filter: false
    //   },
    //   password: {
    //     title: 'Password',
    //     filter: false
    //   },
    //   score: {
    //     title: 'Score',
    //     filter: false
    //   },
    // },
    actions: false,
    hideSubHeader: true
  };

  source: ServerDataSource;

  constructor(http: Http, private router: Router) {
    this.source = new ServerDataSource(http, { endPoint: 'https://jsonplaceholder.typicode.com/photos' });
  }

  onUserRowSelect(event): void {
    this.router.navigate(['/chat']);
  }

  onSearch(query: string = '') {
  this.source.setFilter([
    // fields we want to include in the search
    {
      field: 'id',
      search: query
    },
    {
      field: 'username',
      search: query
    },
    {
      field: 'email',
      search: query
    },
    {
      field: 'score',
      search: query
    }
  ], false);
  // second parameter specifying whether to perform 'AND' or 'OR' search
  // (meaning all columns should contain search query or at least one)
  // 'AND' by default, so changing to 'OR' by setting false here
}

  ngOnInit() {}

}
