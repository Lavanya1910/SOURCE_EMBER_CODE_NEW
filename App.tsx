
            import React from 'react';
            import { RouterProvider } from '@tanstack/react-router';
            import { router } from './routerConfig';

            const App = () => {
                return <RouterProvider router={router} />;
            };

            export default App;
            