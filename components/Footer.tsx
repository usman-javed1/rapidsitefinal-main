import React from 'react';
import FooterLinks from './FooterLinks';
import LowerFooter from './LowerFooter';

const Footer: React.FC = () => {
    return (
        <section className="mx-auto w-full max-w-[98.7vw] px-4 grid items-center gap-10 md:grid-cols-2 md:items-start bg-black ">
            <div className="flex flex-col items-center gap-16 md:items-start">
                <div className="flex flex-col items-center gap-4 md:items-start">
                    <div className="flex items-center gap-1 text-zinc-800">
                        <span className="sr-only">Chatbase logo</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="37"
                            viewBox="0 0 36 37"
                            fill="none"
                            className="h-7 w-7"
                        >
                            <title>Chatbase Logo</title>
                            <path
                                d="M35.6817 9.33204V28.057C35.6817 32.7383 31.8877 36.5323 27.2064 36.5323H8.47215C3.79401 36.5323 0 32.7383 0 28.0601V9.32894C0 4.6477 3.79711 0.850586 8.47835 0.850586H27.2002C31.8846 0.850586 35.6817 4.6477 35.6817 9.33204Z"
                                fill="#FAFAFA"
                            />
                            <path
                                d="M27.5818 21.5886C27.3894 24.1417 25.8135 26.4994 23.6451 27.8582C22.8509 28.3545 21.9854 28.7237 21.0857 28.9719L20.6328 23.726C21.3246 23.2142 21.821 22.4107 21.8706 21.5514C23.7754 21.5638 25.6801 21.5762 27.5849 21.5886H27.5818Z"
                                fill="#09090B"
                            />
                            <path
                                d="M27.5876 16.0858C25.6797 16.0858 23.7781 16.0858 21.8702 16.0858C21.8857 15.1397 21.3863 14.2183 20.6324 13.6444C19.8786 13.0705 18.8983 12.8347 17.9552 12.9061C17.5457 12.9371 17.1362 13.0271 16.7516 13.176L13.8789 8.85458C15.5851 8.13797 17.5147 7.9053 19.3698 8.08523C21.2777 8.26826 23.1825 8.8825 24.656 10.1048C26.4119 11.5597 27.4232 13.8057 27.5845 16.0827L27.5876 16.0858Z"
                                fill="#09090B"
                            />
                            <path
                                d="M21.0827 28.9718C19.5192 29.3968 17.8502 29.4589 16.2495 29.1828C14.4099 28.8663 12.623 28.1063 11.2456 26.8437C7.87038 23.7384 7.36162 18.0706 8.98408 13.9664C9.55178 12.527 10.4359 11.2085 11.6303 10.2127C12.3066 9.64502 13.0697 9.1983 13.8794 8.85706L16.752 13.1784C16.3891 13.318 16.0509 13.5104 15.7438 13.7492C14.292 14.9033 13.9352 16.96 13.9538 18.8183C13.9693 20.6051 14.3385 22.5813 15.7624 23.6608C16.4046 24.1479 17.2049 24.3992 18.0115 24.4426C18.9019 24.4922 19.8232 24.2906 20.5553 23.7787C20.5802 23.7601 20.6081 23.7415 20.6329 23.7229L21.0858 28.9687L21.0827 28.9718Z"
                                fill="#09090B"
                            />
                        </svg>
                        <span className="font-normal text-lg text-white">Chatbase</span>
                    </div>
                    <p className="text-center font-medium text-zinc-400 leading-5">
                        Custom ChatGPT for your business
                    </p>
                </div>
                <div className="grid w-full grid-cols-4 gap-4 md:w-auto md:grid-cols-6">
                    <a className="contents" target="_blank" href="/help">
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 px-4 py-1 col-span-4 h-11 text-base md:col-span-2"
                            aria-label="Help"
                        >
                            Contact
                        </button>
                    </a>
                    <a className="contents" target="_blank" href="https://www.linkedin.com/company/chatbase-co/">
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border bg-transparent shadow-sm dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 disabled:bg-zinc-100/60 h-11 rounded-xl border-zinc-800 p-3 text-zinc-400 md:col-span-1 hover:bg-zinc-800/90 hover:text-white"
                            aria-label="Linkedin"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </a>
                    <a className="contents" target="_blank" href="https://www.instagram.com/chatbase_co/">
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border bg-transparent shadow-sm dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 disabled:bg-zinc-100/60 h-11 rounded-xl border-zinc-800 p-3 text-zinc-400 md:col-span-1 hover:bg-zinc-800/90 hover:text-white"
                            aria-label="Instagram"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2.163c3.5 0 3.892.013 5.263.076 1.71.074 2.73.371 3.393 1.034.662.662.96 1.682 1.034 3.393.063 1.371.076 1.762.076 5.263 0 3.5-.013 3.892-.076 5.263-.074 1.71-.371 2.73-1.034 3.393-.662.662-1.682.96-3.393 1.034-1.371.063-1.762.076-5.263.076s-3.892-.013-5.263-.076c-1.71-.074-2.73-.371-3.393-1.034-.662-.662-.96-1.682-1.034-3.393-.063-1.371-.076-1.762-.076-5.263s.013-3.892.076-5.263c.074-1.71.371-2.73 1.034-3.393.662-.662 1.682-.96 3.393-1.034 1.371-.063 1.762-.076 5.263-.076zm0-2.163c-3.591 0-4.04.014-5.457.078-1.357.063-2.571.341-3.575.945-1.003.6-1.749 1.445-2.349 2.449-.604 1.004-.881 2.219-.945 3.575-.064 1.418-.078 1.868-.078 5.457s.014 4.04.078 5.457c.063 1.357.341 2.571.945 3.575.6 1.003 1.445 1.749 2.449 2.349 1.004.604 2.219.881 3.575.945 1.418.064 1.868.078 5.457.078s4.04-.014 5.457-.078c1.357-.063 2.571-.341 3.575-.945 1.003-.6 1.749-1.445 2.349-2.449.604-1.004.881-2.219.945-3.575.064-1.418.078-1.868.078-5.457s-.014-4.04-.078-5.457c-.063-1.357-.341-2.571-.945-3.575-.6-1.003-1.445-1.749-2.449-2.349-1.004-.604-2.219-.881-3.575-.945-1.418-.064-1.868-.078-5.457-.078zm0 4.515a6.229 6.229 0 0 0-6.213 6.213 6.229 6.229 0 0 0 6.213 6.213 6.229 6.229 0 0 0 6.213-6.213 6.229 6.229 0 0 0-6.213-6.213zm0 10.657a4.444 4.444 0 0 1-4.444-4.444 4.444 4.444 0 0 1 4.444-4.444 4.444 4.444 0 0 1 4.444 4.444 4.444 4.444 0 0 1-4.444 4.444zm4.877-8.84a1.422 1.422 0 0 1-1.421 1.421 1.422 1.422 0 0 1-1.421-1.421 1.422 1.422 0 0 1 1.421-1.421 1.422 1.422 0 0 1 1.421 1.421z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </a>
                    <a className="contents" target="_blank" href="https://twitter.com/chatbase_co">
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border bg-transparent shadow-sm dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 disabled:bg-zinc-100/60 h-11 rounded-xl border-zinc-800 p-3 text-zinc-400 md:col-span-1 hover:bg-zinc-800/90 hover:text-white"
                            aria-label="Twitter"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M23.5 5.5305c-.9.3972-1.8605.6671-2.865 1.0413 1.0356-.6178 1.8701-1.605 2.204-2.7182-.964.5718-2.0302.9906-3.1634 1.2154-.9052-.9512-2.1912-1.5486-3.6268-1.5486-2.7396 0-4.9524 2.214-4.9524 4.9525 0 .3894.0437.7706.1254 1.1369-4.1188-.2053-7.77-2.1828-10.22-5.19-.426.7323-.6696 1.5814-.6696 2.4906 0 1.719 0.8737 3.2317 2.198 4.1223-.8086-.0262-1.5671-.2476-2.2276-.6152v.0618c0 2.3956 1.705 4.3918 3.959 4.8462-.4158.1126-.8545.1732-1.3001.1732-.3183 0-.6293-.0326-.9331-.0907.6292 1.952 2.4461 3.3752 4.5998 3.4164-1.6847 1.3195-3.8091 2.1046-6.1158 2.1046-.3974 0-.7911-.0235-1.1794-.0687 2.1833 1.4011 4.7797 2.2116 7.5583 2.2116 9.0712 0 14.0375-7.5265 14.0375-14.0585 0-.2144-.0041-.4274-.0119-.6405.964-.694 1.8058-1.5593 2.47-2.5454z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </a>
                </div>

            </div>
            <FooterLinks />
            <LowerFooter />
        </section>
    );
};

export default Footer;
