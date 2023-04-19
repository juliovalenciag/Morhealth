// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

import {AiFillHeart} from 'react-icons/ai'

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal,  UilHeartbeat, UilDumbbell, UilRestaurant } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Salud",
    color: {
      backGround: "#031728",
      boxShadow: "12px 12px 35px 0px rgba(0,0,0,0.75)",
    },
    barValue: 70,
    value: "80 bpm",
    png: UilHeartbeat,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Ejercicios",
    color: {
      backGround: "#223159",
      boxShadow: "12px 12px 35px 0px rgba(0,0,0,0.75)",
    },
    barValue: 80,
    value: "3,000 pasos",
    png: UilDumbbell,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Nutrición",
    color: {
      backGround:
        "#216B91",
      boxShadow: "12px 12px 35px 0px rgba(0,0,0,0.75)",
    },
    barValue: 60,
    value: "800 kcal",
    png: UilRestaurant,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const UpdatesData = [
  {
    img: img1,
    name: "Luaish",
    noti: "ha publicado 10 ejercicios para trabajar pecho",
    time: "hace 2 semanas",
  },
  {
    img: img2,
    name: "Sawalito",
    noti: "ha publicado 6 desayunos vegetarianos",
    time: "hace 4 días",
  },
  {
    img: img3,
    name: "Dayana",
    noti: "ha publicado Tips para dormir mejor",
    time: "hace 6 días",
  },
];
