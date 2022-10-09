import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from 'shared/config/routeConfig';

function AppRouter() {
    return (
        <div>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    {Object.values(RouterConfig).map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
}

export default AppRouter;
