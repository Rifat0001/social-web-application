import VideoCard from "./VideoCard";
import vDp from '../../../assets/Photos/dpe.png'
import './Video.css'
const VideoDescription = () => {
    return (
        <div>
            <div className="video-border">
                <VideoCard></VideoCard>
            </div>
            <div className="vdo-des ps-1 text-white mt-3">
                {/* dp and name  */}
                <div className="top-head flex gap-3 items-center">
                    <div className="vdo-dp">
                        <img className="vdo-dp" src={vDp} alt="" />
                    </div>
                    <div className="vdo-name flex flex-col">
                        <p className="text-[14px]">Drake</p>
                        <p className="profile-user text-[12px]">@Drake</p>
                    </div>
                </div>

                {/* view comment time  */}
                <div className="vdo-view text-[10px]">
                    <p className="flex items-center gap-3">2 years ago  |  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M12.3077 7.14286L9.57265 10L7.65812 8L8.47863 7.14286L9.57265 8.28572L11.4872 6.28571L12.3077 7.14286ZM6.01709 2.57143C6.45232 2.57143 6.86972 2.75204 7.17747 3.07353C7.48523 3.39502 7.65812 3.83106 7.65812 4.28571C7.65812 4.74037 7.48523 5.17641 7.17747 5.4979C6.86972 5.81939 6.45232 6 6.01709 6C5.58187 6 5.16447 5.81939 4.85671 5.4979C4.54896 5.17641 4.37607 4.74037 4.37607 4.28571C4.37607 3.83106 4.54896 3.39502 4.85671 3.07353C5.16447 2.75204 5.58187 2.57143 6.01709 2.57143ZM6.01709 7.14286C6.2906 7.14286 6.54769 7.10286 6.79385 7.02286C6.64615 7.42857 6.5641 7.84 6.5641 8.28572V8.54286L6.01709 8.57143C3.28205 8.57143 0.946325 6.79429 0 4.28571C0.946325 1.77714 3.28205 0 6.01709 0C8.75214 0 11.0879 1.77714 12.0342 4.28571C11.8974 4.65143 11.7279 5.00571 11.5309 5.34286C11.0386 5.03429 10.4588 4.85714 9.84615 4.85714C9.41949 4.85714 9.02564 4.94286 8.63727 5.09714C8.71385 4.84 8.75214 4.57143 8.75214 4.28571C8.75214 3.52795 8.46398 2.80123 7.95106 2.26541C7.43814 1.72959 6.74247 1.42857 6.01709 1.42857C5.29172 1.42857 4.59605 1.72959 4.08313 2.26541C3.57021 2.80123 3.28205 3.52795 3.28205 4.28571C3.28205 5.04348 3.57021 5.7702 4.08313 6.30602C4.59605 6.84184 5.29172 7.14286 6.01709 7.14286Z" fill="url(#paint0_linear_972_4879)" />
                        <defs>
                            <linearGradient id="paint0_linear_972_4879" x1="1.45243" y1="0.588235" x2="12.8611" y2="12.0784" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00E7FC" />
                                <stop offset="1" stop-color="#EC46E5" />
                            </linearGradient>
                        </defs>
                    </svg>
                        000.0k  | <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                            <path d="M9.2085 5.09831C9.2085 7.19456 7.3885 8.88998 5.146 8.88998L4.64225 9.49664L4.34433 9.85416C4.08975 10.1575 3.60224 10.0925 3.43433 9.72955L2.7085 8.13163C1.72266 7.43829 1.0835 6.33872 1.0835 5.09831C1.0835 3.00206 2.9035 1.30664 5.146 1.30664C6.78183 1.30664 8.19558 2.21123 8.82933 3.51123C9.07308 3.99331 9.2085 4.52956 9.2085 5.09831Z" stroke="#00E7FC" stroke-width="0.466666" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.9167 7.18767C11.9167 8.42809 11.2775 9.52769 10.2917 10.221L9.56584 11.8189C9.39792 12.1818 8.91042 12.2523 8.65583 11.9435L7.85417 10.9793C6.54334 10.9793 5.37334 10.3998 4.64209 9.49518L5.14584 8.88851C7.38834 8.88851 9.20834 7.19309 9.20834 5.09684C9.20834 4.52809 9.07292 3.99185 8.82917 3.50977C10.6004 3.91602 11.9167 5.411 11.9167 7.18767Z" stroke="#00E7FC" stroke-width="0.466666" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.7915 5.09766H6.49984" stroke="#00E7FC" stroke-width="0.466666" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        000.0k
                    </p>
                </div>

                {/* vdo text  */}
                <div className="vdo-text">
                    <p className="text-[14px] font-light">Drake featuring tom, jimmy and
                        Taylor swift( moonlight and the s... </p>
                </div>
            </div>
        </div>
    );
};

export default VideoDescription;