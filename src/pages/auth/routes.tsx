import loadable from '@loadable/component';
import React from 'react';
import { Route } from 'react-router-dom';

import { LOGIN, REGISTER } from '@/shared';

import { AuthPage } from './AuthPage';

const LoginPage = loadable(() => import('./login').then(m => m.LoginPage));
const RegisterPage = loadable(() => import('./register').then(m => m.RegisterPage));

export default (
    <Route path="auth" element={<AuthPage />}>
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={REGISTER} element={<RegisterPage />} />
    </Route>
);