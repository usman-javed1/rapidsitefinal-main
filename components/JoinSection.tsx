import React from 'react';
import HoverBorderGradient from './ui/gradientBorder';

const JoinSection: React.FC = () => {
    return (
        <section className="relative z-30 mx-auto flex w-full max-w-screen-xl flex-col items-start gap-7 p-4 py-10 md:p-10">
            <div className="w-full origin-left rounded-3xl bg-zinc-900 px-5 py-24 text-center">
                <h2 className="mx-auto text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Join the future of AI chatbots today
                </h2>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <HoverBorderGradient>
                        Try Free Now
                    </HoverBorderGradient>
                </div>
            </div>
        </section>
    );
};

export default JoinSection;
