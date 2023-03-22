import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { REGISTER } from '@/shared';
import { HtmlHead } from '@/ui/admin';

import { LoginForm } from './_views';

export function LoginPage() {
    const { formatMessage: fm } = useIntl();
    return (
        <>
            <HtmlHead
                title={fm({ id: 'auth.login.metaTitle' })}
                description={fm({ id: 'auth.login.metaDescription' })}
            />
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
                    <Link to={REGISTER}>{fm({ id: 'common.register' })}</Link>
                </div>
            </div>
        </>
    );
}
