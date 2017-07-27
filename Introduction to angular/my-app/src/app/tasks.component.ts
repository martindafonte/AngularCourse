import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TaskService {
  tasks: Array<string> = ["Lavar", "Wake up", "Code"];

  private contador: number = 0;

  create() {
    this.tasks.push("tarea_" + (this.contador++));
  }
}



@Component({
  selector: 'tasks',
  providers: [TaskService],
  template: `
  <h1>Task list:</h1>
  <h4 [class.red]="toggle">This is the task component</h4>
  <ul *ngIf="toggle">
    <li *ngFor="let task of taskService.tasks">
      {{task}}
    </li>
  </ul>
  <h4 [ngClass]="{red: toggle, blue:!toggle}">Tarea</h4>
  <input [(ngModel)]="sample">
  <span>{{sample}}</span>

  <button (click)="taskService.create()">Click me!</button>
  `,
  styles: [".red {color: red}", ".blue {color: blue}"]
})

export class TasksComponent implements OnInit {

  constructor(public taskService: TaskService) { }
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