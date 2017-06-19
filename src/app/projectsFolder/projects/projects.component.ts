import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';
import { MyprojectComponent } from '../myproject/myproject.component';
import { Project } from '../myproject/project';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  newProject_id: string;

  projects: Project[] = [];

   constructor(private projectsService: ProjectsService) {
     // Retrieve posts from the API
     this.projectsService.getProjectbyUser().subscribe(projects => {
       this.projects = projects;
     });
   }

   addNewProject() {
     event.preventDefault();
     var project = {
       language: "python",
       name: "new project",
       last_edited: "01/01/17",
       text: "",
       //get the current user's id
       user_id: JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body)._id
     }
     this.projectsService.addProject(project).map(res => this.newProject_id = res.json()._body._id);
   }

}
