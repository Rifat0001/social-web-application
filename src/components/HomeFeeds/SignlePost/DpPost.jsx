import dp from "../../../assets/reply/dp.png";
import image2 from "../../../assets/CreatePost/la2.png";
import image3 from "../../../assets/CreatePost/person-2.png";
import fire from "../../../assets/CreatePost/fire.png";
import img from "../../../assets/reply/eventp.png";
import loop from '../../../assets/reply/event-loop.png'
import family from '../../../assets/reply/family.png'
import ev from '../../../assets/reply/event-bg.png'
import plus from '../../../assets/reply/plus.png'
import cal from '../../../assets/reply/Calendar.png'
import int from '../../../assets/reply/int.png'
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
import "./SinglePost.css";
import Sicon from "../../../assets/CreatePost/Sicon.png";
import "./SinglePost.css";
import CommentSection from "./CommentSection";
import Reply from "./Reply";
import AdComment from "./AdComment";
const DpPost = () => {
    return (
        <div className=" mx-auto relative pt-20">
            <div className="pb-5 ">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img src={img} alt="" />

                        <div className="flex-col">
                            <p className="flex items-center justify-start gap-2">
                                <span>Aliyan Farooq musk</span>

                                <span className="text-[10px] flex items-center"><img src={loop} alt="" /> Looped a post</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[16px] profile-user">@aliyan11</span>
                                <span className="text-xs">12 S </span>

                                <FaGlobe />
                                <FaAngleDown />
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
                <div className="space-y-[40px]">
                    <div className=" ms-20 event-sec pt-3 space-y-4">
                        <div className="flex items-center ms-8">
                            <img src={image2} alt="" />
                            <div className="ms-4">
                                <p>Imma Vas <span className="text-xs text-light">Changed her profile banner</span></p><div className="flex items-center gap-4">

                                    <span className="text-[16px] profile-user">@immav123</span>
                                    <p className="text-xs">1 S</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={dp} className="w-full" alt="" />
                        </div>
                    </div>
                    <div className="text-end">
                        <div className="stats  shadow bg-[rgba(255,255,255,0.10)] rounded-[12px] border-y-[1px]">
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
                        <div className="ps-10 flex justify-end">
                            <div className="divider  bg-[#EC46E5] w-[98%] h-[1px]"></div>
                        </div>
                    </div>
                </div>
                <AdComment></AdComment>
            </div>
        </div >
    );
};

export default DpPost;