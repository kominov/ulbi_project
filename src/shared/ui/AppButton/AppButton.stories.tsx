import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import { ThemeDecorator } from 'shared/config/stirybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'Example/AppButton',
    component: AppButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',
    themeBtn: ThemeButton.PRIMARY,
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Clear',
    themeBtn: ThemeButton.CLEAR,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'PrimaryDark',
    themeBtn: ThemeButton.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'ClearDark',
    themeBtn: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
