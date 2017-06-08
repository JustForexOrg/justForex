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
        title: 'ID',
      },
      username: {
        title: 'Username',
      },
      email: {
        title: 'Email',
      },
      password: {
        title: 'Password',
      },
      score: {
        title: 'Score',
      },
    },
    actions: false,
    hideSubHeader: true
  };

  source: ServerDataSource;

  constructor(http: Http, private router: Router) {
    this.source = new ServerDataSource(http, { endPoint: '/api/users/getall' });
  }

  onUserRowSelect(event): void {
    this.router.navigate(['/chat']);
  }

  ngOnInit() {}

}
