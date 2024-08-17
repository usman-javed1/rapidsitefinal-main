"use client"

import React, { useState, MouseEvent } from 'react';

// Define the types for the AccordionItem props
interface AccordionItemProps {
    id: string;
    title: {
        number: string;
        text: string;
    };
    content: string;
    isOpen: boolean;
    onClick: () => void;
    image: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, content, isOpen, onClick, image }) => {
    return (
        <div className="border-b group/link w-full outline-none ring-0 focus:outline-none focus:ring-0">
            <h3 className="flex">
                <button
                    type="button"
                    aria-controls={id}
                    aria-expanded={isOpen}
                    className="group/accordion flex flex-1 items-center justify-between py-4 text-sm font-medium outline-none ring-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 [&[data-state=open]>svg]:opacity-100"
                    onClick={onClick}
                >
                    <div className="flex flex-row items-center gap-4 text-start text-xl font-semibold text-black transition-all duration-300 ease-in-out md:text-2xl">
                        <span className="self-end py-3 text-sm font-normal text-black">{title.number}</span>
                        <span>{title.text}</span>
                    </div>
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
                        className={`lucide lucide-arrow-right h-5 w-5 shrink-0 text-zinc-900 transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-2 opacity-100' : 'opacity-0'}`}
                    >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </button>
            </h3>
            <div
                id={id}
                role="region"
                aria-labelledby={id}
                className={`overflow-hidden text-sm transition-all ${isOpen ? 'animate-accordion-down' : 'animate-accordion-up'}`}
            >
                <div className="pb-4 pt-0">
                    <div className="relative flex w-full flex-col justify-center gap-3">
                        {isOpen && <span className="text-lg text-zinc-500 transition-all delay-150 duration-500 ease-out opacity-100">
                            {content}
                        </span>}
                        <div className="relative rounded-md bg-black lg:hidden">
                            <div
                                className="relative inset-0 h-full w-full rounded-md"
                                style={{
                                    background: 'radial-gradient(circle, rgba(69, 30, 137, 0.4) 0%, rgb(0, 0, 0) 80%)',
                                }}
                            >
                                <div className="relative inset-0 h-full w-full transition-opacity duration-900 animate-in fade-in">
                                    <img
                                        alt={title.text}
                                        fetchPriority="high"
                                        width="3076"
                                        height="3684"
                                        decoding="async"
                                        className="relative inset-0 h-full w-full rounded-md object-contain px-4 py-7"
                                        src={image}
                                        style={{ color: 'transparent' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Define the types for the Accordion props
interface AccordionProps {
    items: Array<{
        title: {
            number: string;
            text: string;
        };
        content: string;
        image: string;
    }>;
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    

    const handleClick = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className="mx-auto flex w-full max-w-screen-xl px-4 flex-col items-start gap-7 mt-32">
            <div className="relative flex w-full flex-col gap-7">
                <div className="z-30 flex flex-col items-start gap-1">
                    <h4 className="bg-pink-500 bg-clip-text text-sm font-semibold text-transparent">HOW IT WORKS</h4>
                    <span className="text-xl font-medium">
                        Add your data sources, train the AI, customize it to your liking, and add it to your website.
                    </span>
                </div>
                <div className="mt-5 w-full gap-x-14 lg:grid lg:grid-cols-6">
                    <div className="col-span-3 flex w-full flex-col items-start justify-start" data-orientation="vertical">
                        {items.map((item, index) => (
                            <AccordionItem
                                key={index}
                                id={`accordion-item-${index}`}
                                title={item.title}
                                content={item.content}
                                isOpen={openIndex === index}
                                onClick={() => handleClick(index)}
                                image={item.image}
                            />
                        ))}
                    </div>
                    <div className="relative col-span-3 hidden h-[45rem] w-full justify-center lg:flex">
                        <div className="absolute inset-0 h-full w-[45vw] rounded-md bg-black"></div>
                        <div className="absolute h-full w-full rounded-md lg:ml-6 xl:ml-16" style={{ background: 'radial-gradient(circle at center, rgba(69, 30, 137, 0.5) 0%, rgba(0, 0, 0, 1) 60%)' }}>
                            <div className="relative inset-0 h-full w-full">
                                <img
                                    alt="Customize behavior & appearance"
                                    loading="lazy"
                                    width="3076"
                                    height="3684"
                                    decoding="async"
                                    className="relative inset-0 h-full w-full rounded-md object-contain p-12 transition-opacity duration-500 animate-in fade-in"
                                    src={items[openIndex || 0].image}
                                    style={{ color: 'transparent' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;
