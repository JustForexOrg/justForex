import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ServerDataSource } from './../../../../node_modules/ng2-smart-table'

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
    },
    actions: false,
    hideSubHeader: true
  };

  source: ServerDataSource;

  constructor(http: Http) {
    this.source = new ServerDataSource(http, { endPoint: '/api/users/getall' });
  }

  ngOnInit() {}

}
