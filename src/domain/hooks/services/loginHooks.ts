import { LoginApi } from '@/services/backend/api';

import { useBackendApi, useBackendMutation } from './_backendHooks';

export const useLogin = () => {
    const api = useBackendApi(LoginApi);
    const mutation = useBackendMutation(api.apiAccountLoginPost);
    return mutation;
};