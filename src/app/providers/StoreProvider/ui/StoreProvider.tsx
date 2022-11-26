import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReactStore } from 'app/providers/StoreProvider/config/store';
import { IStateSchema } from 'app/providers/StoreProvider/config/StateShema';

interface IStoreProviderProps {
   children:ReactNode;
   initialState?:IStateSchema;
}

export function StoreProvider(props: IStoreProviderProps) {
    const { children, initialState } = props;
    const store = createReactStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}
