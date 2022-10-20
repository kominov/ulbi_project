import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/stirybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/stirybook/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouteDecorator } from '../../src/shared/config/stirybook/RouterDecorator';
import 'loki/configure-react';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouteDecorator);
