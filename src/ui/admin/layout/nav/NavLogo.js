import Link from 'next/link';
import React from 'react';

import { DEFAULT_PATHS } from '@/ui/admin/uiConfig.js';

const NavLogo = () => {
  return (
    <div className="logo position-relative">
      <Link href={DEFAULT_PATHS.APP}>
        {/*
          Logo can be added directly
          <img src="/img/logo/logo-white.svg" alt="logo" />
          Or added via css to provide different ones for different color themes
         */}
        <div className="img" />
      </Link>
    </div>
  );
};
export default React.memo(NavLogo);
