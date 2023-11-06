import image3 from "../../../../assets/CreatePost/person-2.png";
import fire from "../../../../assets/CreatePost/fire.png";
// import img from "../../../../assets/reply/eventp.png";
import loop from '../../../../assets/reply/event-loop.png'
import stat from '../../../../assets/reply/stat.png'
import img from '../../../../assets/OthersPages/Commons/Dp.png'
import {
    FaEllipsisH,
    FaExclamationCircle,

    FaHeart,
    FaRegComments,
    FaTrashAlt,
} from "react-icons/fa";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import Sicon from "../../../../assets/CreatePost/Sicon.png";
import Reply from "../../../../components/HomeFeeds/SignlePost/Reply";
import CommentSection from "../../../../components/HomeFeeds/SignlePost/CommentSection";
const OtherSecond = () => {
    return (
        <div className="  relative mx-6 px-3 py-5 text-white">
            <div className="pb-5 poli-x ">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img src={img} className="post-dp" alt="" />

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                <path d="M-7.14478e-08 1.63453L6 8.59L12 1.63454L10.59 -6.16331e-08L6 5.30934L1.41 -4.62904e-07L-7.14478e-08 1.63453Z" fill="#EDEDED" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* poll start from here  */}
                <div className="relative  space-y-[40px] ms-24">
                    <p>What is better?</p>
                    <div className="flex absolute bottom-12 right-0 z-20 border state rounded-xl items-center w-[180px] h-[28px]">
                        <img className="ms-4" src={stat} alt="" />
                        <p className="text-xs ms-4">59 total votes</p>
                    </div>
                    <div className=" z-10">
                        <form action="">
                            <label className="relative">
                                <input type="radio" id="google" name="radio" checked /> {/* Add 'checked' here */}
                                <span className="w-[630px]">
                                    <p>Google</p>
                                    <p className="absolute right-8">89%</p>
                                </span>
                            </label>
                            <label className="relative w-[610px]">
                                <input type="radio" id="defont" name="radio" />
                                <span className="w-[630px]">
                                    <p>Defont</p>
                                    <p className="absolute right-4">90% ></p>

                                </span>
                            </label>
                        </form>
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
                    <div className="w-14 h-0.5 bg-[#00E7FC] absolute top-8 left-[0px] z-0"></div>

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
                <div className=" flex ">
                    <div className="  my-3 bg-[#EC46E5] w-[100%] h-[1px]"></div>
                </div>
                <CommentSection></CommentSection>
            </div>
        </div >
    );
};

export default OtherSecond;