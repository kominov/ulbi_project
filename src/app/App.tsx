import { Suspense } from 'react';
import 'app/styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgest/Navbar';
import { Sidebar } from 'widgest/Sidebar/ui/Sidebar/Sidebar';
import 'shared/config/i18n/i18n.ts';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar
                    theme={theme}
                />

                <div className="flex">
                    <Sidebar />
                    <div className="container">
                        <AppRouter />
                    </div>
                </div>
            </Suspense>

        </div>

    );
}

export default App;
