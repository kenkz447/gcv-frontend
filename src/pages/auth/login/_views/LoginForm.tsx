import { useMutation } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { loginApi, UserLoginInfo } from '@/services/backend';
import { FORGOT_PASSWORD, PASSWORD_MIN_LENGTH } from '@/shared';
import { TextInput } from '@/ui/admin';
import { CsLineIcons } from '@/ui/cs-line-icons';

export const initialValues: UserLoginInfo = {
    userNameOrEmailAddress: '',
    password: '',
};

export const validationSchema = yup.object().shape({
    userNameOrEmailAddress: yup
        .string()
        .email('[common].form.validation.isEmail')
        .required('[common].form.validation.required'),
    password: yup
        .string()
        .min(PASSWORD_MIN_LENGTH, '[common].form.validation.passwordMinLength')
        .required('[common].form.validation.required'),
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
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <TextInput
                    name='userNameOrEmailAddress'
                    placeholder={fm({ id: '[auth.login].form.placeholder.userNameOrEmailAddress' })}
                    prefixElm={<CsLineIcons icon='email' />}
                />
                <TextInput
                    name='password'
                    placeholder={fm({ id: '[auth.login].form.placeholder.password' })}
                    prefixElm={<CsLineIcons icon='lock-off' />}
                    suffixElm={(
                        <Link
                            className='text-small position-absolute t-3 e-3'
                            to={FORGOT_PASSWORD}
                        >
                            {fm({ id: '[auth.login].link.forgotPassword' })}
                        </Link>
                    )}
                    type='password'
                />
                <Button
                    size='lg'
                    type='submit'
                >
                    {fm({ id: '[auth.login].form.submit' })}
                </Button>
            </Form>
        </Formik>
    );
}
