import React from "react";

// Admin Imports
import Dashboard from "./views/user/default";
import NFTMarketplace from "./views/user/marketplace";
import Profile from "./views/user/profile";
import DataTables from "./views/user/tables";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

import { BiHome } from 'react-icons/bi'
import { TfiWrite } from 'react-icons/tfi'
import { FaAppleAlt, FaDumbbell } from 'react-icons/fa'

const routes = [
  {
    name: "Inicio",
    layout: "/morhealth",
    path: "",
    icon: <BiHome className="h-5 w-5" />,
  },
  {
    name: "Blog",
    layout: "/morhealth",
    path: "blog",
    icon: <TfiWrite className="h-5 w-5" />,
    secondary: true,
  },
  {
    name: "Nutrición",
    layout: "/morhealth",
    icon: <FaAppleAlt className="h-5 w-5" />,
    path: "nutricion",
  },
  {
    name: "Ejercicios",
    layout: "/morhealth",
    path: "ejercicios",
    icon: <FaDumbbell className="h-5 w-5" />,
  },
];

export default routes;