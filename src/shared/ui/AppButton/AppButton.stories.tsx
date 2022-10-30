import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppButton, SizeButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
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

export const Square = Template.bind({});
Square.args = {
    children: '>',
    themeBtn: ThemeButton.SECONDARY,
    square: true,
};
Square.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    themeBtn: ThemeButton.SECONDARY,
    square: true,
    size: SizeButton.M,
};
SquareM.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    themeBtn: ThemeButton.SECONDARY,
    square: true,
    size: SizeButton.L,
};
SquareL.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    themeBtn: ThemeButton.SECONDARY,
    square: true,
    size: SizeButton.XL,
};
SquareXL.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeM = Template.bind({});
SizeM.args = {
    children: '>',
    themeBtn: ThemeButton.SECONDARY,
    size: SizeButton.XL,
};
SizeM.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    children: '>',
    themeBtn: ThemeButton.SECONDARY,
    size: SizeButton.XL,
};
SizeL.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeXL = Template.bind({});
SizeXL.args = {
    children: '>',
    themeBtn: ThemeButton.SECONDARY,
    size: SizeButton.XL,
};
SizeXL.decorators = [ThemeDecorator(Theme.DARK)];
