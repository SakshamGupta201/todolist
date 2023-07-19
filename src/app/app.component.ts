import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  tasks = [
    "Visit Ann",
    "Call Dad",
    "Go to the Gym",
    "Wash the dishes",
    "Shop for the party"
  ]

  sayHello(newTask:string) {
    alert(newTask);
  }
}
