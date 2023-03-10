import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#216B91' : '#031728')};
    whitespace: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px ' : '16px ')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({round}) => (round ? "50px" : "none")};

    &hover {
        background: ${({ primary }) => (primary ? '#031728' : '#216B91')};
        transform: translateY(-2px);
    }
`;