import loadable from '@loadable/component';
import React from 'react';
import { Route } from 'react-router';

const AdminPage = loadable(() => import('./AdminPage'));

export default (
    <Route path="/admin" element={<AdminPage />} />
);
