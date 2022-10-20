import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/stirybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink } from 'shared/ui/AppLink/AppLink';

export default {
    title: 'AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '#',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: 'link',
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'link',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
