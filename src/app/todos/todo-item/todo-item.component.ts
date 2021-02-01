import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoModel } from '../models/todo.model';

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



  constructor() { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado)
    this.txtInput = new FormControl(this.todo.texto, [ Validators.required, Validators.minLength(2)])
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
