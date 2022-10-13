import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'widgest/PageLoader';

function AppRouter() {
    return (
        <Routes>
            {Object.values(RouterConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            {element}
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
}

export default AppRouter;
