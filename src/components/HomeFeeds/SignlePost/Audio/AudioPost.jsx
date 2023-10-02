import React from 'react'
import img from "../../../../assets/reply/eventp.png";
// import rec from '../../../assets/reply/rec.png'
import '../MovingService.css'
import {
    FaEllipsisH,
    FaStar,
    FaStarHalfAlt,
    FaHeart,
    FaRegComments
} from "react-icons/fa";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import Sicon from "../../../../assets/CreatePost/Sicon.png";
import CommentSection from "../CommentSection.jsx";
import './Wave.css'
import AudioPlayer from './AudioPlayer';
const AudioPost = () => {
    return (
        <div className=" mx-auto relative pt-20">
            <div className="pb-5 ">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img src={img} alt="" />

                        <div className="flex-col">
                            <p className="flex items-center justify-start gap-2">
                                <span>Kevin Alexander</span>

                                <span className="text-[10px] flex items-center">added a new audio</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[16px] profile-user">@kevinalexa3546</span>
                                <span className="text-xs">12 S</span>
                            </p>

                        </div>



                    </div>

                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <FaEllipsisH size={30} />
                        </button>
                    </div>
                </div>
                <div><p className='post-mini-des ms-[100px] mt-2 font-light'>Please check out my new audio song.</p></div>
                <div className='ms-[100px] mt-4'>
                    <AudioPlayer></AudioPlayer>

                </div>


            </div>
            <div className="">
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
                <div className=" flex justify-end">
                    <div className="divider  bg-[#EC46E5] w-[100%] h-[1px]"></div>
                </div>
                <CommentSection></CommentSection>
            </div>
        </div >
    );
};

export default AudioPost;