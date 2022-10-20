import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/stirybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ErrorScreen } from 'widgest/ErrorScreen';

export default {
    title: 'ErrorScreen',
    component: ErrorScreen,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ErrorScreen>;

const Template: ComponentStory<typeof ErrorScreen> = (args) => <ErrorScreen {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
