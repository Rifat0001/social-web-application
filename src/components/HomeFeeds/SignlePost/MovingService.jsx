import image5 from "../../../assets/CreatePost/person-3.png";
import rage from '../../../assets/reply/rage.png'
import info from '../../../assets/reply/inf.png'
import contact from '../../../assets/reply/contact.png'
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
const MovingService = () => {
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
                        <div className="flex w-full z-10 moving-service-top relative bottom-[-5px]">
                            <div className="flex justify-center items-center w-full">
                                <div className="inside-blur flex justify-center items-center ">
                                    <img className="moving-img" src={moving} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* product description  */}
                        <div className="moving-description z-0 border">
                            {/* rating part  */}
                            <div className="bg-[#00072D]  h-[70px] w-full  px-5 ">
                                <div className="flex justify-between items-center ">
                                    <div >
                                        <h3 className="text-[14px] mt-2 ">Moving Service</h3>
                                        <div className="flex items-center">
                                            <p className="text-[13px]">Las Vegas .  <span className="ms-1 me-1 text-[#05FF00]">Available</span> . Service</p>
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
                                            <button className="conti ps-5 flex rounded-md w-[154px] h-[34px] gap-2 items-center">
                                                <img src={contact} alt="" />
                                                <p className="text-[14px] font-normal">Contact seller</p>
                                            </button>
                                            <button className="conti ps-7 rounded-md flex w-[144px] h-[34px] gap-2 items-center">
                                                <img src={info} alt="" />
                                                <p className="text-[14px] font-normal">More info</p>
                                            </button>
                                        </div>
                                    </div>
                                    {/* product footer  */}
                                    <div className="flex mx-5 gap-2 mt-4">
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
                                    <div className="moving-button flex item-center justify-center ms-16 my-4">
                                        <div className="flex gap-2 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                <path d="M4.92754 16C4.47584 16 4.08931 15.8435 3.76792 15.5304C3.44599 15.2168 3.28502 14.84 3.28502 14.4C3.28502 13.96 3.44599 13.5832 3.76792 13.2696C4.08931 12.9565 4.47584 12.8 4.92754 12.8C5.37923 12.8 5.76576 12.9565 6.08715 13.2696C6.40908 13.5832 6.57005 13.96 6.57005 14.4C6.57005 14.84 6.40908 15.2168 6.08715 15.5304C5.76576 15.8435 5.37923 16 4.92754 16ZM13.1401 16C12.6884 16 12.3019 15.8435 11.9805 15.5304C11.6586 15.2168 11.4976 14.84 11.4976 14.4C11.4976 13.96 11.6586 13.5832 11.9805 13.2696C12.3019 12.9565 12.6884 12.8 13.1401 12.8C13.5918 12.8 13.9786 12.9565 14.3005 13.2696C14.6219 13.5832 14.7826 13.96 14.7826 14.4C14.7826 14.84 14.6219 15.2168 14.3005 15.5304C13.9786 15.8435 13.5918 16 13.1401 16ZM2.1558 12L4.59903 7.68L1.64251 1.6H0V0H2.66908L3.44928 1.6H17L12.9143 8.8H5.83092L4.92754 10.4H14.7826V12H2.1558Z" fill="#F8F8F8" />
                                            </svg>Pay
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

export default MovingService;