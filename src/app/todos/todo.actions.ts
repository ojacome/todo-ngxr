import { createAction, props } from '@ngrx/store';



export const crear = createAction(
    '[Todo] Crea Todo',
    props<{ texto: string }>()
    );