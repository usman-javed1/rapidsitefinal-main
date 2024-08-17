import React from 'react';

const LowerFooter: React.FC = () => {
    return (
        <div className="relative bg-zinc-950 p-8 w-[98.7vw] -ml-5">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    maxWidth: '72rem',
                    width: '100%',
                    height: '2rem',
                    borderRadius: '12.1rem',
                    background: 'linear-gradient(91deg, #7C3AED 0%, #F80282 100%)',
                    filter: 'blur(60px)',
                    position: 'absolute',
                    bottom: '1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            />
            <section className="mx-auto flex w-full max-w-screen-xl px-4">
                <p className="w-full text-center text-sm text-zinc-400 md:text-start">
                    © 2024 Chatbase. All rights reserved.
                </p>
            </section>
        </div>
    );
};

export default LowerFooter;
