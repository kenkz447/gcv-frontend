import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useCurrentUser } from '@/domain/hooks/useCurrentUser';
import { LOGIN } from '@/shared';
import { Layout } from '@/ui/admin/layout';

export default function AdminPage() {
    const currentUser = useCurrentUser();

    if (!currentUser) {
        return <Navigate replace={true} to={LOGIN} />
    }

    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}