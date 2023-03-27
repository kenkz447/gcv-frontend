import loadable from '@loadable/component';
import React from 'react';
import { Route } from 'react-router-dom';

import { FORGOT_PASSWORD, LOGIN, REGISTER } from '@/shared';

import { AuthPage } from './AuthPage';

const LoginPage = loadable(() => import('./login').then(m => m.LoginPage));
const RegisterPage = loadable(() => import('./register').then(m => m.RegisterPage));
const ForgotPasswordPage = loadable(() => import('./forgot-password').then(m => m.ForgotPasswordPage));

export default (
    <Route element={<AuthPage />} path='auth'>
        <Route element={<LoginPage />} path={LOGIN} />
        <Route element={<RegisterPage />} path={REGISTER} />
        <Route element={<ForgotPasswordPage />} path={FORGOT_PASSWORD} />
    </Route>
);