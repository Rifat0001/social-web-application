import { useRef, useState } from 'react';
import './Video.css'
import vdo from '../../../assets/Photos/blen.mp4'
import thumbnail from '../../../assets/Photos/i1.png'
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
const VideoCard = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef(null);

    const togglePlay = () => {
        const video = videoRef.current;

        if (video) {
            if (isPlaying) {
                video.pause();
            } else {
                video.play();
            }

            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video) {
            setCurrentTime(video.currentTime);
        }
    };

    const handleSeek = (e) => {
        const video = videoRef.current;
        if (video) {
            const seekTime = e.target.value;
            video.currentTime = seekTime;
            setCurrentTime(seekTime);
        }
    };
    return (
        <div className="relative video-corner border-none rounded-2xl">
            {/* Video and thumbnail container */}
            <div className="relative w-full h-full border-none rounded-2xl">
                {/* Video element */}
                <video
                    ref={videoRef}
                    id="video-player"
                    className="w-full h-full object-cover border-none rounded-2xl"
                    src={vdo}
                    onTimeUpdate={handleTimeUpdate}
                    style={{ display: isPlaying ? 'block' : 'none' }}
                ></video>
                {/* Video thumbnail */}
                <img
                    className="absolute w-full h-full object-cover border-none rounded-2xl"
                    src={thumbnail}
                    style={{ display: isPlaying ? 'none' : 'block' }}
                    alt="Video Thumbnail"
                />
                {/* Video range (seek bar) */}
                <input
                    type="range"
                    min="0"
                    max={videoRef.current ? videoRef.current.duration : 0}
                    value={currentTime}
                    onChange={handleSeek}
                    style={{ position: 'absolute', bottom: 0, width: '100%', display: isPlaying ? 'block' : 'none' }}
                />
            </div>
            {/* White circle background with play icon */}
            <div className="relative top-[-145px] w-full h-full flex justify-center items-center bg-opacity-50 cursor-pointer" onClick={togglePlay}>
                {/* White overlay */}
                <div className="absolute w-full h-full bg-opacity-50"></div>
                {/* Black play icon */}
                <div className="text-black text-5xl z-10">
                    {isPlaying ? "❚❚" :
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 36 36" fill="none">
                            <circle cx="17.6038" cy="17.6038" r="17.6038" fill="white" fill-opacity="0.5" />
                            <circle cx="17.604" cy="17.603" r="11.7358" fill="white" />
                            <path d="M16.9265 21.8927C16.2621 22.2815 15.426 21.8052 15.4215 21.0354L15.3874 15.183C15.3829 14.4132 16.2134 13.9273 16.8823 14.3083L21.9677 17.2049C22.6366 17.5859 22.6422 18.5481 21.9778 18.9369L16.9265 21.8927Z" fill="#00072D" />
                        </svg>
                    }
                </div>
            </div>
        </div>
    );
};

export default VideoCard;