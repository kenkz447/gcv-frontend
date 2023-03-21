import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-bootstrap';

import { DEFAULT_PATHS } from '@/ui/admin/uiConfig';

const BreadcrumbList = ({ items = [{ to: '/', text: 'Home' }], basePath = DEFAULT_PATHS.APP }) => {
  return (
    <Breadcrumb className="breadcrumb-container d-inline-block">
      {items.map((breadcrumb, bIndex) => (
        <Breadcrumb.Item key={`breadCrumb.${bIndex}`} linkAs={Link} linkProps={{ to: `${basePath}${breadcrumb.to}` }}>
          {breadcrumb.title || breadcrumb.text}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
export default BreadcrumbList;
