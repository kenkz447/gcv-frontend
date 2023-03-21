import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useAuth } from '@/domain/hooks/useAuth';
import { Layout } from '@/ui/admin/layout';

export default function AdminPage() {
    useAuth('admin');
    const navigate = useNavigate();

    useEffect(() => {
        void navigate('/', { replace: true });
    });

    return (
        <Layout>

        </Layout>
    );
}