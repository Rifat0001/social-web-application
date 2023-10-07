import img from '../../../assets/kelvin.png'
import msg from '../../../assets/msgLink.png'
// import rec from '../../../assets/reply/rec.png'
import gif from '../../../assets/gif.png'
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

import fire from "../../../assets/CreatePost/fire.png";
import image5 from "../../../assets/CreatePost/bd-person.png";

import image3 from "../../../assets/CreatePost/person-2.png";
import Sicon from "../../../assets/CreatePost/Sicon.png";
import CommentSection from "./CommentSection";
import Reply from './Reply';
const AddFileWithReply = () => {
    return (
        <div>


            <div className=" mx-auto relative pt-20">
                <div className="pb-5 couple3">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center  justify-start gap-5">
                            <img className='dp-img-vdo' src={img} alt="" />

                            <div className="flex-col">
                                <p className="flex items-center justify-start gap-2">
                                    <span>Kevin Alexander</span>
                                    <span className="text-[10px] flex items-center">added  a new file</span>
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
                        <div className="w-full z-10 message-link-container flex items-center px-4 gap-8">
                            {/* dp start  */}
                            <div className="message-box flex items-center justify-center ">
                                <img src={msg} className="" alt="" />
                            </div>
                            <div className="message-text">
                                <h2>Sell like crazy - a business startegy by sabrisuby</h2>
                                <p className="text-light">Best in your sell from today , you will better awear of it.</p>
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
                    <div className="ps-10 flex justify-end">
                        <div className="divider  bg-[#EC46E5] w-[98%] h-[1px]"></div>
                    </div>
                </div>
                <div className="">

                    {/* second card */}

                    <div className="transform ps-16 second-comment-msg transition cursor-pointer  ml-10 relative flex items-center px-6 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
                        {/* <!-- Line that connecting the box with the vertical line --> */}
                        <div className="w-14 h-0.5 bg-[#00E7FC] absolute top-8 left-[2px] z-0"></div>

                        {/* <!-- Content that showing in the box --> */}
                        <div className="flex items-start justify-start gap-2">
                            <img src={image3} alt="" width={45} height={40} />
                            <div>
                                <div className="p-3 rounded-xl border-[1px] border-b-0 shadow-lg">
                                    <div className="flex items-center justify-between gap-20">
                                        <div className="flex items-center justify-between gap-3">
                                            <span className="font-bold">Juan Gutierrez</span>
                                            <span className="text-[16px] profile-user">
                                                @juangutierrz110
                                            </span>
                                            <span className="text-[#A6A6A6]">5 d</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <FaExclamationCircle color="#8F8F8F" />
                                            <FaTrashAlt color="#8F8F8F" />
                                        </div>
                                    </div>
                                    <div className="gap-2">
                                        <p> <span className="text-[14px] me-2 profile-user">
                                            #classic
                                        </span></p>
                                        <img className="mt-2" src={gif} alt="" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-start py-4">
                                        <div className="stats shadow bg-[rgba(255,255,255,0.10)] rounded-[12px] border-y-[1px]">
                                            <div className="flex items-center justify-center gap-3 px-2">
                                                <div className=" text-white">200.8K</div>
                                                <FaHeart color="#FF0000" />
                                            </div>
                                            <div className="pro-side flex justify-center items-center gap-5 px-2">
                                                <h2 className="text-white">4.2K</h2>
                                                <FaRegComments color="#3ADF00" />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="friend-bd-border  px-5">Reply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* reply of comment 3 */}
                    <div className="transform transition cursor-pointer  ml-10 relative flex items-center px-6 ps-32 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
                        {/* <!-- Line that connecting the box with the vertical line --> */}
                        <div className="w-[30px] h-0.5 bg-[#00E7FC] absolute top-8 left-[88px] z-0"></div>

                        {/* <!-- Content that showing in the box --> */}
                        <div className="">
                            <div className="flex items-start justify-start gap-2">
                                <img src={image5} alt="" width={35} height={40} />
                                <div>
                                    <div className="p-3 rounded-xl border-[1px] border-b-0 shadow-lg">
                                        <div className="flex items-center justify-between gap-20">
                                            <div className="flex items-center justify-between gap-3">

                                                <span className="font-bold">Kevin Alexander</span>
                                                <span className="text-[16px] profile-user">
                                                    @kevinalexa3546
                                                </span>
                                                <span className="text-[#A6A6A6]">1 W</span>
                                            </div>
                                            <div className="flex gap-3">
                                                <FaExclamationCircle color="#8F8F8F" />
                                                <FaTrashAlt color="#8F8F8F" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[20px] profile-user">
                                                @Oblivion1122
                                            </span>
                                            <span>wow !! what a view , i love it </span>
                                            <img src={fire} alt="" width={15} height={11.72} />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-start py-4">
                                            <div className="stats shadow bg-[rgba(255,255,255,0.10)] rounded-[12px] border-y-[1px]">
                                                <div className="flex items-center justify-center gap-3 px-2">
                                                    <div className=" text-white">200.8K</div>
                                                    <FaHeart color="#FF0000" />
                                                </div>
                                                <div className="pro-side flex justify-center items-center gap-5 px-2">
                                                    <h2 className="text-white">4.2K</h2>
                                                    <FaRegComments color="#3ADF00" />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="friend-bd-border  px-5">Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <Reply></Reply>
                <div className=" flex justify-end">
                    <div className="divider  bg-[#00E7FC] w-[100%] h-[1px]"></div>
                </div>
                <CommentSection></CommentSection>
            </div >
        </div>
    );
};

export default AddFileWithReply;