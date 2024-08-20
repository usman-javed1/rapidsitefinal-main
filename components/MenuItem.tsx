import React from 'react';

interface Props {
    isMobile?: boolean
}

const MenuItems: React.FC<Props> = ({ isMobile }) => {
    return (
        <div className="pb-4 pt-0">
            <a
                target="_self"
                className="group/item flex  items-start gap-2 rounded-md p-2 transition-colors duration-300 ease-in-out hover:bg-zinc-100"
                type="button"
                href="/guide"
            >
                <div className="rounded-md border border-zinc-300 bg-white p-2 transition-colors duration-300 ease-in-out group-hover/item:border-zinc-500">
                    <span className="sr-only">Guide</span>
                    {!isMobile && <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="12 12 16 16"
                        fill="none"
                        className="h-6 w-6 text-zinc-600 transition-transform duration-500 ease-in-out group-hover/item:rotate-3 group-hover/item:scale-125 group-hover/item:text-zinc-900"
                    >
                        <g>
                            <g>
                                <line
                                    className="stroke-current stroke-[0.6498]"
                                    x1="19.82"
                                    y1="15.51"
                                    x2="19.82"
                                    y2="26.23"
                                ></line>
                                <path
                                    className="stroke-current stroke-[0.6498]"
                                    d="M19.82,15.51l-5.87-1.69c-0.8-0.23-1.6,0.37-1.6,1.2v7.4c0,0.99,0.65,1.85,1.6,2.12l5.87,1.69l5.87-1.69 c0.94-0.27,1.6-1.14,1.6-2.12v-7.39c0-0.84-0.8-1.44-1.6-1.21L19.82,15.51"
                                ></path>
                                <line
                                    className="stroke-current stroke-[0.6399]"
                                    x1="24.91"
                                    y1="16.81"
                                    x2="21.98"
                                    y2="17.65"
                                ></line>
                                <line
                                    className="stroke-current stroke-[0.2753]"
                                    x1="24.91"
                                    y1="18.5"
                                    x2="21.98"
                                    y2="19.35"
                                ></line>
                            </g>
                        </g>
                    </svg>}
                </div>
                <div className="flex flex-col items-start gap-0.5">
                    <span className="text-sm font-semibold leading-6 text-gray-700 group-hover/item:text-zinc-900">
                        Guide
                    </span>
                    <span className="min-w-[260px] text-xs leading-5 text-zinc-500 group-hover/item:text-zinc-700">
                        Find out everything on how to use chatbase, and unlock its full potential.
                    </span>
                </div>
            </a>
            <a
                target="_self"
                className="group/item flex w-full items-start gap-2 rounded-md p-2 transition-colors duration-300 ease-in-out hover:bg-zinc-100"
                type="button"
                href="/blog"
            >
                <div className="rounded-md border border-zinc-300 bg-white p-2 transition-colors duration-300 ease-in-out group-hover/item:border-zinc-500">
                    <span className="sr-only">Blog</span>
                    {!isMobile && <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="8 8 23 23"
                        fill="none"
                        className="h-6 w-6 text-zinc-600 transition-transform duration-500 ease-in-out group-hover/item:rotate-3 group-hover/item:scale-125 group-hover/item:text-zinc-900"
                    >
                        <g>
                            <g>
                                <line
                                    className="stroke-current stroke-[0.6]"
                                    x1="8.81"
                                    y1="26.07"
                                    x2="31.19"
                                    y2="26.07"
                                ></line>
                                <line
                                    className="stroke-current stroke-[0.6]"
                                    x1="8.81"
                                    y1="26.66"
                                    x2="31.19"
                                    y2="26.66"
                                ></line>
                                <g>
                                    <path
                                        className="stroke-current stroke-[0.6]"
                                        d="M12.77,25.38l-1.26-0.76c-0.28-0.17-0.37-0.54-0.2-0.82l5.35-8.86c0.11-0.19,0.36-0.25,0.55-0.14l1.6,0.96 c0.19,0.11,0.25,0.36,0.14,0.55l-5.35,8.86C13.42,25.46,13.05,25.55,12.77,25.38z"
                                    ></path>
                                    <path
                                        className="stroke-current stroke-[0.6]"
                                        d="M21.84,25.47h-1.87c-0.21,0-0.39-0.17-0.39-0.39v-9.73c0-0.21,0.17-0.39,0.39-0.39h1.89 c0.21,0,0.39,0.17,0.39,0.39v9.71C22.25,25.29,22.07,25.47,21.84,25.47z"
                                    ></path>
                                    <path
                                        className="stroke-current stroke-[0.6]"
                                        d="M24.99,25.47h-1.7c-0.25,0-0.45-0.2-0.45-0.45v-8.19c0-0.2,0.16-0.36,0.36-0.36h1.95 c0.2,0,0.36,0.16,0.36,0.36v8.12C25.51,25.24,25.28,25.47,24.99,25.47z"
                                    ></path>
                                    <path
                                        className="stroke-current stroke-[0.6]"
                                        d="M28.36,25.47h-1.77c-0.27,0-0.49-0.22-0.49-0.49V13.76c0-0.23,0.19-0.41,0.41-0.41h1.84 c0.23,0,0.41,0.19,0.41,0.41v11.31C28.76,25.29,28.58,25.47,28.36,25.47z"
                                    ></path>
                                </g>
                            </g>
                        </g>
                    </svg>}
                </div>
                <div className="flex flex-col items-start gap-0.5">
                    <span className="text-sm font-semibold leading-6 text-gray-700 group-hover/item:text-zinc-900">
                        Blog
                    </span>
                    <span className="min-w-[260px] text-xs leading-5 text-zinc-500 group-hover/item:text-zinc-700">
                        Learn more about chatbase by reading our latest articles.
                    </span>
                </div>
            </a>
            <a
                target="_blank"
                className="group/item flex w-full items-start gap-2 rounded-md p-2 transition-colors duration-300 ease-in-out hover:bg-zinc-100"
                type="button"
                href="https://docs.chatbase.co/docs"
            >
                <div className="rounded-md border border-zinc-300 bg-white p-2 transition-colors duration-300 ease-in-out group-hover/item:border-zinc-500">
                    <span className="sr-only">API</span>
                    {!isMobile && <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="10.25 10.25 19.75 19.75"
                        fill="current"
                        className="h-6 w-6 text-zinc-600 transition-transform duration-500 ease-in-out group-hover/item:rotate-3 group-hover/item:scale-125 group-hover/item:text-zinc-900"
                    >
                        <g>
                            <g>
                                <path d="M22.25,14.58c-0.07,0-0.14,0.01-0.21,0.02v0.54L22.25,14.58L22.25,14.58L22.25,14.58z M17.68,24.13c0.02,0,0.03,0,0.05,0 L17.68,24.13L17.68,24.13z"></path>
                                <path d="M22.03,14.6v0.54l-0.41,1.06l-0.11,0.29l-2.63,6.81c-0.07,0.18-0.18,0.34-0.31,0.47c-0.09,0.08-0.19,0.16-0.3,0.21 c-0.16,0.09-0.35,0.14-0.54,0.14h-0.05l3.35-8.71C21.2,14.98,21.59,14.68,22.03,14.6z"></path>
                                <path d="M22.1,16.32c-0.02,0-0.04,0-0.07,0l-0.09,0.21L18.9,24.5c-0.14,0.38-0.62,0.67-1,0.73l-0.16,0.2h0.16 c0.52,0,1-0.34,1.19-0.85l3.16-8.23L22.1,16.32z"></path>
                                <polygon points="22.25,14.58 22.25,16.34 22.03,16.34 22.03,14.62"></polygon>
                                <polygon points="17.89,24.07 17.89,25.42 17.68,25.42 17.68,24.13"></polygon>
                            </g>
                            <g>
                                <path d="M28.91,19.84l-5.78,2.97V21.9l5.19-2.58v-0.03l-5.19-2.58V15.8l5.78,2.97c0.2,0.1,0.33,0.31,0.33,0.54v0 C29.24,19.53,29.11,19.73,28.91,19.84z"></path>
                                <path className="fill-none stroke-current stroke-[0.2]" d="M23.24,23.24v0.89l5.56-2.91c0.19-0.1,0.32-0.3,0.32-0.53 M27.02,20.07l-3.79-1.92v-0.05v-0.84"></path>
                                <line className="fill-none stroke-current stroke-[0.2]" x1="23.24" y1="24.13" x2="23.24" y2="22.01"></line>
                                <line className="fill-none stroke-current stroke-[0.2]" x1="23.24" y1="18.09" x2="23.24" y2="15.97"></line>
                                <line className="fill-none stroke-current stroke-[0.2]" x1="29.11" y1="20.69" x2="29.13" y2="19.3"></line>
                            </g>
                            <g>
                                <path d="M11.09,19.84l5.78,2.97V21.9l-5.19-2.58v-0.03l5.19-2.58V15.8l-5.78,2.97c-0.2,0.1-0.33,0.31-0.33,0.54v0 C10.76,19.53,10.89,19.73,11.09,19.84z"></path>
                                <path className="fill-none stroke-current stroke-[0.2]" d="M16.76,23.24v0.89l-5.56-2.91c-0.19-0.1-0.32-0.3-0.32-0.53 M12.98,20.07l3.79-1.92v-0.05v-0.84"></path>
                                <line className="fill-none stroke-current stroke-[0.2]" x1="16.76" y1="24.13" x2="16.76" y2="22.01"></line>
                                <line className="fill-none stroke-current stroke-[0.2]" x1="16.76" y1="18.09" x2="16.76" y2="15.97"></line>
                                <line className="fill-none stroke-current stroke-[0.2]" x1="10.89" y1="20.69" x2="10.87" y2="19.3"></line>
                            </g>
                        </g>
                    </svg>}
                </div>
                <div className="flex flex-col items-start gap-0.5">
                    <span className="text-sm font-semibold leading-6 text-gray-700 group-hover/item:text-zinc-900">
                        API
                    </span>
                    <span className="min-w-[260px] text-xs leading-5 text-zinc-500 group-hover/item:text-zinc-700">
                        Explore our API and learn how to integrate chatbase with your app.
                    </span>
                </div>
            </a>
            <a
                target="_self"
                className="group/item flex w-full items-start gap-2 rounded-md p-2 transition-colors duration-300 ease-in-out hover:bg-zinc-100"
                type="button"
                href="/changelog"
            >
                <div className="rounded-md border border-zinc-300 bg-white p-2 transition-colors duration-300 ease-in-out group-hover/item:border-zinc-500">
                    <span className="sr-only">Changelog</span>
                    {!isMobile && <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="current"
                        className="h-6 w-6 text-zinc-600 transition-transform duration-500 ease-in-out group-hover/item:rotate-3 group-hover/item:scale-125 group-hover/item:text-zinc-900"
                    >
                        <path
                            d="M12.5 8v3.8l1.85 1.85a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1-.15-.35V8a.5.5 0 0 1 1 0Zm-.47-5.5A9.43 9.43 0 0 0 4.5 6.26V3a.5.5 0 0 0-1 0v4c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1H5.57c1.6-1.9 3.95-3 6.46-3a8.5 8.5 0 0 1 0 17 8.38 8.38 0 0 1-7.58-4.72.5.5 0 1 0-.9.44 9.38 9.38 0 0 0 8.48 5.28 9.5 9.5 0 0 0 0-19Z"
                            fill="currentColor"
                        ></path>
                    </svg>}
                </div>
                <div className="flex flex-col items-start gap-0.5">
                    <span className="text-sm font-semibold leading-6 text-gray-700 group-hover/item:text-zinc-900">
                        Changelog
                    </span>
                    <span className="min-w-[260px] text-xs leading-5 text-zinc-500 group-hover/item:text-zinc-700">
                        Stay up to date with the latest updates and features.
                    </span>
                </div>
            </a>
        </div>
    );
};

export default MenuItems;
