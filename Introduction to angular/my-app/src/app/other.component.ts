import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'other',
  template: `
  <h1>Other:</h1>
  <h4 [ngClass]="{red: toggle, blue:!toggle}">Tarea</h4>
  <input [(ngModel)]="sample">
  <span>{{sample}}</span>

  `,
  styles: [".red {color: red}", ".blue {color: blue}"]
})

export class OtherComponent implements OnInit {

  constructor() { }
  toggle: boolean = true;
  sample: string = "Nuevo texto";
  a_num: Array<number> = [1, 2, 3, 4];
  num: number = 7;
  ngOnInit() { }

}