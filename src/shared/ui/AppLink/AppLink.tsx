import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import cls from './AppLink.module.scss';

interface IAppLinkProps extends LinkProps {
    classNameProps?: string;
    theme?: Theme
}

export const AppLink: FC<IAppLinkProps> = (props) => {
    const {
        to, classNameProps, theme, children, ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [classNameProps, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
