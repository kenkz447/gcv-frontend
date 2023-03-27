import { useMemo } from 'react';
import * as yup from 'yup';

import { AccountApi, RegisterDto } from '@/services/backend/api';

import { useBackendApi } from './_backendHooks';

export const useRegister = () => {
    const api = useBackendApi(AccountApi);

    const validationSchema = useMemo(() => {
        return yup.object().shape({
            userName: yup.string().required('[common].form.validation.required'),
            emailAddress: yup.string().email('[common].form.validation.isEmail').required('[common].form.validation.required'),
            password: yup.string().min(6, '[common].form.validation.passwordMinLength').required('[common].form.validation.required'),
        });
    }, []);

    const submit = async (registerDto: RegisterDto) => {
        try {
            await api.apiAccountRegisterPost({
                registerDto,
            });
        } catch (error) {
            if (error.name === 'ResponseError') {
                const responseBody = await error.response.json();
                throw new Error(responseBody.error.message);
            }

            throw error;
        }
    };

    return {
        submit,
        validationSchema,
    };
};
