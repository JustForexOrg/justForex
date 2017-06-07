import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    text: string[];

    constructor(private http: Http) {}

    ngOnInit() {
        this.http.get("http://justforex.xyz:3020/userapi-backend/economicIndicator/interestRate?indicator=JPN&time=2007-12-03T10:15:30").toPromise()
            .then(r => r.json()).then(r => this.text = r);
    }
}
