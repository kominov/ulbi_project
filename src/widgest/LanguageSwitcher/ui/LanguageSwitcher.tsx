import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import cls from './LanguageSwitcher.module.scss';

interface ILanguageSwitcherProps {
    classNameProps?: string;
}

export function LanguageSwitcher(props: ILanguageSwitcherProps) {
    const { classNameProps } = props;
    const { t, i18n } = useTranslation();
    const onToggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <AppButton
            classNameProps={classNames('', {}, [classNameProps])}
            onClick={onToggle}
        >
            { t('language') }
        </AppButton>

    );
}
