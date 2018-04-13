import { Component } from '@angular/core';
import { UserService } from './user.service';
import { post } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';
import { Todos } from './comunicacion/todos';
import { create } from 'domain';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  savedTodos$;
  todoList$: Todos[];
  todo: Todos[] = [];
  todoAgregar: Todos = new Todos;
  todos: Todos = new Todos();
  id: string;
  status: boolean;
  filtro = false;

  constructor(private db: AngularFirestore) {
    this.traerAllTodos();
  }

  traerAllTodos() {
    if (this.filtro) {
      console.log('entro');
    } else {
      this.savedTodos$ = this.db.collection<Todos>('todos').valueChanges();
      this.todo = this.savedTodos$;
    }
  }


  agregarTodo(todo: string) {

    this.id = '_' + Math.random().toString(36).substr(2, 9);

    this.todos.descripcion = todo;
    this.todos.estado = false;
    this.todos.id = this.id;

    console.log(this.todos.id + '-' + this.todos.descripcion + '-' + this.todos.estado);
    this.db.collection('todos').doc(this.id).set({id: this.todos.id, descripcion: this.todos.descripcion, estado: this.todos.estado});
    this.todo.push(this.todos);
    this.todos = new Todos();

  }

  listarPorFiltro(estado: boolean) {
    this.filtro = true;
    this.status = estado;
    this.todo = this.todo.filter(todo => todo.estado === this.status);

  }

  listarAllTodos() {


  }
}
