//ROOT COMPONENT
import { Component } from '@angular/core';

//Part 1 COMPONENT ANNOTATION - determines how it APPEARS // this is our VIEW // Front End
@Component({ // decorator defines new component should have functionalities outlines in the above imported component
  selector: 'app-root', // defines the specific tag to render within.
  template: `
  <div class="container">
    <h1>To Do List</h1>
    <h3>{{month}}-{{day}}-{{year}}</h3>
    <h3>{{currentFocus}}</h3>
    <ul> <!-- [class] = property binding--><!-- ngfor = repeater DIRECTIVE --><!--(click) = event binding --><!-- tasks is the array and it is assigning each iteration to currentTask temporarly -->
      <li [class]="priorityColor(currentTask)"
           (click)="isDone(currentTask)"
           *ngFor="let currentTask of tasks">{{currentTask.description}}
           <button class="btn btn-xs" (click)="editTask(currentTask)">Edit</button>
      </li><!-- assigning li tag to a loop/repeater // button is called an event binding-->
    </ul>
    <hr>
      <div *ngIf="selectedTask"> <!-- ngIF checks selectedTask's value of null. if it is not null due to clickedTask then it shows-->
      <h3>{{selectedTask.description}}</h3>
      <p>Task Complete? {{selectedTask.done}}</p>
      <h3>Edit Task</h3>
      <label>Enter Task Description:</label>
      <input class="form-control" [(ngModel)]="selectedTask.description"><!-- ngModel = event and property binding// assigning input to description // provides a shortcut for two-way data binding in forms-->
      <label>Enter Task Priority (1-3):</label>
      <br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1"> 1 (Low Priority)<br><!-- radio buttons require predefined values to select from. -->
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2"> 2 (Medium Priority)<br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3"> 3 (High Priority)<br>
      <button class="btn btn-xs" (click)="finishedEditing()">Close Edit</button><!-- When clicked changes selectedTask to null to hide -->
      </div>
    </div>
    `
})

//Part 2 COMPONENT CLASS DEFINITION -- determines how it BEHAVES //Back-End
export class AppComponent {
  currentFocus: string = 'Angular Homework'; // Dynamic value
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1; //TIP when a variable in a component's class declaration references another variable in the class, it must be prefaced with the "this" keyword.
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  //new task constructor to create our task object
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 1),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 3)
  ];
  selectedTask = null;

  // editTask statement must be defined in the component class
  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
  }

  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      // alert("Task Done");
    } else {
      // alert("Task NOT Done");
    }
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
} // end appcomponent


//class declaration is our MODEL which holds our data // CONSTRUCTOR
export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}
