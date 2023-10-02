import { useCallback, useState } from 'react'
import mpp from '../../../../assets/audio.mp3'
import TimelinePlugin from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/timeline.esm.js'

import WaveSurferPlayer from './WaveSurferPlayer'
// Import WaveSurfer
function AudioPlayer() {
    const urls = [mpp]
    const [audioUrl, setAudioUrl] = useState(urls[0])


    const ctx = document.createElement('canvas').getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 180)
    gradient.addColorStop(0, '#00E7FC')
    gradient.addColorStop(0.7, ' #EC46E5')

    const bottomTimline = TimelinePlugin.create({
        height: 10,
        timeInterval: 0.1,
        primaryLabelInterval: 1,
        style: {
        },
    })

    return (
        <>
            <WaveSurferPlayer
                height={90}
                width={500}
                waveColor={gradient}
                barWidth={2}
                barGap={4}
                barRadius={2}
                progressColor="#EC46E5"
                url={audioUrl}
                plugins={bottomTimline}
            />
        </>
    )
}

export default AudioPlayer
