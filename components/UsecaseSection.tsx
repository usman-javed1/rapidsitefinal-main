import React from 'react';

interface UseCaseItem {
    title: string;
    description: string;
    imageSrc: string;
    altText: string;
}

const useCaseItems: UseCaseItem[] = [
    {
        title: 'Customer Support',
        description: 'Experience swift query resolutions, available 24/7, with personalized assistance tailored to your customers\' needs.',
        imageSrc: '/1.webp',
        altText: 'Customer Support'
    },
    {
        title: 'Lead Generation',
        description: 'Set your chatbot to collect leads and qualify them, all while providing a personalized experience to your customers.',
        imageSrc: '/2.webp',
        altText: 'Lead Generation'
    },
    {
        title: 'AI Personas to Engage Your Users',
        description: 'Create AI personas about any topic and have them engage with your users and provide them with a personalized experience.',
        imageSrc: '/3.webp',
        altText: 'AI Personas to Engage Your Users'
    },
    {
        title: 'Multi-platform Chatbots',
        description: 'Add AI chatbots to your website, mobile app, or any other platform with a simple embed code or with our API.',
        imageSrc: '/4.webp',
        altText: 'Multi-platform Chatbots'
    },
];

const UseCasesSection: React.FC = () => {
    return (
        <section className="mx-auto flex w-full max-w-screen-xl px-4 mt-32">
            <div className="relative flex w-full flex-col gap-7 z-30">
                <div className="z-30 flex flex-col items-start gap-1">
                    <h4 className="bg-pink-500 bg-clip-text text-sm font-semibold text-transparent">USECASES</h4>
                </div>
                <p className="-mt-5 text-xl font-medium text-white">Here are some of the ways you can use Chatbase.</p>
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {useCaseItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative mb-0 flex flex-col items-start justify-start gap-5 rounded-2xl border border-stone-800 p-7 pb-0 text-white"
                            style={{
                                background: 'radial-gradient(89.72% 84.75% at 49.92% 48.04%, rgba(69, 30, 137, 0.25) 0%, rgba(0, 0, 0, 0.00) 100%)'
                            }}
                        >
                            <h5 className="text-2xl font-medium">{item.title}</h5>
                            <p className="text-lg font-light text-stone-200">{item.description}</p>
                            <img
                                alt={item.altText}
                                loading="lazy"
                                width="1298"
                                height="918"
                                decoding="async"
                                className="mt-4 h-full object-contain object-bottom"
                                style={{ color: 'transparent' }}
                                srcSet={`${item.imageSrc}?w=1920&q=75&dpl=dpl_AuGk7k9urXD6BBidWwWUFP11isRJ 1x, ${item.imageSrc}?w=3840&q=75&dpl=dpl_AuGk7k9urXD6BBidWwWUFP11isRJ 2x`}
                                src={item.imageSrc}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
