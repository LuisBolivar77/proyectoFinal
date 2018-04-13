import { Todos } from './todos';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css']
})
export class ComunicacionComponent implements OnInit {

  @Input() savedTodos$: Todos[];
  listaTodosMostrar: Todos[];
  i;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.listaTodosMostrar = this.savedTodos$;
  }

  cambiarEstado(id: string, event) {
    const isChecked = event.target.checked;
    if (isChecked) {
      const estado = true;
      this.db.collection('todos').doc(id).update({estado});
    } else if (!isChecked) {
      const estado = false;
      this.db.collection('todos').doc(id).update({estado});
    }
  }

}
