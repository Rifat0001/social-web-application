import './Video.css'
import VideoCard from './VideoCard';
import VideoDescription from './VideoDescription';
const VideosContainer = () => {
    return (
        <div className='video-container mt-4 '>
            <div className="recent-vdo-part">
                <div className="text-white pt-4 ps-4">
                    Recent
                </div>
                <div className="start-video-section grid grid-cols-3 pt-3 gap-2 px-3">
                    <VideoDescription></VideoDescription>
                    <VideoDescription></VideoDescription>
                    <VideoDescription></VideoDescription>
                </div>
                <div className="flex items-center justify-center my-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="747" height="4" viewBox="0 0 747 4" fill="none">
                        <path d="M2 2L745 2" stroke="url(#paint0_linear_972_5178)" stroke-width="2.4" stroke-linecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear_972_5178" x1="2" y1="1.5" x2="745" y2="1.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.00520833" stop-color="white" stop-opacity="0" />
                                <stop offset="0.536458" stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="recent-vdo-part">
                <div className="text-white  ps-4">
                    Popular
                </div>
                <div className="start-video-section grid grid-cols-3 pt-3 gap-2 px-3">
                    <VideoDescription></VideoDescription>
                    <VideoDescription></VideoDescription>
                    <VideoDescription></VideoDescription>
                </div>
                <div className="flex items-center justify-center my-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="747" height="4" viewBox="0 0 747 4" fill="none">
                        <path d="M2 2L745 2" stroke="url(#paint0_linear_972_5178)" stroke-width="2.4" stroke-linecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear_972_5178" x1="2" y1="1.5" x2="745" y2="1.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.00520833" stop-color="white" stop-opacity="0" />
                                <stop offset="0.536458" stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="recent-vdo-part">
                <div className="text-white ps-4">
                    Oldest
                </div>
                <div className="start-video-section grid grid-cols-3 pt-3 gap-2 px-3">
                    <VideoDescription></VideoDescription>
                    <VideoDescription></VideoDescription>
                    <VideoDescription></VideoDescription>
                </div>
                <div className="flex items-center justify-center my-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="747" height="4" viewBox="0 0 747 4" fill="none">
                        <path d="M2 2L745 2" stroke="url(#paint0_linear_972_5178)" stroke-width="2.4" stroke-linecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear_972_5178" x1="2" y1="1.5" x2="745" y2="1.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.00520833" stop-color="white" stop-opacity="0" />
                                <stop offset="0.536458" stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default VideosContainer;