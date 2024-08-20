"use client"

import React, { useState } from 'react';
import MenuItems from './MenuItem';
// import './MobileMenu.css'; // Ensure your CSS file is linked

const MobileMenu: React.FC = () => {
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    const toggleResources = () => {
        setIsResourcesOpen((prev) => !prev);
    };

    return (
        <div
            role="dialog"
            aria-labelledby="mobile-menu-title"
            aria-describedby="mobile-menu-description"
            className="fixed z-50 bg-white p-6 shadow-lg transition-all ease-in-out duration-500 inset-x-0 top-16 h-full flex flex-col items-start justify-start gap-2"
        >
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full flex-row gap-3 rounded-md p-2 text-start text-base font-semibold outline-0 transition-all duration-75 ease-in-out hover:bg-zinc-100 hover:text-violet-700"
                href="https://affiliates.chatbase.co/signup"
            >
                Affiliates
            </a>

            <a
                className="flex w-full flex-row gap-3 rounded-md p-2 text-start text-base font-semibold outline-0 transition-all duration-75 ease-in-out hover:bg-zinc-100 hover:text-violet-700"
                href="/pricing"
            >
                Pricing
            </a>

            <div className="w-full border-b border-none p-0">
                <h3 className="flex">
                    <button
                        type="button"
                        aria-controls="resources-section"
                        aria-expanded={isResourcesOpen}
                        onClick={toggleResources}
                        className="group/accordion flex w-full items-center justify-between text-sm font-medium outline-none transition-all duration-300 ease-in-out hover:bg-zinc-100 hover:text-violet-700 p-2"
                    >
                        <span>Resources</span>
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
                            className={`lucide lucide-chevron-down h-6 w-6 transition-transform duration-300 ease-in-out ${isResourcesOpen ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </button>
                </h3>
                {isResourcesOpen && <MenuItems isMobile={true} /> }
            </div>

            <a
                className="flex w-full flex-row gap-3 rounded-md p-2 text-start text-base font-semibold outline-0 transition-all duration-75 ease-in-out hover:bg-zinc-100 hover:text-violet-700 mt-2 border-t"
                href="/auth/signin"
            >
                Sign in
            </a>
        </div>
    );
};

export default MobileMenu;
