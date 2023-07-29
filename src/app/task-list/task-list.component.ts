import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = new Set<Task>([
    new Task("Visit Ann"),
    new Task("Call Dad"),
    new Task("Go to the Gym"),
    new Task("Wash the dishes"),
    new Task("Shop for the party")
  ]);

  addTask(newTask: string) {

    this.tasks.add(new Task(newTask));
  }

  remove(existingTask: Task) {
    // You can use a modal or another user interface element for confirmation instead of 'confirm'.
    if (confirm(`Are you sure that you want to remove the following task? \n '${existingTask.title}'`)) {
      this.tasks.delete(existingTask);
    }
  }

}


class Task {
  private _title: string;
  private _isDone = false;

  constructor(title: string) {
    this._title = title;
  }


  toggleDone() {
    this._isDone = !this._isDone;
  }


  public get title(): string {
    return this._title;
  }

  public set title(newTitle: string) {
    this._title = newTitle;
  }

  public get isDone(): boolean {
    return this._isDone;
  }

  public set isDone(v: boolean) {
    this._isDone = v;
  }
}
