import React, { useEffect } from 'react';

import adminStyles from '@/ui/admin/styles/styles.scss';

import useLayout from '@/ui/hooks/useLayout';

const LayoutFullpage = ({ left, right }) => {

  useLayout();

  useEffect(() => {
    document.body.classList.add('h-100');
    const html = document.querySelector('html');
    const root = document.getElementById('__next');
    if (root) {
      root.classList.add('h-100');

      html.setAttribute('data-show', true);
      html.setAttribute('data-color', 'light-blue');
      html.setAttribute('data-layout', 'fluid');
      html.setAttribute('data-radius', 'rounded');
      html.setAttribute('data-navcolor', 'default');
      html.setAttribute('data-placement', 'horizontal');
      html.setAttribute('data-dimension', 'desktop');
      html.setAttribute('data-behaviour', 'pinned');

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
      <style jsx global>{adminStyles}</style>

      {/* Background Start */}
      <div className="fixed-background" />
      {/* Background End */}

      <div className="container-fluid p-0 h-100 position-relative">
        <div className="row g-0 h-100">
          {/* Left Side Start */}
          <div className="offset-0 col-12 d-none d-lg-flex offset-md-1 col-lg h-lg-100">{left}</div>
          {/* Left Side End */}

          {/* Right Side Start */}
          <div className="col-12 col-lg-auto h-100 pb-4 px-4 pt-0 p-lg-0">{right}</div>
          {/* Right Side End */}
        </div>
      </div>
    </>
  );
};
export default LayoutFullpage;
