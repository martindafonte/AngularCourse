import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks',
  template: `
  <h4 [class.red]="toggle">task</h4>
  <h4 [ngClass]="{red: toggle, blue:!toggle}">task</h4>
  `,
  styles:[".red {color: red}", ".blue {color: blue}"]
})

export class TasksComponent implements OnInit {
  constructor() { }
  toggle: boolean = true;
  ngOnInit() { }
}