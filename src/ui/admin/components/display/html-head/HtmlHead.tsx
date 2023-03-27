import React from 'react';
import { Helmet } from 'react-helmet';

export const HtmlHead = ({ title = '', description = '', children = null }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta content={description} name='description' />
            </Helmet>
            {children && children}
        </>
    );
};
