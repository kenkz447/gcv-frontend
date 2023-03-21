import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import adminRoutes from './admin/routes';
import authRoutes from './auth/routes';

export const Pages = () => {
    return (
        <BrowserRouter>
            {authRoutes}
            {adminRoutes}
        </BrowserRouter>
    );
};