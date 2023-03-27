import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import * as Yup from 'yup';

import { accountApi, SendPasswordResetCodeDto } from '@/services/backend';
import { MemoForm, TextInput } from '@/ui/admin';
import { CsLineIcons } from '@/ui/cs-line-icons';

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
});

const initialValues: SendPasswordResetCodeDto = { email: '', appName: '' };

export function ForgotPasswordForm() {
    const { formatMessage: fm } = useIntl();

    const { mutateAsync: doSendPasswordResetCode } = useMutation(accountApi.apiAccountSendPasswordResetCodePost);

    const onSubmit = async (values: SendPasswordResetCodeDto) => {
        await doSendPasswordResetCode({
            sendPasswordResetCodeDto: values,
        });
    };

    return (
        <MemoForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <TextInput
                name='email'
                placeholder={fm({ id: '[auth.forgot-password].form.placeholder.email' })}
                prefixElm={<CsLineIcons icon='email' />}
                type='text'
            />
            <Button size='lg' type='submit'>
                {fm({ id: '[auth.forgot-password].cta.sendCode' })}
            </Button>
        </MemoForm>
    );
}
