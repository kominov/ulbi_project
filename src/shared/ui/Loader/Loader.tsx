import { classNames } from 'shared/lib/classNames/classNames';
import 'shared/ui/Loader/Loader.scss';

interface ILoaderProps {
    classNameProps?: string;
}

export function Loader(props: ILoaderProps) {
    const { classNameProps } = props;

    return (
        <div className={classNames('lds-ripple', {}, [classNameProps])}>
            <div />
            <div />
        </div>
    );
}
