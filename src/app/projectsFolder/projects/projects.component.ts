import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';
import { MyprojectComponent } from '../myproject/myproject.component';
import { Project } from '../myproject/project';
import { Router } from '@angular/router';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  newProject_id: string;

  projects: Project[] = [];

   constructor(private projectsService: ProjectsService, private router: Router,) {
     // Retrieve projects from the API
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
       text: "class MyAlgorithm(Algorithm):\ndef __init__(self, start_datetime, end_datetime):\n# Change the start_datetime and end_datetime to run test over\n# a custom period\nsuper().__init__(start_datetime, end_datetime)\nself.counter = 0\ndef act(self):\n# Add your main algorithm code here\npass",
       risk: 0,
       country: "UK",
       returns: 0,
       split: 0,
       //get the current user's id
       user_id: JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body)._id
     }
     this.projectsService.addProject(project).subscribe(res => {
       this.router.navigate(['/editor/' + res._id])
     });
   }
}
