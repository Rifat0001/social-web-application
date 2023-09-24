import rage from '../../../assets/reply/rage.png'
import info from '../../../assets/reply/inf.png'
import f1 from '../../../assets/w-move-1.png'
import f2 from '../../../assets/w-move-2.png'
import moving from '../../../assets/moving.png'
import worker from '../../../assets/people.png'
import tag from '../../../assets/tag.png'
import img from "../../../assets/reply/eventp.png";
import item from '../../../assets/item.png'
// import rec from '../../../assets/reply/rec.png'
import './MovingService.css'
import {
    FaEllipsisH,
    FaStar,
    FaStarHalfAlt,
    FaHeart,
    FaRegComments
} from "react-icons/fa";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import "./SinglePost.css";
import Sicon from "../../../assets/CreatePost/Sicon.png";
import "./SinglePost.css";
import CommentSection from "./CommentSection";
const MovingSectionWithOutButton = () => {
    return (
        <div className=" mx-auto relative pt-20">
            <div className="pb-5 ">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img src={img} alt="" />

                        <div className="flex-col">
                            <p className="flex items-center justify-start gap-2">
                                <span>Kevin Alexander</span>

                                <span className="text-[10px] flex items-center">Added a new service</span>
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
                        <div className="flex  z-10  relative bottom-[-5px]">
                            <img src={f1} className='w-[304px] w-m-1' alt="" />
                            <img src={f2} className='w-[304px] w-m-2' alt="" />
                        </div>
                        {/* product description  */}
                        <div className="moving-description z-0 border">
                            {/* rating part  */}
                            <div className="bg-[#00072D]  h-[70px] w-full  px-5 ">
                                <div className="flex justify-between items-center ">
                                    <div >
                                        <h3 className="text-[14px] mt-2 ">Moving Service</h3>
                                        <div className="flex items-center">
                                            <p className="text-[13px]">Las Vegas .  <span className="ms-1 me-1 text-[#FFE600]">Unavailable</span> . Service</p>
                                            <div className="flex ms-16 items-center">
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
                            <div className="flex">
                                {/* left side of the details part  */}
                                <div className="w-[600px]">
                                    <div className="mx-5 my-2">
                                        <h2 className="text-[19px] font-medium">Labor Service</h2>
                                        <div className="mt-4 flex gap-6">

                                            <button className="conti ps-7 rounded-md flex w-[144px] h-[34px] gap-2 items-center">
                                                <img src={info} alt="" />
                                                <p className="text-[14px] font-normal">More info</p>
                                            </button>
                                        </div>
                                    </div>
                                    {/* product footer  */}
                                    <div className="flex mx-5 gap-2 my-4">
                                        <img src={info} className="mt-1 w-[16px] h-[16px]" alt="" />
                                        <p className="text-[14px]">We are a company that helps people and
                                            businesses move their goods from one place
                                            to another. we offers all-inclusive services for
                                            relocations, like packing, loading, moving,
                                            unloading, unpacking, and arranging of items.</p>
                                    </div>
                                </div>

                                {/* right side of the part  */}
                                <div className="w-[260px] mt-2 me-6">
                                    {/* single components  */}
                                    <div className="flex font-light justify-between">
                                        {/* couple  */}
                                        <div className="flex items-center gap-2">
                                            <img src={worker} alt="" className="w-[16px] h-[16px]" />
                                            <p className="font-light">Workers</p>
                                        </div>
                                        2
                                    </div>
                                    {/* single components  */}
                                    <div className="flex font-light justify-between">
                                        {/* couple  */}
                                        <div className="flex items-center gap-2">
                                            <img src={tag} alt="" className="w-[16px] h-[16px]" />
                                            <p>Amount</p>
                                        </div>
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                                <path d="M3.55888 0V3.19741L5.17685 4.8444V8.07976L3.55888 9.70778V6.45173L1.94092 4.85303V1.62802L3.55888 0Z" fill="white" />
                                                <path d="M5.82568 2.59082L0.648193 5.69731V6.47393L5.82568 3.36097V2.59082Z" fill="white" />
                                                <path d="M6.47185 3.23541L0 7.07632L0 7.76571L6.47185 3.92481V3.23541Z" fill="white" />
                                                <circle cx="3.88351" cy="10.3534" r="0.647185" fill="white" />
                                            </svg> <p className="text-[14px] ms-1 ">100,2 Hr</p>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="176" height="4" viewBox="0 0 176 4" fill="none">
                                            <path d="M2 2L174 2" stroke="url(#paint0_linear_146_16516)" stroke-width="1.5" stroke-linecap="round" />
                                            <defs>
                                                <linearGradient id="paint0_linear_146_16516" x1="2" y1="1.5" x2="174" y2="1.5" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.00520833" stop-color="white" stop-opacity="0" />
                                                    <stop offset="0.536458" stop-color="white" />
                                                    <stop offset="1" stop-color="white" stop-opacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    {/* single components  */}
                                    <div className="flex font-light justify-between">
                                        {/* couple  */}
                                        <div className="flex items-center gap-2">
                                            <img src={item} alt="" className="w-[16px] h-[16px]" />
                                            <p className="font-light">item</p>
                                        </div>
                                        Truck
                                    </div>
                                    {/* single components  */}
                                    <div className="flex font-light justify-between items-start mt-2">
                                        {/* couple  */}
                                        <div className="flex items-center gap-2">
                                            <img src={tag} alt="" className="w-[16px] h-[16px]" />
                                            <p>Amount</p>
                                        </div>
                                        <div className="">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                                    <path d="M3.55888 0V3.19741L5.17685 4.8444V8.07976L3.55888 9.70778V6.45173L1.94092 4.85303V1.62802L3.55888 0Z" fill="white" />
                                                    <path d="M5.82568 2.59082L0.648193 5.69731V6.47393L5.82568 3.36097V2.59082Z" fill="white" />
                                                    <path d="M6.47185 3.23541L0 7.07632L0 7.76571L6.47185 3.92481V3.23541Z" fill="white" />
                                                    <circle cx="3.88351" cy="10.3534" r="0.647185" fill="white" />
                                                </svg> <p className="text-[14px] ms-1 ">100, Flat Fee</p>
                                            </div>
                                            <div className="flex items-center ps-4">
                                                +  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                                    <path d="M3.55888 0V3.19741L5.17685 4.8444V8.07976L3.55888 9.70778V6.45173L1.94092 4.85303V1.62802L3.55888 0Z" fill="white" />
                                                    <path d="M5.82568 2.59082L0.648193 5.69731V6.47393L5.82568 3.36097V2.59082Z" fill="white" />
                                                    <path d="M6.47185 3.23541L0 7.07632L0 7.76571L6.47185 3.92481V3.23541Z" fill="white" />
                                                    <circle cx="3.88351" cy="10.3534" r="0.647185" fill="white" />
                                                </svg> <p className="text-[14px] ms-1 ">1, 1 mile</p>
                                            </div>
                                            <div className="flex items-center ps-4">
                                                +  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                                    <path d="M3.55888 0V3.19741L5.17685 4.8444V8.07976L3.55888 9.70778V6.45173L1.94092 4.85303V1.62802L3.55888 0Z" fill="white" />
                                                    <path d="M5.82568 2.59082L0.648193 5.69731V6.47393L5.82568 3.36097V2.59082Z" fill="white" />
                                                    <path d="M6.47185 3.23541L0 7.07632L0 7.76571L6.47185 3.92481V3.23541Z" fill="white" />
                                                    <circle cx="3.88351" cy="10.3534" r="0.647185" fill="white" />
                                                </svg> <p className="text-[14px] ms-1 ">25, gas</p>
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
                </div>
            </div>
            <div className="">

                <div className=" flex justify-end">
                    <div className="divider  bg-[#EC46E5] w-[100%] h-[1px]"></div>
                </div>
                <CommentSection></CommentSection>
            </div>
        </div >
    );
};

export default MovingSectionWithOutButton;