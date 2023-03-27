import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import '@/ui/admin/styles/styles.scss';

import { State } from '@/app';
import { useLayout } from '@/ui/hooks';
import { changeLang } from '@/ui/lang';

export function AuthPage() {
    useLayout();
    const { formatMessage: fm } = useIntl();

    useEffect(() => {
        document.body.classList.add('h-100');
        const root = document.getElementById('root');
        if (root) {
            root.classList.add('h-100');
        }
        return () => {
            document.body.classList.remove('h-100');
            if (root) {
                root.classList.remove('h-100');
            }
        };
    }, []);

    return (
        <>
            <div className='fixed-background' />
            <div className='container-fluid h-100 position-relative p-0'>
                <div className='row g-0 h-100'>
                    <div className='offset-0 col-12 d-none d-lg-block offset-md-1 col-lg h-lg-100'>
                        <div className='min-h-100 d-flex align-items-center'>
                            <div className='w-100 w-lg-75 w-xxl-50'>
                                <div>
                                    <div className='mb-5'>
                                        <h1 className='display-3 text-white capitalize'>
                                            {fm({ id: '[auth].paragraph.header' })}
                                        </h1>
                                    </div>
                                    <p className='h6 lh-1-5 mb-5 text-white'>
                                        {fm({ id: '[auth].paragraph.description' })}
                                    </p>
                                    <div className='mb-5'>
                                        <Button href='/' size='lg' variant='outline-white'>
                                            {fm({ id: '[auth].cta.learnMore' })}
                                        </Button>
                                    </div>
                                </div>

                                <div className='tw-bottom-5 position-absolute'>
                                    <LanguageSwitch />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-auto h-100 p-lg-0 px-4 pb-4 pt-0'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}
function LanguageSwitch() {
    const dispatch = useDispatch();
    const { currentLang } = useSelector((state: State) => state.lang);

    const onSelectLang = (code) => {
        dispatch(changeLang(code));
    };

    return (
        <div className='text-white d-flex'>
            <div
                className='tw-cursor-pointer'
                onClick={() => onSelectLang('en')}
            >
                <span className={currentLang.code === 'en' ? 'tw-font-bold' : 'tw-font-light'}>
                    en
                </span>

            </div>
            <div className='ms-2 me-2'>
                |
            </div>
            <div
                className='tw-cursor-pointer'
                onClick={() => onSelectLang('vi')}
            >
                <span className={currentLang.code === 'vi' ? 'tw-font-bold' : 'tw-font-light'}>
                    vi
                </span>
            </div>
        </div>
    );
}

