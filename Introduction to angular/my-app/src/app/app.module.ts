import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TasksComponent, TaskService } from './tasks.component';
import { RouterModule, Routes } from '@angular/router';
import { OtherComponent } from "./other.component";

const appRoutes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'other', component: OtherComponent },
  { path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent, TasksComponent,OtherComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
