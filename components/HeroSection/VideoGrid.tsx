import React from 'react';

const VideoGrid: React.FC = () => {
    const videos = [
        
        'https://videos.pexels.com/video-files/3252145/3252145-uhd_2560_1440_25fps.mp4',
        'https://videos.pexels.com/video-files/3252145/3252145-uhd_2560_1440_25fps.mp4',
        'https://videos.pexels.com/video-files/3252145/3252145-uhd_2560_1440_25fps.mp4',
        'https://videos.pexels.com/video-files/3252145/3252145-uhd_2560_1440_25fps.mp4',
        'https://videos.pexels.com/video-files/3252145/3252145-uhd_2560_1440_25fps.mp4',
        'https://videos.pexels.com/video-files/3252145/3252145-uhd_2560_1440_25fps.mp4',
        'https://videos.pexels.com/video-files/3252145/3252145-uhd_2560_1440_25fps.mp4',
        'https://videos.pexels.com/video-files/3252145/3252145-uhd_2560_1440_25fps.mp4',
    ];

    return (
        <div className="mx-auto -my-12 max-w-800px px-4 lg:block hidden">
            <div className="grid grid-cols-2 gap-5">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className={`relative h-[150px] w-[300px] rounded-lg overflow-hidden shadow-md ${index >= 6 ? 'opacity-50' : ''
                            }`}
                    >
                        <video
                            src={video}
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                ))}
            </div>
            <div className="relative  h-[70px]">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            </div>
        </div>
    );
};

export default VideoGrid;
