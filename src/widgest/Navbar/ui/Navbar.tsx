import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { RoutePath } from 'shared/config/routeConfig';
import { Modal } from 'shared/modal/ui/Modal';
import { useCallback, useState } from 'react';
import { AppButton, SizeButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import cls from './Navbar.module.scss';

interface INavbarProps {
    classNameProps?: string;
    theme: Theme;
}

export function Navbar(props: INavbarProps) {
    const { classNameProps, theme } = props;
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = useCallback(() => {
        setModalOpen((prev) => !prev);
    }, []);
    return (
        <div className={
            classNames(cls.Navbar, {}, [classNameProps])
        }
        >
            <div className={classNames('container', {}, [cls.navbar__wrapper])}>
                <div />
                <div className={cls.nav__right}>
                    <AppLink
                        theme={theme}
                        to={RoutePath.main}
                    >
                        Home
                    </AppLink>
                    <AppLink
                        theme={theme}
                        to={RoutePath.about}
                    >
                        About
                    </AppLink>

                    <AppButton
                        themeBtn={ThemeButton.CLEAR}
                        size={SizeButton.M}
                        type="button"
                        onClick={toggleModal}
                    >
                        войти
                    </AppButton>
                </div>
                <Modal isOpen={isModalOpen} onClose={() => toggleModal()}>
                    <div>klk</div>
                </Modal>

            </div>

        </div>
    );
}
