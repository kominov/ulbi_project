import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
   children:ReactNode;
   container?:HTMLElement
}

export function Portal(props: IPortalProps) {
    const {
        children,
        container = document.body,
    } = props;

    return createPortal(children, container);
}
