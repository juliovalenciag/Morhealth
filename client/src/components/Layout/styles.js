import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
    display: flex;
    z-index: 9;
    flex-grow: 1;
`;

export const SMain = styled.main`
    position: fixed;
    left: ${({ isOpen, sidebarWidth }) => (isOpen ? `calc(${sidebarWidth} + 150px)` : '105px')};
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0px; // Ajusta el padding según tus necesidades
    overflow-y: auto;
    transition: left 0.3s ease-in-out;
`;
