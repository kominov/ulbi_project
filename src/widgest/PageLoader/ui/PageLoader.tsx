import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface IPageLoaderProps {
    classNameProps?: string;
}

export function PageLoader(props: IPageLoaderProps) {
    const { classNameProps } = props;

    return (
        <div className={classNames(cls.PageLoader, {}, [classNameProps])}>
            <Loader />
        </div>
    );
}
