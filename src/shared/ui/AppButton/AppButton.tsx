import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import cls from './AppButton.module.scss';

export const enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export const enum SizeButton{
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}
interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNameProps?: string;
    themeBtn?: ThemeButton;
    square?:boolean;
    size?:SizeButton;
}

export const AppButton: FC<IAppButtonProps> = (props) => {
    const { theme } = useTheme();
    const {
        classNameProps,
        themeBtn,
        children,
        square,
        size,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,

    };

    return (
        <button
            type="button"
            className={classNames(
                cls.AppButton,
                mods,
                [classNameProps, cls[size], cls[themeBtn], cls[theme]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
