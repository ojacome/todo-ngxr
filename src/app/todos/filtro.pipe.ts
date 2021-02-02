import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/filtro.actions';
import { TodoModel } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform( todos: TodoModel[], filtro: filtrosValidos = 'todos' ): TodoModel[] {

    console.info(todos);

    switch( filtro ){

      case 'completados':
        return todos.filter( todo => todo.completado );
      case 'pendientes':
        return todos.filter( todo => !todo.completado );
      default:
        return todos;
    }
  }

}
