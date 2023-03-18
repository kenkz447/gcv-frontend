import React, { useMemo } from 'react';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import routesAndMenuItems from '@/ui/routes.js';
import { getMenuItems } from '@/ui/routing/helper';

import SidebarMenuItems from './SidebarMenuItems';

const SidebarMenu = () => {
  const { isLogin, currentUser } = useSelector((state) => state.auth);
  const { useSidebar } = useSelector((state) => state.menu);

  const menuItemsMemo = useMemo(
    () =>
      getMenuItems({
        data: routesAndMenuItems.sidebarItems,
        isLogin,
        userRole: currentUser.role,
      }),
    [isLogin, currentUser]
  );

  if (!useSidebar === true) {
    return <></>;
  }
  return (
    <Col xs="auto" className="side-menu-container">
      <ul className="sw-25 side-menu mb-0 primary" id="menuSide">
        <SidebarMenuItems menuItems={menuItemsMemo} />
      </ul>
    </Col>
  );
};
export default SidebarMenu;
