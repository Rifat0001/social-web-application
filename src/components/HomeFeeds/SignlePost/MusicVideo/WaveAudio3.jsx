import mike from '../../../../assets/musicvdobtn.png'
import { useCallback, useEffect, useRef, useState } from "react";
import plate from '../../../../assets/vdoplate.png'
import UseWaveSurfer from './UseWaveSurfer';
import line from '../../../../assets/Line 6.png'
const WaveAudio3 = (props) => {
    const containerRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const wavesurfer = UseWaveSurfer(containerRef, props)

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
                        <button className='' onClick={onPlayClick} style={{ marginTop: '1em' }}>
                            {isPlaying ? <img className='w-[45]' src={mike} alt="" /> : <img className='w-[45]' src={mike} alt="" />}
                        </button>
                        <div className='ms-4 mt-3'>
                            <p className='player-t'>About damn</p>
                            <p className='player-d'>Lizzo</p>
                        </div>
                    </div>
                    <div >
                        <img src={plate} className='plate-ad' alt="" />
                        <div className="platter-border">
                            <img src={line} alt="" />
                        </div>
                        <div className="platter">
                            <p className="plate-ad-2 text-[13px]">{currentTime} sec </p>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
};

export default WaveAudio3;