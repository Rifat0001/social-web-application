import image3 from "../../../assets/CreatePost/person-2.png";
import fire from "../../../assets/CreatePost/fire.png";
import img from "../../../assets/CreatePost/bd-person.png";
import donation from '../../../assets/reply/donate.png'
import raise from '../../../assets/reply/raise.png'
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
import "./SinglePost.css";
import Sicon from "../../../assets/CreatePost/Sicon.png";
import "./SinglePost.css";
import CommentSection from "./CommentSection";
import Reply from "./Reply";
const Donation = () => {
    return (
        <div className=" mx-auto relative pt-20">
            <div className="pb-5 dona ">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img src={img} alt="" />

                        <div className="flex-col">
                            <p className="flex items-center justify-start gap-2">
                                <span>Oblivion Isme</span>

                                <span className="text-[10px] flex items-center">Created a donation request</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[16px] profile-user">@Oblivion1122</span>
                                <span className="text-xs">12 S</span>
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
                {/* poll start from here  */}
                <div className=" space-y-[40px] ms-24">
                    {/* donation part started  */}
                    <div className="relative">
                        <img className="w-full" src={donation} alt="" />
                        <div className="donate-bg absolute bottom-0 h-[102px] w-full  px-5 pt-2 ">
                            <div className="flex justify-between items-center ">
                                <div >
                                    <h3 className="text-[24px] font-semibold ">So Inverse</h3>
                                    <div className="flex items-center">
                                        <img src={raise} alt="" className="me-1" /> 0 raised of <img src={raise} className="mx-1" alt="" /> 20000
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button className="donate-btn">Donate</button>
                                </div>
                            </div>
                            <div className="dividerx h-2 rounded-xl"></div>
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
                </div>
            </div>
            <div className="ps-14">
                <div className="divider bg-[#EC46E5] w-full h-[1px]"></div>
            </div>
            <div className="">
                {/* <!-- Card 1 --> */}
                <div className="transform ps-16 transition cursor-pointer  ml-10 relative flex items-center px-6 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-11 h-0.5 bg-[#00E7FC] absolute top-8 left-[5px] z-0"></div>

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

export default Donation;