import { ActionReducerMap } from "@ngrx/store";
import { filtrosValidos } from "./filtro/filtro.actions";
import { filtroReducer } from "./filtro/filtro.reducer";
import { TodoModel } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducers";


export interface AppState {
    todos: TodoModel[],
    filtro: filtrosValidos    
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}