import React, { useContext, useRef, useState } from "react";
import mhlogo from "../../assets/logo/morhealthlogo.png";
import styled from "styled-components";
import { btnReset, v } from "./../../styles/variables";
import { device } from "./../../styles/device";
import { AiOutlineHome, AiOutlineLeft } from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics, MdFitnessCenter } from "react-icons/md";
import { BsPeople, BsFillQuestionCircleFill } from "react-icons/bs";
import { FaAppleAlt } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { BiWorld } from "react-icons/bi";
import { ImUsers } from "react-icons/im";
import { Select, MenuItem } from "@mui/material";

import { ThemeContext } from "../../App";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { LanguageContext } from "../../context/languageContext";


const Sidebar = () => {

    const { currentLanguage, changeLanguage } = useContext(LanguageContext);

    const availableLanguages = [
        { code: "en", label: "English" },
        { code: "es", label: "Español" },
        { code: "fr", label: "Français" },
    ];


    const { currentUser, logout } = useContext(AuthContext);

    const searchRef = useRef(null);
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    const searchClickHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true);
            searchRef.current.focus();
        } else {
            // search functionality
        }
    };

    return (
        <SSidebar isOpen={sidebarOpen} availableLanguages={availableLanguages}>
            <>
                <SSidebarButton
                    isOpen={sidebarOpen}
                    onClick={() => setSidebarOpen((p) => !p)}
                >
                    <AiOutlineLeft />
                </SSidebarButton>
            </>

            <SLogo isOpen={sidebarOpen}>
                <img src={mhlogo} alt="logo" />
            </SLogo>

            <SLogo>
                {sidebarOpen && (
                    <p>{currentUser?.username} </p>
                )}

            </SLogo>

            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer displayMobile={!sidebarOpen} key={label} isActive={pathname === to}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {/* if notifications are at 0 or null, do not display */}
                                {!!notification && (
                                    <SLinkNotification>{notification}</SLinkNotification>
                                )}
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}

            <SDivider displayMobile={!sidebarOpen} />

            {SidebarArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer displayMobile={!sidebarOpen} key={label} isActive={pathname === to}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {!!notification && (
                                    <SLinkNotification>{notification}</SLinkNotification>
                                )}
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}

            <SDivider displayMobile={!sidebarOpen} />

            <SLinkContainer displayMobile={!sidebarOpen}>
                <SLink to="/morhealth/profesionales" style={!sidebarOpen ? { width: `fit-content` } : {}}>
                    <SLinkIcon><ImUsers /></SLinkIcon>
                    {sidebarOpen && <SLinkLabel>Profesionales</SLinkLabel>}
                </SLink>
            </SLinkContainer>
            <SLinkContainer>
                <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>


                    <SLinkIcon onClick={logout}><MdLogout onClick={logout} /></SLinkIcon>
                    {sidebarOpen && <SLinkLabel onClick={logout}>Cerrar sesión</SLinkLabel>}

                </SLink>
            </SLinkContainer>

            <SDivider displayMobile={!sidebarOpen} />


            <STheme displayMobile={!sidebarOpen}>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler>
            </STheme>
            <SLinkContainer displayMobile={!sidebarOpen}>
                <SLink to="/morhealth" style={!sidebarOpen ? { width: `fit-content` } : {}}>
                    <SLinkIcon><BiWorld /></SLinkIcon>
                    {sidebarOpen && (
                        <div>
                            <Select
                                value={currentLanguage}
                                onChange={(e) => changeLanguage(e.target.value)}
                                style={!sidebarOpen ? { width: `fit-content` } : {}}
                            >
                                {availableLanguages.map((language) => (
                                    <MenuItem key={language.code} value={language.code}>
                                        {language.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    )}
                </SLink>
            </SLinkContainer>
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Inicio",
        icon: <AiOutlineHome />,
        to: "/morhealth",
        notification: 0,
    },
];

const SidebarArray = [
    {
        label: "Blog",
        icon: <TfiWrite />,
        to: "/morhealth/blog",
        notification: 3,
    },
    {
        label: "Nutricion",
        icon: <FaAppleAlt />,
        to: "/morhealth/nutricion",
        notification: 0,
    },
    {
        label: "Ejercicios",
        icon: <MdFitnessCenter />,
        to: "/morhealth/ejercicios",
        notification: 0,
    },
];

const SSidebar = styled.div`
    width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
    background: ${({ theme }) => theme.bg};
    height: 100vh;
    padding: ${v.lgSpacing};
    z-index: 10;
    position: fixed;
`;

const SSidebarButton = styled.button`
    ${btnReset};
    position: absolute;
    top: ${v.xxlSpacing};
    right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

const SLogo = styled.div`
    width: 52px;

    img {
        max-width: 100%;
        height: auto;
    }
    cursor: pointer;

    margin-bottom: ${v.lgSpacing};
`;



const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.text};
    margin: ${v.lgSpacing} 0;
`;

const SLinkContainer = styled.div`
    background: ${({ theme, isActive }) => (!isActive ? `transparent` : theme.bg3)};
    border-radius: ${v.borderRadius};
    margin: 8px 0;

    :hover {
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    }
`;

const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-align: left;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`;

const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;

    svg {
        font-size: 20px;
    }
`;

const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};
`;

const SLinkNotification = styled.div`
    font-size: 14px;
    padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
    border-radius: calc(${v.borderRadius} / 2);
    background: ${({ theme }) => theme.primary};
    color: white;

    margin-right: ${v.mdSpacing};
`;

const STheme = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
`;
const SThemeLabel = styled.span`
    display: block;
    flex: 1;
`;
const SThemeToggler = styled.button`
    ${btnReset};
    margin: 0 auto;
    cursor: pointer;
    width: 36px;
    height: 20px;
    border-radius: 10px;
    background: ${({ theme, isActive }) => (!isActive ? '#216B91' : theme.primary)};

    position: relative;
`;

const SToggleThumb = styled.div`
    height: 18px;
    width: 18px;
    position: absolute;
    top: 1px;
    bottom: 1px;
    transition: 0.2s ease right;
    right: calc(100% - 18px - 1px);
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
`;

export default Sidebar;