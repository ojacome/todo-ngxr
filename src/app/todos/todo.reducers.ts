import { createReducer, on } from "@ngrx/store";
import { TodoModel } from "./models/todo.model";
import { crear } from "./todo.actions";


export const estadoInicial: TodoModel[] = [
    new TodoModel('Salvar al mundo')
];



const _todoReducer = createReducer(
    estadoInicial,
    on( crear, (state, {texto} ) => [...state, new TodoModel( texto )] ), // hay que realizarlo de esta manera ya que no es recomendable utilizar push, ni pop , etc
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}