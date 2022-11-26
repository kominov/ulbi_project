import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface IRenderComponentProps{
    router?:string;
    initialState?: DeepPartial<IStateSchema>
}

export function componentRender(component:ReactNode, options:IRenderComponentProps = {}) {
    const {
        initialState,
        router = '/',
    } = options;
    return render(
        <StoreProvider initialState={initialState as IStateSchema}>
            <MemoryRouter initialEntries={[router]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,

    );
}
