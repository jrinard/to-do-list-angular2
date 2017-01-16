//ROOT COMPONENT
import { Component } from '@angular/core';

//Part 1 COMPONENT ANNOTATION - determines how it APPEARS // this is our VIEW
@Component({ // defines new component should have functionalities outlines in the above imported component
  selector: 'app-root', // defines the specific tag to render within.
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
   <h3>{{currentFocus}}</h3>
   <ul> <!-- repeater DIRECTIVE --> <!-- tasks is the array and it is assigning each iteration to currentTask temporarly -->
     <li *ngFor="let currentTask of tasks">{{currentTask.description}}</li>
   </ul>
  </div>
  `
})

//Part 2 CLASS DEFINITION -- determines how it BEHAVES
export class AppComponent {
  currentFocus: string = 'Angular Homework'; // Dynamic value
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  //new task constructor to create our task object
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course'),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub')
  ];
}
//class declaration is our MODEL which is also data
export class Task {
  public done: boolean = false;
  constructor(public description: string) { }
}


//TIP when a variable in a component's class declaration references another variable in the class, it must be prefaced with the this keyword.
