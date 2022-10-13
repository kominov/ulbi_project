import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'widgest/Sidebar/ui/Sidebar/Sidebar';
import { withTranslation } from 'react-i18next';
import { helperWithTranslation } from 'shared/lib/tests/helperWithTranslation';

describe('Sidebar', () => {
    test('withOneArg', () => {
        helperWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('onToggle', () => {
        helperWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
