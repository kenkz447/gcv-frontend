import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router';

import '@/ui/admin/styles/styles.scss';

import Footer from '@/ui/admin/layout/footer/Footer';
import Nav from '@/ui/admin/layout/nav/Nav';
import SidebarMenu from '@/ui/admin/layout/nav/sidebar-menu/SidebarMenu';
import RightButtons from '@/ui/admin/layout/right-buttons/RightButtons';
import useLayout from '@/ui/hooks/useLayout';

export const Layout = ({ children }) => {
    useLayout();
    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.click();
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, [pathname]);

    return (
        <>
            <Nav />
            <main>
                <Container>
                    <Row className="h-100">
                        <SidebarMenu />
                        <Col className="h-100" id="contentArea">
                            {children}
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
            <RightButtons />
        </>
    );
};
