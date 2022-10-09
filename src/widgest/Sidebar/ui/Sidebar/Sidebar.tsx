import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgest/ThemeSwitcher';
import { LanguageSwitcher } from 'widgest/LanguageSwitcher/ui/LanguageSwitcher';
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
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: !collapsed }, [classNameProps])}>
            <button
                type="button"
                onClick={onToggle}
            >
                toggle
            </button>
            <div className={cls.switchersWrapper}>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>

        </div>
    );
}
