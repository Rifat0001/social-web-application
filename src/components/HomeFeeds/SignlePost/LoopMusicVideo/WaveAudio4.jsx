import mike from '../../../../assets/musicvdobtn.png'
import { useCallback, useEffect, useRef, useState } from "react";
import plate from '../../../../assets/vdoplate.png'
import line from '../../../../assets/Line 6.png'
import UseWave from './UseWave';
const WaveAudio4 = (props) => {
    const containerRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const wavesurfer = UseWave(containerRef, props)

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
            <div className="">
                <div className="  ">
                    <div className="flex audio-vdo-play  items-center justify-center">
                        <button className='mb-1' onClick={onPlayClick} style={{ marginTop: '1em' }}>
                            {isPlaying ? <img className='play-loop' src={mike} alt="" /> : <img className='play-loop' src={mike} alt="" />}
                        </button>
                        <div ref={containerRef} className='mt-2 ' style={{ minHeight: '50px', minWidth: '400px', display: 'none' }} />
                        <div className='ms-4 mt-3'>
                            <p className='player-t'>About damn</p>
                            <p className='player-d'>Lizzo</p>
                        </div>
                    </div>
                    <div >
                        <img src={plate} className='plate-ad-3' alt="" />
                        <div className="platter-border">
                            <img src={line} alt="" />
                        </div>
                        <div className="platter">
                            <p className="plate-ad-4 text-[13px]">{currentTime} sec </p>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
};

export default WaveAudio4;