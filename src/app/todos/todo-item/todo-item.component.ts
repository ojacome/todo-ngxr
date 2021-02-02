import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { TodoModel } from '../models/todo.model';
import { toggle } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo : TodoModel;
  chkCompletado : FormControl;
  txtInput : FormControl;
  editando: boolean = false;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;



  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado)
    this.txtInput = new FormControl(this.todo.texto, [ Validators.required, Validators.minLength(2)])

    this.chkCompletado.valueChanges
    .subscribe( valor => {
      this.store.dispatch(toggle({ id : this.todo.id }))
    })
  }


  editar(){
    this.editando = true;

    setTimeout( () => {
      
      this.txtInputFisico.nativeElement.select();
    }, 1)
  }

  terminarEdicion() {
    this.editando = false;
  }
}
