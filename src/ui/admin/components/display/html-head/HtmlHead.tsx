import React from 'react';
import { Helmet } from 'react-helmet';

export const HtmlHead = ({ title = '', description = '', children = null }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Helmet>
            {children && children}
        </>
    );
};
