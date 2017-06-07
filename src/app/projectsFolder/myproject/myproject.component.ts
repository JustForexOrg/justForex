import { Component, OnInit, Input } from '@angular/core';
import { Project } from './project'

@Component({
  selector: 'project-box',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.css']
})
export class MyprojectComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  @Input() project: Project

}
