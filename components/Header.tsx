import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-100 h-16 bg-white" style={{zIndex: 9999999}}>
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
                <rect width="256" height="256" rx="60" fill="black"></rect>
                <title>Chatbase Logo Icon</title>
                <path
                  d="M197.9 149.8C196.972 158.975 193.935 167.811 189.025 175.618C184.116 183.424 177.468 189.989 169.6 194.8C163.9 198.3 157.7 201 151.3 202.8L148 165C153 161.4 156.5 155.6 156.9 149.4L197.9 149.7V149.8Z"
                  fill="white"
                ></path>
                <path
                  d="M198 110.3H156.9C157 103.5 153.4 96.9 148 92.8C142.454 88.7651 135.631 86.8817 128.8 87.5C125.8 87.8 122.9 88.5 120.2 89.5L99.6 58.5C111.8 53.3 125.6 51.7 139 52.9C152.793 53.8615 165.987 58.9094 176.9 67.4C183.096 72.8004 188.147 79.3881 191.754 86.7737C195.361 94.1593 197.451 102.193 197.9 110.4L198 110.3Z"
                  fill="white"
                ></path>
                <path
                  d="M151.3 202.8C139.98 205.816 128.138 206.328 116.6 204.3C103.243 202.25 90.7508 196.421 80.6 187.5C56.5 165.2 52.8 124.5 64.4 95.1C67.4053 86.8939 72.0747 79.3977 78.115 73.0821C84.1552 66.7665 91.4359 61.7679 99.5 58.4L120.2 89.4C117.6 90.4 115.2 91.8 112.9 93.6C102.5 101.8 99.9 116.6 100.1 129.9C100.2 142.7 102.9 156.9 113.1 164.7C117.796 168.116 123.398 170.064 129.2 170.3C135.6 170.6 142.2 169.2 147.5 165.5L148 165.1L151.3 202.8Z"
                  fill="#B2AEB9"
                ></path>
              </svg>
              <span className="font-normal text-lg text-zinc-950">Chatbase</span>
            </div>
          </a>
        </div>
        <div className="hidden flex-1 items-center justify-center gap-14 text-sm font-semibold leading-6 text-gray-900 lg:flex">
          <a target="_blank" href="https://affiliates.chatbase.co/signup">
            Affiliates
          </a>
          <a target="_self" href="/pricing">
            Pricing
          </a>
          <nav aria-label="Main" data-orientation="horizontal" dir="ltr" className="relative z-10 flex max-w-max flex-1 items-center justify-center">
            <div style={{ position: 'relative' }}>
              <ul data-orientation="horizontal" className="group flex flex-1 list-none items-center justify-center space-x-1" dir="ltr">
                <li>
                  <button
                    id="radix-:Rd6bt3ta:-trigger-radix-:R1t6bt3ta:"
                    data-state="closed"
                    aria-expanded="false"
                    aria-controls="radix-:Rd6bt3ta:-content-radix-:R1t6bt3ta:"
                    className="group inline-flex w-max items-center justify-center rounded-md bg-white transition-colors hover:text-zinc-900 outline-zinc-950 focus:outline-1 focus:text-zinc-900 disabled:pointer-events-none disabled:opacity-50 dark:hover:text-zinc-50 dark:focus:text-zinc-50 group h-auto p-0 text-sm font-semibold leading-6 text-gray-900 hover:bg-transparent"
                    data-radix-collection-item=""
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
                      className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <div className="absolute left-0 top-full flex justify-center"></div>
          </nav>
        </div>
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
        <div className="lg:hidden">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 disabled:text-zinc-600 h-9 w-9 pointer-events-auto">
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
            >
              <line x1="4" x2="20" y1="8" y2="8" className="origin-top-left transition-transform duration-300"></line>
              <line x1="4" x2="20" y1="16" y2="16" className="origin-bottom-left transition-transform duration-300 ease-in-out"></line>
            </svg>
          </button>
        </div>
      </nav>
      <span
        aria-hidden="true"
        className="block h-[1px] w-full bg-zinc-200 transition-all duration-300 ease-in-out opacity-100 scale-x-100"
      ></span>
    </header>
  );
};

export default Header;
