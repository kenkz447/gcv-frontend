import React from 'react';
import { NavLink } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { LOGIN } from '@/shared';
import { HtmlHead } from '@/ui/admin';

import { ForgotPasswordForm } from './_views';

export function ForgotPasswordPage() {
    const { formatMessage: fm } = useIntl();

    return (
        <>
            <HtmlHead
                description={fm({ id: '[auth.forgot-password].meta.description' })}
                title={fm({ id: '[auth.forgot-password].meta.title' })}
            />
            <div className='sw-lg-70 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep full-page-content-right-border py-5'>
                <div className='sw-lg-50 px-5 tw-w-full'>
                    <div className='sh-11'>
                        <NavLink href='/'>
                            <div className='logo-default' />
                        </NavLink>
                    </div>
                    <div className='mb-5'>
                        <h2 className='cta-1 text-primary mb-0'>
                            {fm({ id: '[auth.forgot-password].paragraph.header' })}
                        </h2>
                    </div>
                    <div className='mb-5'>
                        <p className='h6'>
                            {fm({ id: '[auth.forgot-password].paragraph.description' })}
                        </p>
                    </div>
                    <div className='mb-5'>
                        <ForgotPasswordForm />
                    </div>
                    <Link to={LOGIN}>{fm({ id: '[auth.forgot-password].link.toLogin' })}</Link>
                </div>
            </div>
        </>
    );
}

