import Bridge from "../../assets/icons/bridge.svg";
import Farm from "../../assets/icons/Farm.svg";
import Governace from "../../assets/icons/Governace.svg";
import Home from "../../assets/icons/home.svg";
import Trade from "../../assets/icons/Trade.svg";
import React from "react";

export const menu = [
  {
    icon: Home,
    title: "Dashboard",
    items: [],
  },
  {
    icon: Bridge,
    title: "Earn",
    items: [
      {
        title: "All Farms ",
        items: [],
        key: 0,
      },
      {
        title: "My Stakes",
        items: [],
        key: 1,
      },
    ],
  },
  {
    icon: Trade,
    title: "Trade",
    items: [
      {
        title: "Exchange ",
        items: [],
      },
      {
        title: "Liquidity",
        items: [],
      },
    ],
  },
  {
    icon: Bridge,
    title: "Bridge",
  },
  {
    icon: Governace,
    title: "Governance",
  },
  {
    title: "Referral",
  },
];
