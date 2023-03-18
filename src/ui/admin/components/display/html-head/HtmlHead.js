import { NextSeo } from 'next-seo';
import React from 'react';

const HtmlHead = ({ title = '', description = '', children = null }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
      />
      {children && children}
    </>
  );
};
export default HtmlHead;
