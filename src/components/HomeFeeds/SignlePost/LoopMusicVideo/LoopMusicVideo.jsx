import image3 from "../../../../assets/CreatePost/person-2.png";
import fire from "../../../../assets/CreatePost/fire.png";
import img from '../../../../assets/kelvin.png'
import loop from '../../../../assets/reply/event-loop.png'
import zoom from '../../../../assets/zoom icon.png'
import audioBg from '../../../../assets/musicVideo.jpg'
import './style.css'
// import rec from '../../../assets/reply/rec.png'
import {
    FaAngleDown,
    FaEllipsisH,
    FaExclamationCircle,
    FaGlobe,
    FaHeart,
    FaRegComments,
    FaTrashAlt,
} from "react-icons/fa";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import Sicon from "../../../../assets/CreatePost/Sicon.png";
import Reply from '../Reply';
import tick from '../../../../assets/bd-verify.png'
import img2 from '../../../../assets/lizzo.png'
import CommentSection from '../CommentSection';
import moving from '../../../../assets/moving.png'
import './style.css'
import AudioPlayer3 from "../MusicVideo/AudioPlayer3";
import AudioPlayer4 from "./AudioPlayer4";
const LoopMusicVideo = () => {
    return (
        <div>


            <div className=" mx-auto relative pt-20">
                <div className="pb-5 ">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center  justify-start gap-5">
                            <img className='dp-img-vdo' src={img} alt="" />

                            <div className="flex-col">
                                <p className="flex items-center justify-start gap-2">
                                    <span>Kevin Alexander</span>
                                    <span className="text-[10px] flex items-center"><img src={loop} alt="" /> Looped a music video</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="text-[16px] profile-user">@kevinalexa3546</span>
                                    <span className="text-xs">12 S</span>

                                </p>
                            </div>
                            <div></div>
                        </div>
                        <div className="flex-none">
                            <button className="btn btn-square btn-ghost">
                                <FaEllipsisH size={30} />
                            </button>
                        </div>
                    </div>
                    {/* poll start from here  */}
                    <div className=" space-y-[40px] ms-24">
                        {/* donation part started  */}
                        <div className="w-full z-10 moving-service-top-loop relative bottom-[-5px]">
                            {/* dp start  */}
                            <div className="flex items-center  ms-6 mt-3 mb-2 justify-start gap-5">
                                <img className='dp-img-vdo' src={img2} alt="" />

                                <div className="flex-col">
                                    <p className="flex items-center justify-start gap-2">
                                        <span>Lizzo</span>
                                    </p>
                                    <p className=" gap-3">
                                        <div className="flex items-center justify-center gap-1">
                                            <span className="text-[16px] profile-user">@Lizzooffical</span>
                                            <img src={tick} className="w-[12px] h-[12px]" alt="" />
                                        </div>
                                        <span className="text-xs">12 S</span>

                                    </p>
                                </div>
                                <div></div>
                            </div>
                            <div className="flex">
                                <div className="flex justify-center items-center w-full">
                                    <div className="inside-blur-loop flex justify-center items-center ">
                                        <div className="container-loop">

                                            <div className="">
                                                <div className='audio-position'>
                                                    <img className='audio-bg-vd-loop' src={audioBg} alt="" />
                                                    <div className="underVideoText">
                                                        <div className=" px-2">
                                                            <div className='flex underVideoTop-1 gap-4 items-center justify-center'>
                                                                <img className='mini-dp' src={img} alt="" />
                                                                <p className='pp'>Kevin Alexander</p>
                                                            </div>
                                                            <button className='underVideoTop-2 '><img src={zoom}
                                                                alt="" /></button>
                                                        </div>

                                                        <div className="audio-part-3 ms-2 my-4">
                                                            <AudioPlayer4></AudioPlayer4>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-end">
                    <div className="stats shadow bg-[rgba(255,255,255,0.10)] rounded-[12px] border-y-[1px]">
                        <div className="flex items-center justify-center gap-3 px-2">
                            <div className=" text-white">200.8K</div>
                            <FaHeart color="#FF0000" />
                        </div>
                        <div className="pro-side flex justify-center items-center gap-5 px-2">
                            <h2 className="text-white">4.2K</h2>
                            <FaRegComments color="#3ADF00" />
                        </div>
                        <div className="pro-side flex justify-center items-center gap-7 px-2">
                            <h2 className="text-white">24</h2>
                            <HiOutlineBookmarkAlt color="#B82BEA" />
                        </div>

                        <div className="pro-side flex items-center justify-center gap-10 px-2">
                            <h2 className="text-white">1</h2>
                            <img src={Sicon} alt="" />
                        </div>
                    </div>

                </div>
                <div className="">

                    <div className=" flex justify-end">
                        <div className="divider  bg-[#00E7FC] w-[100%] h-[1px]"></div>
                    </div>
                    <CommentSection></CommentSection>
                </div>
            </div >
        </div>
    );
};

export default LoopMusicVideo;