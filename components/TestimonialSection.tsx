import React from 'react';

const TestimonialsSection: React.FC = () => {
    return (
        <section className="mx-auto flex w-full max-w-screen-xl px-4 mt-32">
            <div className="relative flex w-full flex-col gap-7 z-30">
                <div className="z-30 flex flex-col items-start gap-1">
                    <h4 className="bg-pink-500 bg-clip-text text-sm font-semibold text-transparent">
                        WHAT PEOPLE ARE SAYING
                    </h4>
                    <p className="text-xl font-medium text-white">
                        Chatbase is the easiest way to create a chatbot for your website. Don't take our word for it!{' '}
                        <strong>Here's what people are saying.</strong>
                    </p>
                </div>
                <div className="grid grid-cols-1 grid-rows-1 gap-4 text-sm leading-6 text-zinc-50 sm:grid-cols-2 xl:grid-flow-col xl:grid-cols-4">
                    <figure className="col-span-2 hidden bg-zinc-900 ring-zinc-900 ring-opacity-50 sm:block sm:rounded-2xl sm:shadow-lg sm:ring-1 xl:col-start-2 xl:row-end-1">
                        <div className="flex justify-end pr-6 pt-6">
                            <a
                                aria-label="Twitter Account"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://twitter.com/I4NW/status/1631353148903239680"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    className="text-[#1DA1F2]"
                                >
                                    <g>
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <blockquote className="p-10 text-xl font-semibold leading-8 tracking-tight text-zinc-50">
                            <p>
                                “For anyone on the fence - in the 2 hours since this tweet I've tested, set up and
                                gone live on three separate websites with Chatbase. Still need to do some light
                                tweaking of the base prompt but very happy with the results.”
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center gap-x-4 border-t border-zinc-900 border-opacity-50 px-6 py-4">
                            <div className="flex-auto">
                                <div className="font-semibold text-zinc-50">Ian Whiscombe</div>
                                <div className="text-zinc-400">Founder @StockBuddy</div>
                            </div>
                        </figcaption>
                    </figure>
                    <div className="space-y-8 xl:contents xl:space-y-0">
                        <div className="xl:row-span-2 space-y-8">
                            <figure className="rounded-2xl bg-zinc-900 p-6 shadow-lg ring-1 ring-zinc-900 ring-opacity-50">
                                <div className="flex justify-end">
                                    <a
                                        aria-label="Twitter Account"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://twitter.com/jacobandreou/status/1632423894832545794"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            className="text-[#1DA1F2]"
                                        >
                                            <g>
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <blockquote className="text-zinc-50">
                                    <p>“This is awesome”</p>
                                </blockquote>
                                <figcaption className="mt-6 flex items-center gap-x-4">
                                    <div>
                                        <div className="font-semibold text-zinc-50">Jacob Andreou</div>
                                        <div className="text-zinc-400">SVP @Snap</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="xl:row-start-1 space-y-8">
                            <figure className="rounded-2xl bg-zinc-900 p-6 shadow-lg ring-1 ring-zinc-900 ring-opacity-50">
                                <div className="flex justify-end">
                                    <a
                                        aria-label="Twitter Account"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://twitter.com/grigoriy_kogan/status/1632624160558940161"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            className="text-[#1DA1F2]"
                                        >
                                            <g>
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <blockquote className="text-zinc-50">
                                    <p>“Another overpowered project built with the 🪄 OP stack”</p>
                                </blockquote>
                                <figcaption className="mt-6 flex items-center gap-x-4">
                                    <div>
                                        <div className="font-semibold text-zinc-50">Greg Kogan</div>
                                        <div className="text-zinc-400">VP @pinecone</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="space-y-8 xl:contents xl:space-y-0">
                        <div className="xl:row-start-1 space-y-8">
                            <figure className="rounded-2xl bg-zinc-900 p-6 shadow-lg ring-1 ring-zinc-900 ring-opacity-50">
                                <div className="flex justify-end">
                                    <a
                                        aria-label="Twitter Account"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://twitter.com/OfficialLoganK/status/1632468116990054401"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            className="text-[#1DA1F2]"
                                        >
                                            <g>
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <blockquote className="text-zinc-50">
                                    <p>“This is awesome, thanks for building it!”</p>
                                </blockquote>
                                <figcaption className="mt-6 flex items-center gap-x-4">
                                    <div>
                                        <div className="font-semibold text-zinc-50">Logan.GPT</div>
                                        <div className="text-zinc-400">Dev Rel @OpenAI</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="xl:row-span-2 space-y-8">
                            <figure className="rounded-2xl bg-zinc-900 p-6 shadow-lg ring-1 ring-zinc-900 ring-opacity-50">
                                <blockquote className="text-zinc-50">
                                    <p>“Website embed works like a charm even with non-English content!”</p>
                                </blockquote>
                                <figcaption className="mt-6 flex items-center gap-x-4">
                                    <div>
                                        <div className="font-semibold text-zinc-50">Hannah K</div>
                                        <div className="text-zinc-400">Designer @Nortal</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
