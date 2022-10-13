import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightTheme from 'shared/assets/svg/navbar/ligth-theme.svg';
import DarkTheme from 'shared/assets/svg/navbar/dark-theme.svg';
import { AppButton } from 'shared/ui/AppButton/AppButton';

interface IThemeSwitcherProps {
    classNameProps?: string;
}

export function ThemeSwitcher(props: IThemeSwitcherProps) {
    const { classNameProps } = props;
    const { toggleTheme } = useTheme();
    return (
        <AppButton
            onClick={toggleTheme}
        >
            <LightTheme
                width={20}
                height={20}
                color="#fa7900"
            />
        </AppButton>
    );
}
