import React from "react";
import Dropdown from "./dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
    IoMdNotificationsOutline,
    IoMdInformationCircleOutline,
} from "react-icons/io";
import avatar from "./../assets/img/avatars/avatar4.png";
import mhmockup from "./../assets/img/mockup1.png";

const NavbarEjercicios = (props) => {
    const { onOpenSidenav, brandText } = props;
    const [darkmode, setDarkmode] = React.useState(false);

    return (
        <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
            <div className="ml-[6px]">
                <div className="h-6 w-[224px] pt-1">

                    <a
                        className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                        href=" "
                    >
                        Morhealth
                        <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
                            {" "}
                            /{" "}
                        </span>
                    </a>

                    <Link
                        className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                        to="#"
                    >
                        {brandText}
                    </Link>
                </div>
                <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
                    <Link
                        to="#"
                        className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
                    >
                        {brandText}
                    </Link>
                </p>
            </div>

            <div className="relative mt-3 flex h-16 w-full items-center justify-between gap-2 px-4 bg-white dark:!bg-navy-800 rounded-full shadow-xl md:w-[550px] md:flex-grow-0 md:gap-1 xl:w-[900px] xl:gap-2">
                <div className="flex gap-8 ">
                    <p className="cursor-pointer text-gray-800 dark:text-white">General</p>
                    <p className="cursor-pointer text-gray-800 dark:text-white">Nutricion</p>
                    <p className="cursor-pointer text-gray-800 dark:text-white">Ejercicios</p>
                    <p className="cursor-pointer text-gray-800 dark:text-white">Salud</p>
                </div>
                <div className="flex items-center gap-4">
                    <span
                        className="cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
                        onClick={onOpenSidenav}
                    >
                        <FiAlignJustify className="h-5 w-5" />
                    </span>

                </div>

                <Dropdown
                    button={
                        <p className="cursor-pointer">
                            <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
                        </p>
                    }
                    animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
                    children={
                        <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
                            <div className="flex items-center justify-between">
                                <p className="text-base font-bold text-navy-700 dark:text-white">
                                    Notificaciones
                                </p>
                                <p className="text-sm font-bold text-navy-700 dark:text-white">
                                    Marcar como leídas
                                </p>
                            </div>

                            <button className="flex w-full items-center">
                                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                                    <BsArrowBarUp />
                                </div>
                                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                    <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                                        Rutina de ejercicio
                                    </p>
                                    <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                                        Mantente activo
                                    </p>
                                </div>
                            </button>

                            <button className="flex w-full items-center">
                                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                                    <BsArrowBarUp />
                                </div>
                                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                    <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                                        Dieta
                                    </p>
                                    <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                                        Recuerda serguir tu dieta
                                    </p>
                                </div>
                            </button>
                        </div>
                    }
                    classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
                />



                <Dropdown
                    button={
                        <p className="cursor-pointer">
                            <IoMdInformationCircleOutline className="h-4 w-4 text-gray-600 dark:text-white" />
                        </p>
                    }
                    children={
                        <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                            <div
                                style={{
                                    backgroundImage: `url(${mhmockup})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                                className="mb-2 aspect-video w-full rounded-lg"
                            />
                            <a
                                target="blank"
                                href="https://play.google.com/store/games?hl=en&gl=US&pli=1"
                                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
                            >
                                Descarga morhealth Android
                            </a>
                            <a
                                target="blank"
                                href="https://www.youtube.com/"
                                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 dark:!border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10"
                            >
                                Ver documentación
                            </a>
                            <a
                                target="blank"
                                href="https://www.youtube.com/"
                                className="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200 hover:text-navy-700 dark:text-white dark:hover:text-white"
                            >
                                Tutorial
                            </a>
                        </div>
                    }
                    classNames={"py-2 top-6 -left-[250px] md:-left-[330px] w-max"}
                    animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
                />
                <div
                    className="cursor-pointer text-gray-600"
                    onClick={() => {
                        if (darkmode) {
                            document.body.classList.remove("dark");
                            setDarkmode(false);
                        } else {
                            document.body.classList.add("dark");
                            setDarkmode(true);
                        }
                    }}
                >
                    {darkmode ? (
                        <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
                    ) : (
                        <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
                    )}
                </div>



                <Dropdown
                    button={
                        <img
                            className="h-10 w-10 rounded-full"
                            src={avatar}
                            alt="Elon Musk"
                        />
                    }
                    children={
                        <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                            <div className="mt-3 ml-4">
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                                        👋 Bienvenido, Sawalito
                                    </p>{" "}
                                </div>
                            </div>
                            <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

                            <div className="mt-3 ml-4 flex flex-col">
                                <Link
                                    to='/morhealth/perfil'
                                    className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                                >
                                    Perfil
                                </Link>
                                <a
                                    href=" "
                                    className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                                >
                                    Configuración
                                </a>
                                <a
                                    href=" "
                                    className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                                >
                                    Cerrar sesión
                                </a>
                            </div>
                        </div>
                    }
                    classNames={"py-2 top-8 -left-[180px] w-max"}
                />
            </div>
        </nav>
    );
};

export default NavbarEjercicios;
