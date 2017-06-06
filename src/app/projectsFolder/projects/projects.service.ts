import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class ProjectsService {

  constructor(private http:Http) {
    console.log("Projects service initialized.");
  }

  getProjects() {
    return this.http.get('/api/tasks')
        .map(res => res.json());
  }

}
