import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ErrorScreen.module.scss';

interface IErrorScreenProps {
    classNameProps?: string;
}

export function ErrorScreen(props: IErrorScreenProps) {
    const { classNameProps } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ErrorScreen, {}, [classNameProps])}>
            <h1>{t('error')}</h1>
        </div>
    );
}
