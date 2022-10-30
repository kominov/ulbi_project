import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgest/ThemeSwitcher';
import { LanguageSwitcher } from 'widgest/LanguageSwitcher/ui/LanguageSwitcher';
import { AppButton, SizeButton } from 'shared/ui/AppButton/AppButton';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
    classNameProps?: string;
}

export function Sidebar(props: ISidebarProps) {
    const { classNameProps } = props;
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: !collapsed }, [classNameProps])}
        >
            <AppButton
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                classNameProps={cls.collapseBtn}
                square
                size={SizeButton.L}
            >
                {collapsed ? '<' : '>'}
            </AppButton>

            <div className={cls.switchersWrapper}>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>

        </div>
    );
}
