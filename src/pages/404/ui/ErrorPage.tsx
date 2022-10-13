import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ErrorPage.module.scss';

interface IErrorPageProps {
    classNameProps?: string;
}

export function ErrorPage(props: IErrorPageProps) {
    const { classNameProps } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ErrorPage, {}, [classNameProps])}>
            {t('pageNotFound')}
        </div>
    );
}
