import React, { useState } from 'react';
import Sidebar from '../sidebar';
import Navbar from '../Navbar';
import Footer from '../footer/Footer';
import routes from '../../routes';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {

    const [open, setOpen] = React.useState(true);
    const location = useLocation();
    const [currentRoute, setCurrentRoute] = React.useState("Inicio");

    React.useEffect(() => {
        window.addEventListener("resize", () =>
            window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
        );
    }, []);

    React.useEffect(() => {
        getActiveRoute(routes);
    }, [location.pathname]);

    const getActiveRoute = (routes) => {
        let activeRoute = "Main Dashboard";
        for (let i = 0; i < routes.length; i++) {
            if (
                window.location.href.indexOf(
                    routes[i].layout + "/" + routes[i].path
                ) !== -1
            ) {
                setCurrentRoute(routes[i].name);
            }
        }
        return activeRoute;
    };
    const getActiveNavbar = (routes) => {
        let activeNavbar = false;
        for (let i = 0; i < routes.length; i++) {
            if (
                window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
            ) {
                return routes[i].secondary;
            }
        }
        return activeNavbar;
    };

    return (
        <div className='flex h-full w-full'>
            <Sidebar open={open} onClose={() => setOpen(false)} />
            <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
                <main className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}>
                    <div className="h-full">
                        <Navbar
                            onOpenSidenav={() => setOpen(true)}
                            logoText={"Morhealth"}
                            brandText={currentRoute}
                            secondary={getActiveNavbar(routes)}
                        />
                        <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
                            {children}
                        </div>
                    </div>
                    <div className="p-3">
                        <Footer />
                    </div>
                </main>
            </div>


        </div>
    );
};


export default Layout;