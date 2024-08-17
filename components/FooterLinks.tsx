import React from 'react';

const FooterLinks: React.FC = () => {
    return (
        <div className="hidden md:flex lg:gap-24 md:gap-10 xl:gap-32">
            <div className="flex flex-col gap-4">
                <h6 className="font-semibold text-sm text-zinc-50 capitalize tracking-widest">Product</h6>
                <a className="font-medium text-sm text-zinc-400 transition-colors duration-200 ease-in-out hover:text-white" href="/pricing">Pricing</a>
                <a className="font-medium text-sm text-zinc-400 transition-colors duration-200 ease-in-out hover:text-white" href="/security">Security</a>
                <a className="font-medium text-sm text-zinc-400 transition-colors duration-200 ease-in-out hover:text-white" href="https://affiliates.chatbase.co/signup" target="_blank" rel="noopener noreferrer">Affiliates</a>
            </div>
            <div className="flex flex-col gap-4">
                <h6 className="font-semibold text-sm text-zinc-50 capitalize tracking-widest">Resources</h6>
                <a className="font-medium text-sm text-zinc-400 transition-colors duration-200 ease-in-out hover:text-white" href="https://docs.chatbase.co/docs/getting-started" target="_blank" rel="noopener noreferrer">API</a>
                <a className="font-medium text-sm text-zinc-400 transition-colors duration-200 ease-in-out hover:text-white" href="/help">Contact Us</a>
                <a className="font-medium text-sm text-zinc-400 transition-colors duration-200 ease-in-out hover:text-white" href="/guide">Guide</a>
                <a className="font-medium text-sm text-zinc-400 transition-colors duration-200 ease-in-out hover:text-white" href="/blog">Blog</a>
            </div>
            <div className="flex flex-col gap-4">
                <h6 className="font-semibold text-sm text-zinc-50 capitalize tracking-widest">Company</h6>
                <a className="font-medium text-sm text-zinc-400 transition-colors duration-200 ease-in-out hover:text-white" href="/legal/privacy">Privacy Policy</a>
                <a className="font-medium text-sm text-zinc-400 transition-colors duration-200 ease-in-out hover:text-white" href="/legal/terms">Terms of Service</a>
                <a className="font-medium text-sm text-zinc-400 transition-colors duration-200 ease-in-out hover:text-white" href="/legal/dpa">DPA</a>
                <a className="font-medium text-sm text-zinc-400 transition-colors duration-200 ease-in-out hover:text-white" href="/legal/cookie-policy">Cookie Policy</a>
                <a className="font-medium text-sm text-zinc-400 transition-colors duration-200 ease-in-out hover:text-white" href="https://trust.chatbase.co/" target="_blank" rel="noopener noreferrer">Trust Center</a>
                <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 underline-offset-4 dark:text-zinc-50 h-9 text-zinc-400 transition-colors self-start p-0 duration-200 ease-in-out hover:text-white font-medium hover:no-underline"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-:r0:"
                    data-state="closed"
                >
                    Cookie Preferences
                </button>
            </div>
        </div>
    );
};

export default FooterLinks;
