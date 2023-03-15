import React, { useContext, useRef, useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    SLogo,
    SSearch,
    SSearchIcon,
    SSidebar,
    SSidebarButton,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
} from "./styles";

import { logoSVG } from "../../assets";

import {
    AiOutlineApartment,
    AiOutlineHome,
    AiOutlineLeft,
    AiOutlineSearch,
    AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics, MdFitnessCenter } from "react-icons/md";
import { BsPeople, BsFillQuestionCircleFill } from "react-icons/bs";
import { FaAppleAlt } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

import { ThemeContext } from "./../../App";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Sidebar = () => {

    const {currentUser, logout} = useContext(AuthContext);

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
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo>
                <img src={logoSVG} alt="logo" />
                
            </SLogo>

            <SLogo>

            {sidebarOpen && (
                <p>{currentUser?.username} </p>
                )}
            
            </SLogo>

            <SSearch
                onClick={searchClickHandler}
                style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
                <SSearchIcon>
                    <AiOutlineSearch />
                </SSearchIcon>
                <input
                    ref={searchRef}
                    placeholder="Buscar"
                    style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
                />
            </SSearch>

            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
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

            <SDivider />


            {BloglinksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
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


            <SDivider />


            
                <SLinkContainer >
                    <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon><BsFillQuestionCircleFill/></SLinkIcon>
                        {sidebarOpen && <SLinkLabel>Contáctanos</SLinkLabel>}
                    </SLink>
                    </SLinkContainer>
                    <SLinkContainer>
                    <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>

                        
                        <SLinkIcon onClick={logout}><MdLogout onClick={logout}/></SLinkIcon>
                        {sidebarOpen && <SLinkLabel onClick={logout}>Cerrar sesión</SLinkLabel>}
                        
                    </SLink>
                </SLinkContainer>
            
            <SDivider />


            <STheme>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler>
            </STheme>
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Inicio",
        icon: <AiOutlineHome />,
        to: "/morshealth",
        notification: 0,
    },
];

const BloglinksArray = [
    {
        label: "Blog",
        icon: <TfiWrite />,
        to: "/morshealth/blog",
        notification: 3,
    },
    {
        label: "Nutricion",
        icon: <FaAppleAlt />,
        to: "/morshealth/nutricion",
        notification: 0,
    },
    {
        label: "Ejercicios",
        icon: <MdFitnessCenter />,
        to: "/morshealth/ejercicios",
        notification: 0,
    },
];

const NutricionlinksArray = [
    {
        label: "Nutricion",
        icon: <AiOutlineHome />,
        to: "/nutricion",
        notification: 0,
    },
    {
        label: "Recetas",
        icon: <MdOutlineAnalytics />,
        to: "/statistics",
        notification: 3,
    },
    {
        label: "Planes",
        icon: <BsPeople />,
        to: "/nutricion",
        notification: 0,
    },
];

const FitnesslinksArray = [
    {
        label: "Ejercicios",
        icon: <AiOutlineHome />,
        to: "/nutricion",
        notification: 0,
    },
    {
        label: "Rutinas",
        icon: <MdOutlineAnalytics />,
        to: "/statistics",
        notification: 3,
    },

];

const secondaryLinksArray = [
   
];


export default Sidebar;
