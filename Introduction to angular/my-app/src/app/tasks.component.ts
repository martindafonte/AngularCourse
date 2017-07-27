import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks',
  template: `
  <h4 [class.red]="toggle">This is the task component</h4>
  <ul *ngIf="toggle">
    <li *ngFor="let person of people">
      {{person}}
    </li>
  </ul>
  <h4 [ngClass]="{red: toggle, blue:!toggle}">task</h4>
  <input [(ngModel)]="sample">
  <span>{{sample}}</span>

  <button (click)="doThis()">Click me!</button>
  `,
  styles: [".red {color: red}", ".blue {color: blue}"]
})

export class TasksComponent implements OnInit {
  constructor() { }
  toggle: boolean = true;
  sample: string = "Nuevo texto";
  a_num: Array<number> = [1, 2, 3, 4];
  num: number = 7;
  people: Array<string> = ["Martín", "Guillermo", "Florencia"];
  ngOnInit() { }

  doThis() {
    alert('button clicked!');
  }

}