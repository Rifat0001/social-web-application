import 'vidstack/styles/defaults.css';
import 'vidstack/styles/community-skin/video.css';
import 'vidstack/styles/base.css';
import 'vidstack/styles/ui/buttons.css';
import 'vidstack/styles/ui/buffering.css';
import 'vidstack/styles/ui/captions.css';
import 'vidstack/styles/ui/tooltips.css';
import 'vidstack/styles/ui/live.css';
import 'vidstack/styles/ui/sliders.css';
import 'vidstack/styles/ui/menus.css';
import 'vidstack/styles/defaults.css';
import './VideoComponent.css';
import { MediaCommunitySkin, MediaOutlet, MediaPlayButton, MediaPlayer, MediaPoster } from '@vidstack/react';
import { PlayIcon } from '@vidstack/react/icons'
import { useEffect } from 'react';

const VideoComponent = () => {
    useEffect(() => {
        // Select the media-time-slider track-fill element
        const trackFill = document.querySelector('.media-time-slider[part="track-fill"]');

        // Check if the element exists
        if (trackFill) {
            // Apply custom styles
            trackFill.style.backgroundColor = 'red';
        }
    }, []);

    return (
        <div>
            <MediaPlayer
                title="Sprite Fight"
                src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
                poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=980"
                thumbnails="https://media-files.vidstack.io/sprite-fight/thumbnails.vtt"
                aspectRatio={16 / 9}
                crossorigin=""
            >
                <MediaOutlet>
                    <MediaPoster
                        alt="Girl walks into sprite gnomes around her friend on a campfire in danger!"
                    />
                    <track
                        src="https://media-files.vidstack.io/sprite-fight/subs/english.vtt"
                        label="English"
                        srcLang="en-US"
                        kind="subtitles"
                        default
                    />
                    <MediaPlayButton>
                        {/* Replace default icons. */}
                        <svg slot="play"></svg>
                        <svg slot="pause"></svg>
                    </MediaPlayButton>;
                    <PlayIcon size={40} />
                    <track
                        src="https://media-files.vidstack.io/sprite-fight/chapters.vtt"
                        srcLang="en-US"
                        kind="chapters"
                        default
                    />
                </MediaOutlet>
                <MediaCommunitySkin />
            </MediaPlayer>


        </div>
    );
};

export default VideoComponent;