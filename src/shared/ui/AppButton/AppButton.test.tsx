import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import { render, screen } from '@testing-library/react';

describe('only first param', () => {
    test('withOneArg', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('with theme', () => {
        render(<AppButton themeBtn={ThemeButton.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
