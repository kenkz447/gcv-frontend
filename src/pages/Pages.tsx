import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

import adminRoutes from './admin/routes';
import authRoutes from './auth/routes';

export const Pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                {authRoutes}
                {adminRoutes}
            </Routes>
        </BrowserRouter>
    );
};
