import { createAction, props } from '@ngrx/store';



export const crear = createAction(
    '[Todo] Crea Todo',
    props<{ texto: string }>()
    );

export const toggle = createAction(
    '[Todo] Toggle Todo',
    props<{ id: number }>()
    );