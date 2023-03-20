import React from 'react';
import { NavLink } from 'react-bootstrap';

import { HtmlHead } from '@/ui/admin';
import { LayoutFullpage } from '@/ui/admin/layout/LayoutFullpage';
import { CsLineIcons } from '@/ui/cs-line-icons';

const Unauthorized = () => {
  const title = 'Unauthorized';
  const description = 'Unauthorized Page';

  const rightSide = (
    <div className='sw-lg-80 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep full-page-content-right-border py-5'>
      <div className='sw-lg-60 px-5'>
        <div className='sh-11'>
          <NavLink href='/'>
            <div className='logo-default' />
          </NavLink>
        </div>
        <div className='mb-5'>
          <h2 className='cta-1 text-primary mb-0'>
            Ooops, it looks like an error!
          </h2>
          <h2 className='display-2 text-primary'>Unauthorized</h2>
        </div>
        <div className='mb-5'>
          <p className='h6'>
            It looks like the page you are looking for is not available.
          </p>
          <p className='h6'>
            If you think that is a mistake, please{' '}
            <NavLink href='/'>contact</NavLink> us.
          </p>
        </div>
        <div>
          <NavLink href='/' className='btn btn-icon btn-icon-start btn-primary'>
            <CsLineIcons icon='arrow-left' /> <span>Back to Home</span>
          </NavLink>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <HtmlHead title={title} description={description} />
      <LayoutFullpage right={rightSide} />
    </>
  );
};

export default Unauthorized;
