"use client";

import React from 'react';

const IntegrationsSection: React.FC = () => {
    return (
        <section className="mx-auto flex w-full max-w-screen-xl px-4 mt-32">
            <div className="relative flex w-full flex-col gap-7 z-30">
                <div className="z-30 flex flex-col items-start gap-1">
                    <h4 className="bg-pink-500 bg-clip-text text-sm font-semibold text-transparent">INTEGRATIONS</h4>
                    <p className="text-xl font-medium text-white">
                        Ingest data from multiple sources, train your chatbot, and let your users interact with it wherever they are.
                    </p>
                </div>
                <img
                    alt="Integrations : Google Drive, Notion, Slack, Whatsapp, Messanger, Word,..."
                    loading="lazy"
                    width="7900"
                    height="3760"
                    decoding="async"
                    className="mt-14"
                    style={{ color: 'transparent' }}
                    src="https://www.chatbase.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fintegrations.38ee661f.png&w=3840&q=75&dpl=dpl_AuGk7k9urXD6BBidWwWUFP11isRJ"
                />
            </div>
        </section>
    );
};

export default IntegrationsSection;
