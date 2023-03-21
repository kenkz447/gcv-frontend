import { useMutation } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { loginApi, UserLoginInfo } from '@/services/backend';
import { PASSWORD_MIN_LENGTH } from '@/shared';
import { HtmlHead, LayoutFullpage, TextInput } from '@/ui/admin';
import { CsLineIcons } from '@/ui/cs-line-icons';

const initialValues: UserLoginInfo = {
    userNameOrEmailAddress: '',
    password: '',
};

const validationSchema = yup.object().shape({
    userNameOrEmailAddress: yup
        .string()
        .email('form.common.isEmail')
        .required('form.common.required'),
    password: yup
        .string()
        .min(PASSWORD_MIN_LENGTH, 'form.common.passwordMinLength')
        .required('form.common.required'),
});

function LoginForm() {
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
            {(form) => {
                return (
                    <Form>
                        <TextInput
                            name='userNameOrEmailAddress'
                            placeholder={fm({ id: 'common.email' })}
                            prefixElm={<CsLineIcons icon='email' />}
                        />
                        <TextInput
                            type='password'
                            name='password'
                            placeholder={fm({ id: 'common.password' })}
                            prefixElm={<CsLineIcons icon='lock-off' />}
                            suffixElm={
                                <Link
                                    className='text-small position-absolute t-3 e-3'
                                    to='/forgot-password'
                                >
                                    {fm({ id: 'auth.common.forgotPassword' })}
                                </Link>
                            }
                        />
                        <Button size='lg' type='submit'>
                            {fm({ id: 'common.login' })}
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default function LoginPage() {
    const { formatMessage: fm } = useIntl();

    const leftSide = (
        <div className='min-h-100 d-flex align-items-center'>
            <div className='w-100 w-lg-75 w-xxl-50'>
                <div>
                    <div className='mb-5'>
                        <h1 className='display-3 text-white capitalize'>
                            {fm({ id: 'auth.common.header' })}
                        </h1>
                    </div>
                    <p className='h6 lh-1-5 mb-5 text-white'>
                        {fm({ id: 'auth.common.description' })}
                    </p>
                    <div className='mb-5'>
                        <Button size='lg' variant='outline-white' href='/'>
                            {fm({ id: 'auth.common.action' })}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );

    const rightSide = (
        <div className='sw-lg-70 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep full-page-content-right-border py-5'>
            <div className='sw-lg-50 px-5'>
                <div className='sh-11'>
                    <Link to='/'>
                        <div className='logo-default' />
                    </Link>
                </div>
                <div className='mb-5'>
                    <h2 className='cta-1 text-primary capitalize'>
                        {fm({ id: 'auth.login.header' })}
                    </h2>
                </div>
                <div className='mb-5'>
                    <p className='h6'>{fm({ id: 'auth.login.description' })}</p>
                </div>
                <LoginForm />
                <div className='mb-5'></div>
                <Link to='/register'>{fm({ id: 'common.register' })}</Link>
            </div>
        </div>
    );

    return (
        <>
            <HtmlHead
                title={fm({ id: 'auth.login.metaTitle' })}
                description={fm({ id: 'auth.login.metaDescription' })}
            />
            <LayoutFullpage left={leftSide} right={rightSide} />
        </>
    );
}
