import loadable from '@loadable/component';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const LoginPage = loadable(() => import('./login/Page'));

export default (
    <Routes>
        <Route path="auth">
            <Route path="login" element={<LoginPage />} />
        </Route>
    </Routes>
);