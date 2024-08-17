"use client";
import React, { useRef, useState } from 'react';

const VideoSection: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <section
            id="Video"
            className="relative z-50 mx-auto mb-14 flex max-w-[75rem] scroll-m-10 flex-col items-start gap-7 p-4 py-10 md:p-10 animate-to-dark"
        >
            <div className="relative overflow-hidden rounded">
                <video
                    className="h-auto w-full"
                    muted
                    loop
                    ref={videoRef}
                >
                    <source
                        src="https://backend.chatbase.co/storage/v1/object/public/chatbase/studio-ai-landing.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className={`absolute inset-0 flex flex-col items-center justify-center ${isPlaying ? 'hidden' : ''}`}>
                    <img
                        alt="Chatbase Studio AI Thumbnail"
                        loading="lazy"
                        width="2552"
                        height="1493"
                        decoding="async"
                        className="rounded"
                        style={{ color: 'transparent' }}
                        src="https://www.chatbase.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanding-video-thumbnail.3fb0db28.png&w=3840&q=75&dpl=dpl_AuGk7k9urXD6BBidWwWUFP11isRJ"
                    />
                    {!isPlaying && (
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50 h-9 px-4 py-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in-out opacity-100"
                            aria-label="Play Video"
                            onClick={handlePlayVideo}
                        >
                            <div className="relative grid h-16 w-16 place-items-center rounded-full bg-zinc-800 md:h-24 md:w-24">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="absolute ml-1 h-10 w-10 text-white md:h-14 md:w-14"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="delay-1500 absolute -z-10 inline-flex h-4/5 w-4/5 animate-ping rounded-full bg-violet-400 opacity-75 duration-3500"></span>
                                <span className="absolute -z-10 inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50 duration-3500"></span>
                            </div>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
