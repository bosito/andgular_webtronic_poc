import { authReducer } from "./stores/auth/app-auth.reducer";
import { counterReducer } from "./stores/counter/counter.reducer";
import { ActionReducerMap } from '@ngrx/store';

export const reducers: ActionReducerMap<{}> = { counterReducer, authentication: authReducer}