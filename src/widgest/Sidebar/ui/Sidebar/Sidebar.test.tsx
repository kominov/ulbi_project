import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgest/Sidebar/ui/Sidebar/Sidebar';
import { componentRender } from 'shared/lib/tests/componentsRender/componentRender';

describe('Sidebar', () => {
    test('withOneArg', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('onToggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
