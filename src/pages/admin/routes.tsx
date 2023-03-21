import loadable from '@loadable/component';
import React from 'react';
import { Route, Routes } from 'react-router';

const AdminPage = loadable(() => import('./Page'));

export default (
    <Routes>
        <Route path="/admin" element={<AdminPage />} />
    </Routes>
);