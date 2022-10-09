import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import cls from './Navbar.module.scss';

interface INavbarProps {
    classNameProps?: string;
    theme: Theme;
}

export function Navbar(props: INavbarProps) {
    const { classNameProps, theme } = props;

    return (
        <div className={
            classNames(cls.Navbar, {}, [classNameProps])
        }
        >
            <div className={classNames('container', {}, [cls.navbar__wrapper])}>
                <div />
                <div className={cls.nav__left}>
                    <AppLink
                        theme={theme}
                        to="/"
                    >
                        Home
                    </AppLink>
                    <AppLink
                        theme={theme}
                        to="/about"
                    >
                        About
                    </AppLink>
                </div>

            </div>

        </div>
    );
}
