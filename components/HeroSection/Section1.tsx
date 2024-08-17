"use client";
import React, { useState } from 'react';
import HoverBorderGradient from '../ui/gradientBorder';
import Link from 'next/link';
import VideoGrid from './VideoGrid';
import CompareBy from '../CampareBy';

const Section1: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <section className="mx-auto flex w-[100vw] max-w-screen-xl px-4 my-2 sm:mt-28 sm:h-[38rem]">
                <div className="flex-[4]">
                    <div className="flex flex-col gap-10">
                        <h1 className="col-start-1 row-start-2 max-w-[32rem] text-start text-6xl font-extrabold tracking-tight md:text-left md:text-[4.5rem] md:leading-[4.5rem] lg:text-8xl xl:max-w-[43.5rem] xl:text-8xl text-primary">
                            Custom <br /> <span className='text-secondary'>WEBSITE</span> for <br /> your business
                        </h1>
                        <p className="col-start-1 row-start-3 max-w-xl text-start text-zinc-900 md:text-left md:text-lg md:leading-6 md:tracking-normal">
                            Build a custom GPT, embed it on your website and let it handle customer support, lead generation, engage with your users, and more.
                        </p>
                        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-6">
                            <div className="flex w-fit flex-col place-items-center items-center justify-center">
                                <HoverBorderGradient>
                                    Build your Website
                                </HoverBorderGradient>
                                <p className="mt-1 h-0 text-center text-sm text-zinc-500">No credit card required</p>
                            </div>
                            <div
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="flex flex-col items-center"
                            >
                                <Link className="flex flex-row items-center gap-2 text-lg font-semibold" href="#Video">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6 text-primary">
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Watch Video
                                </Link>
                                {isHovered && (
                                    <video
                                        className="mt-2 w-[300px] h-[200px]  shadow-lg absolute rounded-2xl overflow-hidden"
                                        src="https://videos.pexels.com/video-files/3252145/3252145-uhd_2560_1440_25fps.mp4" // Replace with your video path
                                        autoPlay
                                        loop
                                        muted
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                    <VideoGrid />
            </section>
        </div>
    );
};

export default Section1;
