import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface IModalProps {
    classNameProps?: string;
    children: ReactNode;
    isOpen:boolean;
    onClose:()=>void;
}

export function Modal(props: IModalProps) {
    const {
        classNameProps,
        children,
        isOpen,
        onClose,
    } = props;
    const { theme } = useTheme();

    const mods:Record<string, boolean> = {
        [cls.opend]: isOpen,
    };

    const onCloseModal = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onContentClick = (e:React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseModal();
        }
    }, [onCloseModal]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [classNameProps])}>
                <div onClick={onCloseModal} className={cls.overlay}>
                    <div className={classNames(cls.content, {}, [])} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
}
