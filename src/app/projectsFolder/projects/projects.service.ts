import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Project } from '../myproject/project'

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

  getProject(id) {
      return this.http.get('/api/tasks/'+id)
              .map(res => res.json());
  }

  public getProjectbyUser() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('/api/users/' + JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body)._id).map(res => res.json());
  }

  addProject(newTask){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers})
          .map(res => res.json());
  }

  deleteProject(id){
      return this.http.delete('/api/task/'+id)
          .map(res => res.json());
  }

  updateStatus(task, id){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.put('/api/tasks/'+id, JSON.stringify(task), {headers: headers})
          .map(res => res.json());
  }

}
