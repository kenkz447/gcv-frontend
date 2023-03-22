import { useMutation } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { loginApi, UserLoginInfo } from '@/services/backend';
import { PASSWORD_MIN_LENGTH } from '@/shared';
import { TextInput } from '@/ui/admin';
import { CsLineIcons } from '@/ui/cs-line-icons';

export const initialValues: UserLoginInfo = {
    userNameOrEmailAddress: '',
    password: '',
};

export const validationSchema = yup.object().shape({
    userNameOrEmailAddress: yup
        .string()
        .email('form.common.isEmail')
        .required('form.common.required'),
    password: yup
        .string()
        .min(PASSWORD_MIN_LENGTH, 'form.common.passwordMinLength')
        .required('form.common.required'),
});

export function LoginForm() {
    const { formatMessage: fm } = useIntl();

    const { mutateAsync: doLogin } = useMutation(loginApi.apiAccountLoginPost);

    const onSubmit = async (values: UserLoginInfo) => {
        await doLogin({
            userLoginInfo: values,
        });
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <TextInput
                    name='userNameOrEmailAddress'
                    placeholder={fm({ id: 'common.email' })}
                    prefixElm={<CsLineIcons icon='email' />} />
                <TextInput
                    type='password'
                    name='password'
                    placeholder={fm({ id: 'common.password' })}
                    prefixElm={<CsLineIcons icon='lock-off' />}
                    suffixElm={<Link
                        className='text-small position-absolute t-3 e-3'
                        to='/forgot-password'
                    >
                        {fm({ id: 'auth.common.forgotPassword' })}
                    </Link>} />
                <Button size='lg' type='submit'>
                    {fm({ id: 'common.login' })}
                </Button>
            </Form>
        </Formik>
    );
}
