import { Component, OnInit } from '@angular/core';
import { TasksComponent } from './tasks.component'
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  viewProviders: [TasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  title = 'app';
}
