
// FeaturesSection.tsx

import React from 'react';


interface FeatureCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageSrc, imageAlt }) => {
    return (
        <div className="group/card relative flex flex-col overflow-hidden rounded-md border bg-white transition-all duration-500 ease-in-out hover:shadow-md">
            <div className="relative bg-zinc-200 transition-all duration-500 ease-in-out">
                <img
                    alt={imageAlt}
                    loading="lazy"
                    className="bottom-0 object-contain object-center px-4 pt-8"
                    src={imageSrc}
                />
            </div>
            <div className="z-10 flex flex-col items-start gap-1 bg-white p-5 lg:h-[12.5rem] xl:h-[10rem]">
                <h5 className="text-xl font-medium">
                    {title}
                </h5>
                <p className="text-md font-normal text-zinc-700">
                    {description}
                </p>
            </div>
        </div>
    );
};

type FeatureCard2Props = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

const FeatureCard2: React.FC<FeatureCard2Props> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-start gap-1">
            <div className="text-zinc-900">
                {icon}
            </div>
            <h5 className="pt-1 text-lg font-medium">{title}</h5>
            <p className="text-sm font-normal text-zinc-700">{description}</p>
        </div>
    );
};

const FeaturesSection: React.FC = () => {
    return (
        <section className="mx-auto flex w-full max-w-screen-xl px-4">
            <div className="relative flex w-full flex-col gap-7">
                <div className="z-30 flex flex-col items-start gap-1">
                    <h4 className="bg-pink-500 bg-clip-text text-sm font-semibold text-transparent">
                        POWERFUL FEATURES
                    </h4>
                    <p className="text-xl font-medium">
                        Everything you need for your no-code AI chatbot.
                    </p>
                </div>
                <div className="flex flex-col items-start justify-center gap-16">
                    <div className="grid grid-cols-1 flex-wrap items-start justify-center gap-10 lg:grid-cols-3">
                        <FeatureCard
                            title="Real-time Analytics"
                            description="Monitor and analyze your chatbot's performance in real-time."
                            imageSrc="/image2.png"
                            imageAlt="Real-time Analytics" />
                        <FeatureCard
                            title="Powerful Integration"
                            description="Connect your chatbot to various platforms and services."
                            imageSrc="/image3.png"
                            imageAlt="Powerful Integration" />
                        <FeatureCard
                            title="Customizable Content"
                            description="Create engaging and personalized content for your chatbot."
                            imageSrc="/image1.png"
                            imageAlt="Customizable Content" />


                    </div>
                    <div className="h-[0.15rem] w-1/4 self-center bg-faded-gradient" />
                    <div className="grid grid-cols-2 gap-16 md:grid-cols-3 lg:grid-cols-4">
                        <FeatureCard2
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" width="30" className="text-zinc-900">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"></path>
                                </svg>
                            }
                            title="Multiple Data Sources"
                            description="Import data from multiple sources to train your chatbot."
                        />
                        <FeatureCard2
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" width="30" className="text-zinc-900">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-3.875a2.25 2.25 0 00-3.18-3.181l-3.875 3.876A15.995 15.995 0 0012 6.969m0 0A15.995 15.995 0 007.35 10.715l-3.875-3.876A2.25 2.25 0 00.292 6.558l3.876 3.875A15.993 15.993 0 007.743 12m4.572 4.572a15.992 15.992 0 01-3.673 1.564m5.64-4.636a15.997 15.997 0 01-1.627-3.276"></path>
                                </svg>
                            }
                            title="Customizable Flows"
                            description="Customize your chatbot's conversational flow to fit your business needs."
                        />

                        <FeatureCard2
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" width="30" className="text-zinc-900">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-3.875a2.25 2.25 0 00-3.18-3.181l-3.875 3.876A15.995 15.995 0 0012 6.969m0 0A15.995 15.995 0 007.35 10.715l-3.875-3.876A2.25 2.25 0 00.292 6.558l3.876 3.875A15.993 15.993 0 007.743 12m4.572 4.572a15.992 15.992 0 01-3.673 1.564m5.64-4.636a15.997 15.997 0 01-1.627-3.276"></path>
                                </svg>
                            }
                            title="Customizable Flows"
                            description="Customize your chatbot's conversational flow to fit your business needs."
                        />

                        <FeatureCard2
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" width="30" className="text-zinc-900">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.75A9.75 9.75 0 1112.75 3a9.75 9.75 0 018.25 9.75zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"></path>
                                </svg>
                            }
                            title="Seamless Integration"
                            description="Easily integrate with your existing tools and platforms."
                        />
                        <FeatureCard2
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" width="30" className="text-zinc-900">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"></path>
                                </svg>
                            }
                            title="Multiple Data Sources"
                            description="Import data from multiple sources to train your chatbot."
                        />
                        <FeatureCard2
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" width="30" className="text-zinc-900">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-3.875a2.25 2.25 0 00-3.18-3.181l-3.875 3.876A15.995 15.995 0 0012 6.969m0 0A15.995 15.995 0 007.35 10.715l-3.875-3.876A2.25 2.25 0 00.292 6.558l3.876 3.875A15.993 15.993 0 007.743 12m4.572 4.572a15.992 15.992 0 01-3.673 1.564m5.64-4.636a15.997 15.997 0 01-1.627-3.276"></path>
                                </svg>
                            }
                            title="Customizable Flows"
                            description="Customize your chatbot's conversational flow to fit your business needs."
                        />

                        <FeatureCard2
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" width="30" className="text-zinc-900">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-3.875a2.25 2.25 0 00-3.18-3.181l-3.875 3.876A15.995 15.995 0 0012 6.969m0 0A15.995 15.995 0 007.35 10.715l-3.875-3.876A2.25 2.25 0 00.292 6.558l3.876 3.875A15.993 15.993 0 007.743 12m4.572 4.572a15.992 15.992 0 01-3.673 1.564m5.64-4.636a15.997 15.997 0 01-1.627-3.276"></path>
                                </svg>
                            }
                            title="Customizable Flows"
                            description="Customize your chatbot's conversational flow to fit your business needs."
                        />

                        <FeatureCard2
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" width="30" className="text-zinc-900">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.75A9.75 9.75 0 1112.75 3a9.75 9.75 0 018.25 9.75zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"></path>
                                </svg>
                            }
                            title="Seamless Integration"
                            description="Easily integrate with your existing tools and platforms."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
