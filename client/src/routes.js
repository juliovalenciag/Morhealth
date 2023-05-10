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

const routes = [
  {
    name: "Inicio",
    layout: "/morhealth",
    path: "",
    icon: <MdHome className="h-6 w-6" />,
    component: Dashboard,
  },
  {
    name: "Blog",
    layout: "/morhealth",
    path: "blog",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Nutrición",
    layout: "/morhealth",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "nutricion",
    component: DataTables,
  },
  {
    name: "Ejercicios",
    layout: "/morhealth",
    path: "ejercicios",
    icon: <MdPerson className="h-6 w-6" />,
    component: Profile,
  },
];

export default routes;