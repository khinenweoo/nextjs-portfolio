"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Exp.",
    path: "#exp",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-30 bg-[#111]/80 backdrop-blur-sm xl:px-20">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-4">
        <Link
          href={"/"}
          className="text-lg md:text-3xl text-[#04aecd] font-extrabold"
        >
          K
        </Link>

        {/* mobile menu */}
        <div className="mobile-menu block md:hidden">
          {
            !navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-centertext-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-7 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5"/>
              </button>
            )
          }
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;