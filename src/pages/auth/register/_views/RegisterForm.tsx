import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useIntl } from 'react-intl';

import { useRegister } from '@/domain/hooks';
import { RegisterDto } from '@/services/backend';
import { MemoForm, SubmitButton, TextInput } from '@/ui/admin';
import { CsLineIcons } from '@/ui/cs-line-icons';

const initialValues: RegisterDto = { userName: '', emailAddress: '', password: '', appName: 'yolio' };

export function RegisterForm() {
    const { formatMessage: fm } = useIntl();

    const { submit, validationSchema } = useRegister();

    const { mutateAsync: doRegister, error } = useMutation(submit);

    return (
        <MemoForm
            error={error}
            initialValues={initialValues}
            name='register'
            onSubmit={async (values) => {
                await doRegister(values);
            }}
            validationSchema={validationSchema}
        >
            <TextInput
                name='userName'
                placeholder={fm({ id: '[auth.register].form.placeholder.username' })}
                prefixElm={<CsLineIcons icon='user' />}
            />
            <TextInput
                name='emailAddress'
                placeholder={fm({ id: '[auth.register].form.placeholder.email' })}
                prefixElm={<CsLineIcons icon='email' />}
                type='email'
            />
            <TextInput
                name='password'
                placeholder={fm({ id: '[auth.register].form.placeholder.password' })}
                prefixElm={<CsLineIcons icon='lock-off' />}
                type='password'
            />
            <SubmitButton size='lg'>
                {fm({ id: '[auth.register].form.action.signUp' })}
            </SubmitButton>
        </MemoForm >
    );
}
