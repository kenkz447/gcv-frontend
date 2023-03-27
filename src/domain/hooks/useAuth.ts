import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { State } from '@/domain/store';
import { LOGIN } from '@/shared/paths';

export const useAuth = (role: 'admin' | 'supper-admin') => {
    const navigate = useNavigate();
    const { currentRoles, currentUser } = useSelector((state: State) => state.auth);
    if (!currentUser) {
        return void navigate('/', { replace: true });
    }

    const authorized = currentRoles?.find(o => o.name == role);

    if (!authorized) {
        return void navigate(LOGIN, { replace: true });
    }

    return {
        currentUser,
        currentRoles,
    };
};