import { combineReducers, AnyAction, Reducer } from 'redux';
import { PokemonTypeService } from './services/PokemonTypeService';
import { PokemonService } from './services/PokemonService';
import base, { BaseState } from './slices/base/baseSlice';


export type RootState = {
    base: BaseState
    /* eslint-disable @typescript-eslint/no-explicit-any */
    [PokemonTypeService.reducerPath]: any
    [PokemonService.reducerPath]: any
}

export interface AsyncReducers {
    [key: string]: Reducer<any, AnyAction>
}

const staticReducers = {
    base,
    [PokemonTypeService.reducerPath]: PokemonTypeService.reducer,
    [PokemonService.reducerPath]: PokemonService.reducer,
}

const rootReducer =
    (asyncReducers?: AsyncReducers) =>
    (state: RootState, action: AnyAction) => {
        const combinedReducer = combineReducers({
            ...staticReducers,
            ...asyncReducers,
        })
        return combinedReducer(state, action)
    }

export default rootReducer
