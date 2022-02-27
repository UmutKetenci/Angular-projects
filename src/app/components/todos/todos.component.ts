import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor() {}
  content: string = '';
  completed: boolean = false;

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: false,
      },
    ];
  }
  toggleDone(id: number) {
    this.todos.map((todo, i) => {
      if (i === id) todo.completed = !todo.completed;
    });
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo, i) => {
      return i !== id;
    });
  }
  addTodo() {
    if (this.content !== '')
      this.todos.push({ content: this.content, completed: this.completed });
  }
}
