import image3 from "../../../assets/CreatePost/person-2.png";
import image5 from "../../../assets/CreatePost/person-3.png";
import fire from "../../../assets/CreatePost/fire.png";
import img from "../../../assets/CreatePost/bd-person.png";
import rage from '../../../assets/reply/rage.png'
import info from '../../../assets/reply/inf.png'
import contact from '../../../assets/reply/contact.png'
import pro1 from "../../../assets/reply/product1.png";
import pro2 from "../../../assets/reply/product2.png";
import course from "../../../assets/reply/course.png";
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
const CourseSell = () => {
    return (
        <div className=" mx-auto relative pt-20">
            <div className="pb-5 ">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img src={image5} alt="" />

                        <div className="flex-col">
                            <p className="flex items-center justify-start gap-2">
                                <span>Kevin Alexander</span>

                                <span className="text-[10px] flex items-center">Created a course</span>
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
                <div className=" space-y-[40px] mt-4 ms-24">
                    {/* product sell section  */}
                    <div>
                        {/* image section  */}
                        <div className="flex w-full z-10 relative bottom-[-5px]">
                            <img className="w-full" src={course} alt="" />
                        </div>
                        {/* product description  */}
                        <div className="product-description z-0 border">
                            {/* rating part  */}
                            <div className="bg-[#00072D]  h-[70px] w-full  px-5 pt-2 ">
                                <div className="flex justify-between items-center ">
                                    <div >
                                        <h3 className="text-[14px] mt-2 ">Designing</h3>
                                        <div className="flex items-center">
                                            <p className="text-[13px]"><span className="text-[#05FF00]">Available</span> . Course</p>
                                            <div className="flex ms-28 items-center">
                                                <img src={rage} alt="" />  <p className="text-[14px] ms-1 text-[#05FF00]">66.99 (USD)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-[-10px] text-[8px] rate  flex items-center gap-1">
                                        <p className="ms-1">(1.9k) Reviews</p>
                                        <FaStar className="text-[#FFE600]"></FaStar>
                                        <FaStar className="text-[#FFE600]"></FaStar>
                                        <FaStar className="text-[#FFE600]"></FaStar>
                                        <FaStar className="text-[#FFE600]"></FaStar>
                                        <FaStarHalfAlt className="text-[#FFE600]"></FaStarHalfAlt>
                                        <p>4.5</p>
                                    </div>
                                </div>
                            </div>
                            {/* more info  */}
                            <div className="mx-5 my-2">
                                <h2 className="text-[19px] font-medium">App Design</h2>
                                <div className="mt-4 flex items-center justify-between me-12">
                                    <button className="conti ps-5 flex rounded-md w-[154px] h-[34px] gap-2 items-center">
                                        <img src={contact} alt="" />
                                        <p className="text-[14px] font-normal">Contact seller</p>
                                    </button>

                                    <p className="text-[14px] font-light ">Available</p>
                                    <button className="conti justify-center rounded-md flex w-[104px] h-[34px] gap-2 items-center">
                                        <p className="text-[14px] font-normal">Pay Now</p>
                                    </button>
                                    <button className="conti ps-7 rounded-md flex w-[144px] h-[34px] gap-2 items-center">
                                        <img src={info} alt="" />
                                        <p className="text-[14px] font-normal">More info</p>
                                    </button>
                                </div>
                            </div>
                            {/* product footer  */}
                            <div className="flex mx-5 gap-2 mt-4 items-center">
                                <img src={info} className="mb-4" alt="" />
                                <p className="text-[14px]">App design is the art of planning and arranging content on a website
                                    so that it can be shared and accessed online with the world of tech t...</p>
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

export default CourseSell;