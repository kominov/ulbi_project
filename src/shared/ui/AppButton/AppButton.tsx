import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import cls from './AppButton.module.scss';

export const enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNameProps?: string;
    themeBtn?: ThemeButton;
}

export const AppButton: FC<IAppButtonProps> = (props) => {
    const { theme } = useTheme();
    const {
        classNameProps, themeBtn, children, ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(
                cls.AppButton,
                {},
                [classNameProps, cls[themeBtn], theme === Theme.DARK ? cls.dark : cls.light],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
