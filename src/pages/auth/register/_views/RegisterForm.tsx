import { useMutation } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import * as Yup from 'yup';

import { accountApi, RegisterDto } from '@/services/backend';
import { TextInput } from '@/ui/admin';
import { CsLineIcons } from '@/ui/cs-line-icons';

const initialValues: RegisterDto = { userName: '', emailAddress: '', password: '', appName: '' };

const validationSchema = Yup.object().shape({
    userName: Yup.string().required('form.common.required'),
    emailAddress: Yup.string().email().required('form.common.isEmail'),
    password: Yup.string().min(6, 'form.common.passwordMinLength').required('form.common.required'),
});

export function RegisterForm() {
    const { formatMessage: fm } = useIntl();
    const { mutateAsync: doRegister } = useMutation(accountApi.apiAccountRegisterPost);

    const onSubmit = async (values: RegisterDto) => {
        await doRegister({
            registerDto: values
        });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form
                id='registerForm'
                className='tooltip-end-bottom'
            >
                <TextInput
                    name='userName'
                    placeholder={fm({ id: 'auth.register.placeholder.username' })}
                    prefixElm={<CsLineIcons icon='user' />} />
                <TextInput
                    type='email'
                    name='emailAddress'
                    placeholder={fm({ id: 'auth.register.placeholder.email' })}
                    prefixElm={<CsLineIcons icon='email' />} />
                <TextInput
                    type='password'
                    name='password'
                    placeholder={fm({ id: 'auth.register.placeholder.password' })}
                    prefixElm={<CsLineIcons icon='lock-off' />} />
                <Button size='lg' type='submit'>
                    {fm({ id: 'auth.register.cta.signUp' })}
                </Button>
            </Form>
        </Formik>
    );
}
