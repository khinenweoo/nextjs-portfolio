"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

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
    <nav className="fixed mx-auto top-0 left-0 right-0 z-40 bg-[#111]/80 backdrop-blur-sm xl:px-20">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-4">
        <Link
          href={"/"}
          className="text-xl md:text-xl text-pretty italic text-[#f3f3f3] font-bold"
        >
          K <span className="text-purple">N</span> O
        </Link>

        {/* mobile menu */}
        <div className="mobile-menu overflow-hidden block md:hidden transition-all duration-200 ease-in-out">
          {
            !navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-centertext-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-7 w-5 transition-all duration-300 ease-in" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 border-slate-200 text-slate-200 hover:text-white hover:border-white "
              >
                <XMarkIcon className="h-6 w-6 transition-all duration-300 ease-in"/>

              </button>
            )
          }
        </div>

        <div className="menu rounded-3xl hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <div className="w-full h-screen overflow-hidden">
          <ul className="rounded-3xl flex flex-col py-4 pb-8 pl-9 font-semibold items-center transition-all duration-300 ease-in top-[2rem]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link 
                    onClick={() => setNavbarOpen(false)}
                    href={link.path} 
                    className="block py-2 pl-3 pr-3 text-purple md:text-lg sm:text-xl rounded md:p-0 hover:text-white"
                >{link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;