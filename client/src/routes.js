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
    name: "Principal",
    layout: "/morhealth",
    path: "",
    icon: <MdHome className="h-6 w-6" />,
    component: Dashboard,
  },
  {
    name: "NFT Marketplace",
    layout: "/morhealth",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/morhealth",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: DataTables,
  },
  {
    name: "Profile",
    layout: "/morhealth",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: Profile,
  },
];

export default routes;