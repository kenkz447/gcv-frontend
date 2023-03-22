import React from 'react';
import { NavLink } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { LOGIN } from '@/shared';
import { HtmlHead } from '@/ui/admin';

import { RegisterForm } from './_views';

export function RegisterPage() {
    const { formatMessage: fm } = useIntl();

    return (
        <>
            <HtmlHead title={fm({ id: 'auth.register.title' })} description={fm({ id: 'auth.register.metaDescription' })} />
            <div className='sw-lg-70 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep full-page-content-right-border py-5'>
                <div className='sw-lg-50 px-5'>
                    <div className='sh-11'>
                        <NavLink href='/'>
                            <div className='logo-default' />
                        </NavLink>
                    </div>
                    <div className='mb-5'>
                        <h2 className='cta-1 text-primary mb-0'>{fm({ id: 'auth.register.header' })}</h2>
                    </div>
                    <div className='mb-5'>
                        <p className='h6'>{fm({ id: 'auth.register.description' })}</p>
                    </div>
                    <div className='mb-5'>
                        <RegisterForm />
                    </div>
                    <Link to={LOGIN}>
                        {fm({ id: 'auth.register.url.toLogin' })}
                    </Link>
                </div>
            </div>
        </>
    );
}

