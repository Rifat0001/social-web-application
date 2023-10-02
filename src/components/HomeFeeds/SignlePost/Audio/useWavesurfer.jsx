// Import WaveSurfer
import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'
import { useState } from 'react'
import { useEffect } from 'react'

const useWavesurfer = (containerRef, options) => {
    const [wavesurfer, setWavesurfer] = useState(null)


    // Initialize wavesurfer when the container mounts
    // or any of the props change
    useEffect(() => {
        if (!containerRef.current) return

        const ws = WaveSurfer.create({
            ...options,
            container: containerRef.current,
        })

        setWavesurfer(ws)

        return () => {
            ws.destroy()
        }
    }, [options, containerRef])

    return wavesurfer
}

export default useWavesurfer;