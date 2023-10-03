import mike from '../../../../assets/playBtn.png'
import { useCallback, useEffect, useRef, useState } from "react";
import UseAudio from './UseAudio';
import mute from '../../../../assets/mute.svg'
const WaveAudio2 = (props) => {
    const containerRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const wavesurfer = UseAudio(containerRef, props)

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
                <div className="audio-bg  gap-4 flex items-center justify-center">
                    <div className="flex  items-center justify-center">
                        <button onClick={onPlayClick} style={{ marginTop: '1em' }}>
                            {isPlaying ? <img className='palyBtn' src={mike} alt="" /> : <img className='palyBtn' src={mike} alt="" />}
                        </button> 00.00
                    </div>
                    <div ref={containerRef} className='mt-2' style={{ minHeight: '50px', minWidth: '400px' }} />  <p className="">{currentTime} sec </p>
                    <img src={mute} alt="" />
                </div>


            </div>
        </>
    );
};

export default WaveAudio2;