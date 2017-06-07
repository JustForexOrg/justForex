import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';
import { MyprojectComponent } from '../myproject/myproject.component';
import { Project } from '../myproject/project';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  projects: Project[] = [];
  /*  {
      language: "python",
      name: "my first project",
      last_edited: "10/10/10"
    },
    {
      language: "javascript",
      name: "my second project",
      last_edited: "01/06/17"
    }
  ];*/


   constructor(private projectsService: ProjectsService) {
     // Retrieve posts from the API
     this.projectsService.getProjects().subscribe(projects => {
       this.projects = projects;
     });
   }

}
