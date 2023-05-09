import React, { useState } from 'react';
import { SLayout, SMain } from "./styles";

const Layout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const sidebarWidth = '300px';

    return (
        <SLayout>
            <SMain>{children}</SMain>
        </SLayout>
    );
};

export default Layout;
