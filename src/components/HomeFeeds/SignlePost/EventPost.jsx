import image1 from "../../../assets/CreatePost/image-1.png";
import image2 from "../../../assets/CreatePost/image-2.png";
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
const EventPost = () => {
    return (
        <div className=" mx-auto relative pt-20">
            <div className="pb-5 evet ">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img src={img} alt="" />

                        <div className="flex-col">
                            <p className="flex items-center justify-start gap-2">
                                <span>Aliyan Farooq musk</span>

                                <span className="text-[10px] flex items-center"><img src={loop} alt="" /> Looped a event</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[16px] profile-user">@aliyan11</span>
                                <span className="text-xs">12 S </span>

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
                            <img src={family} alt="" />
                            <div className="ms-4">
                                <p>Family <span className="text-xs text-light">Created a new event</span></p>
                                <p className="text-xs">12 S</p>
                            </div>
                        </div>
                        <div className=" relative">
                            <img src={ev} className="w-full" alt="" />
                            <div className="">
                                <div className="family absolute p-2 top-2 ms-4 ">
                                    <p className="text-xl font-semibold ">Host: <span className="profile-user font-bold">Family</span> Group</p>
                                </div>


                                <div className="absolute right-2 p-1 top-1 ">
                                    <button className="but text-[9px]">See more</button>
                                </div>
                                <div className="flex absolute top-56 left-[5px]4 z-20">
                                    <div className="text-lg event-date text-center rounded-lg w-12 p-2 font-semibold text-[#0A123E] me-4">
                                        <p>23</p>
                                        <p>Nov</p>
                                    </div>
                                    <div>
                                        <div className="squad p-1">
                                            <p>SQUAD DESIGN DISCUSSION & DINNER | EVENT</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#000000BF] z-10 absolute top-64 border-b-md rounded-lg h-[170px] w-full">
                                    <div className="flex ms-[120px] me-4 mt-2 place ">
                                        <div className="pbc w-32"><p className="ms-4">Taking Place</p></div>
                                        <div className="flex items-center pbc"><p className="text-xs ps-4 pe-20">Zoom Call At 8 AM</p></div>
                                        <div className="flex items-center"><p className="text-[8px] text-[#00E7FC] ms-4">https://www.figma.com/file/hktj</p></div>
                                    </div>
                                    <div className="flex">
                                        <div className="after p-2 text-[11px]">After a success of blossom fest we are all set again for another musical event that's going to be finest</div>
                                        <div className="going flex items-center ms-6">
                                            <div className="go text-[8px] flex place w-[100px]">
                                                <p className="pbc pe-3 ps-3">Going</p>
                                                <p className="ps-3">999.9k</p>
                                            </div>
                                            <div className="go text-[8px] flex place w-[100px] ms-2">
                                                <p className="pbc pe-3 ps-3">Interested</p>
                                                <p className="ps-3">5k</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="count flex">
                                        <div className="dates mt-2 grid grid-cols-4 gap-6 text-center ms-11 ">
                                            <div className="">
                                                <div className="tar rounded-full">
                                                    <p className="text-[22px] font-semibold">11</p>
                                                </div>
                                                <p className="text-sm ">Days</p>
                                            </div>
                                            <div className="">
                                                <div className="tar rounded-full">
                                                    <p className="text-[22px] font-semibold">23</p>
                                                </div>
                                                <p className="text-sm">Hours</p>
                                            </div>
                                            <div className="">
                                                <div className="tar rounded-full">
                                                    <p className="text-[22px] font-semibold">31</p>
                                                </div>
                                                <p className="text-sm">Min</p>
                                            </div>
                                            <div className="">
                                                <div className="tar rounded-full">
                                                    <p className="text-[22px] font-semibold">51</p>
                                                </div>
                                                <p className="text-sm">Sec</p>
                                            </div>
                                        </div>
                                        {/* 2nd block  */}
                                        <div className="flex ms-20 mt-2">
                                            <div className="jo">
                                                <button className="join w-[112px] h-[37px] flex items-center tar justify-center">
                                                    <img src={plus} alt="" className="w-4 h-4 me-2" />
                                                    <p className="font-bold text-[lg]">Join</p>
                                                </button>
                                                <div className="flex items-center ms-[-10px] mt-1">
                                                    <img src={cal} alt="" /> <p className="ms-2 text-xs">12-November-2022</p>
                                                </div>
                                            </div>
                                            <div className="jo ms-10">
                                                <button className="join w-[112px] h-[37px] flex items-center tar justify-center">
                                                    <img src={int} alt="" className="w-4 h-4 me-2" />
                                                    <p className="font-bold text-[lg]">Interested</p>
                                                </button>
                                                <div className="flex items-center ms-[10px] mt-1">
                                                    <img src={cal} alt="" /> <p className="ms-2 text-xs">27-Jan-2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="text-end">
                        <div className="stats mt-[100px] shadow bg-[rgba(255,255,255,0.10)] rounded-[12px] border-y-[1px]">
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
            </div>
            <div className="">
                {/* <!-- Card 1 --> */}
                <div className="transform ps-10 transition cursor-pointer  ml-10 relative flex items-center px-6 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-8 h-0.5 bg-[#00E7FC] absolute top-8 left-[5px] z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="time2">
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
                <Reply></Reply>
                <div className=" flex justify-end">
                    <div className="divider  bg-[#00E7FC] w-[100%] h-[1px]"></div>
                </div>
                <CommentSection></CommentSection>
            </div>
        </div >
    );
};

export default EventPost;