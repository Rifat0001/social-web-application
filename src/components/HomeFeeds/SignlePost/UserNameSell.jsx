import image3 from "../../../assets/CreatePost/person-2.png";
import fire from "../../../assets/CreatePost/fire.png";
import img from "../../../assets/CreatePost/bd-person.png";
import rage from '../../../assets/reply/rage.png'
import info from '../../../assets/reply/inf.png'
import contact from '../../../assets/reply/contact.png'
import pro1 from "../../../assets/reply/product1.png";
import pro2 from "../../../assets/reply/product2.png";
// import rec from '../../../assets/reply/rec.png'
import {
    FaAngleDown,
    FaEllipsisH,
    FaExclamationCircle,
    FaGlobe,
    FaStar,
    FaStarHalfAlt,
    FaHeart,
    FaRegComments,
    FaTrashAlt,
} from "react-icons/fa";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import "./SinglePost.css";
import Sicon from "../../../assets/CreatePost/Sicon.png";
import "./SinglePost.css";
import CommentSection from "./CommentSection";
const UserNameSell = () => {
    return (
        <div className=" mx-auto relative pt-20">
            <div className="pb-5">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img src={img} alt="" />

                        <div className="flex-col">
                            <p className="flex items-center justify-start gap-2">
                                <span>Oblivion Isme</span>

                                <span className="text-[10px] flex items-center">Added a username for sell</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[16px] profile-user">@Oblivion1122</span>
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
                    {/* product sell section  */}
                    <div className="userSell">
                        {/* image section  */}
                        <div className="flex justify-center  py-20 rounded-2xl sell-btn w-full z-10  bottom-[-5px]">
                            <p className="user-sell text-[44px]">@windows</p>
                        </div>
                        {/* product description  */}
                        <div className=" z-0">
                            {/* rating part  */}
                            <div className="bg-[#00072D]  h-[70px] w-full  px-5 pt-2 ">
                                <div className="flex justify-between items-center ">
                                    <div >
                                        <h3 className="text-[14px] mt-2 ">Username</h3>
                                        <div className="flex items-center">
                                            <p className="text-[13px] text-[#05FF00]">Available</p>
                                            <div className="flex ms-4 items-center">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-[-20px] text-[8px]   flex items-center gap-1">
                                        <img src={rage} alt="" />  <p className="text-[14px] ms-1 text-[#05FF00]">66.99 (USD)</p>
                                    </div>
                                </div>
                            </div>
                            {/* more info  */}
                            <div className="mx-5 my-1">
                                <span className="text-[19px] profile-user font-semibold ">@windows</span>
                                <div className="flex">
                                    <button className="conti ps-7 flex w-[154px] h-[34px] mt-1 gap-2 items-center">
                                        <img src={info} alt="" />
                                        <p className="text-[14px] font-medium">More info</p>
                                    </button>
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
                </div>
            </div>

            <div className="">

                <div className=" flex justify-end">
                    <div className="divider  bg-[#00E7FC] w-[100%] h-[1px]"></div>
                </div>
                <CommentSection></CommentSection>
            </div>
        </div >
    );
};

export default UserNameSell;