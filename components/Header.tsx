"use client";

import React, { useState } from "react";
import MobileMenu from "./MoblieMenu";
import "./MenuIcon.css"; // CSS file for animations
import MenuItems from "./MenuItem";
// import "./Header.css"; //'/'/'/ CSS file for menu animation

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesHovered, setIsResourcesHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header
      className="sticky inset-x-0 top-0 z-100 h-16 bg-white"
      style={{ zIndex: 9999999 }}
    >
      <nav className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between px-6">
        <div className="flex flex-1 items-center">
          <a className="pointer-events-auto inline-block" href="/">
            <div className="flex items-center gap-1 text-zinc-800">
              <span className="sr-only">Chatbase logo</span>
              <svg
                width="256"
                height="256"
                viewBox="0 0 256 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
              >
                {/* SVG content for logo */}
              </svg>
              <span className="font-normal text-lg text-zinc-950">Chatbase</span>
            </div>
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden flex-1 items-center justify-center gap-14 text-sm font-semibold leading-6 text-gray-900 lg:flex">
          <a target="_blank" href="https://affiliates.chatbase.co/signup">
            Affiliates
          </a>
          <a target="_self" href="/pricing">
            Pricing
          </a>
          <nav
            aria-label="Main"
            className="relative z-10 flex max-w-max flex-1 items-center justify-center"
          >
            <button
              className="group inline-flex w-max items-center justify-center text-sm font-semibold leading-6 text-gray-900"
              onMouseEnter={() => setIsResourcesHovered(true)}
              onMouseLeave={() => setIsResourcesHovered(false)}
            >
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className= {`lucide lucide-chevron-down ml-1 h-3 w-3 transition duration-150 ${isResourcesHovered ? "rotate-180" : "rotate-0 "}`}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            {/* Menu Items */}
            <div
              className={`absolute z-20 mt-2 bg-white border border-gray-300 shadow-lg transition-opacity duration-300 ease-in-out ${isResourcesHovered ? "opacity-100" : "opacity-0"}`}
              style={{ top: '100%', left: 0 }}
            >
              <MenuItems /> {/* Replace with actual menu items */}
            </div>
          </nav>
        </div>

        {/* Desktop buttons */}
        <div className="hidden flex-1 items-center justify-end lg:flex">
          <div className="transition-opacity animate-in fade-in">
            <a className="text-sm font-semibold leading-6 text-zinc-900" href="/auth/signin">
              Sign in
            </a>
            <a
              className="ml-4 rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
              href="/auth/signup"
            >
              Try for Free <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            className={`menu-button ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-current"
            >
              <line className="line1" x1="4" y1="8" x2="20" y2="8" />
              <line className="line2" x1="4" y1="16" x2="20" y2="16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {isMenuOpen && <MobileMenu />}
      </div>

      <span
        aria-hidden="true"
        className="block h-[1px] w-full bg-zinc-200 transition-all duration-300 ease-in-out opacity-100 scale-x-100"
      ></span>
    </header>
  );
};

export default Header;
