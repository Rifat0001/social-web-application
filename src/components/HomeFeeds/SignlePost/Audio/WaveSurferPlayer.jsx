// ...
import mike from '../../../../assets/mike.png'
import { useCallback, useEffect, useRef, useState } from "react";
import useWavesurfer from "./useWavesurfer";
import './Wave.css'
const WaveSurferPlayer = (props) => {
    const containerRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const wavesurfer = useWavesurfer(containerRef, props)

    // On play button click
    const onPlayClick = useCallback(() => {
        wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play()
    }, [wavesurfer])

    // Initialize wavesurfer when the container mounts
    // or any of the props change
    useEffect(() => {
        if (!wavesurfer) return

        setIsPlaying(false)

        const subscriptions = [
            wavesurfer.on('play', () => setIsPlaying(true)),
            wavesurfer.on('pause', () => setIsPlaying(false)),
            wavesurfer.on('timeupdate', () => {
                // Use Math.floor to round down currentTime to an integer
                setCurrentTime(Math.floor(wavesurfer.getCurrentTime()));
            }),
        ]

        return () => {
            subscriptions.forEach((unsub) => unsub())
        }
    }, [wavesurfer])

    return (
        <>
            <div className="full-box">
                <div className="sound-box gap-4 flex">
                    <div className="mike-gd flex items-center justify-center">
                        <button onClick={onPlayClick} className="playbtn" style={{ marginTop: '1em' }}>
                            {isPlaying ? <img className='mike-ad' src={mike} alt="" /> : <img className='mike-ad' src={mike} alt="" />}
                        </button>
                    </div>
                    <div ref={containerRef} style={{ minHeight: '50px', minWidth: '500px' }} />
                </div>

                <p className="time-audio ">{currentTime} sec </p>
            </div>
        </>
    );
};

export default WaveSurferPlayer;
