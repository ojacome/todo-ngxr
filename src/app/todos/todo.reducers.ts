import { createReducer, on } from "@ngrx/store";
import { TodoModel } from "./models/todo.model";
import { crear } from "./todo.actions";


export const estadoInicial: TodoModel[] = [
    new TodoModel('Salvar al mundo'),
    new TodoModel('Vencer a Thanos'),
    new TodoModel('Comprar el traje de Ironman'),
    new TodoModel('Crear un lenguaje de progrmacion que lleve a SpaceX a la luna')
];



const _todoReducer = createReducer(
    estadoInicial,
    on( crear, (state, {texto} ) => [...state, new TodoModel( texto )] ), // hay que realizarlo de esta manera ya que no es recomendable utilizar push, ni pop , etc
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}