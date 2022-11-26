import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { IStateSchema } from './StateShema';

export function createReactStore(initialState?:IStateSchema) {
    return configureStore<IStateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
