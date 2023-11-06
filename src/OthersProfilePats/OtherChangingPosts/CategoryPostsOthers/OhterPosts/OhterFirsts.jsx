import profile from '../../../../assets/reply/bd-person.png'
import artbg from '../../../../assets/reply/artic.png'
import btnBG from '../../../../assets/reply/btn.png'
// import rec from '../../../../assets/reply/rec.png'
import {
    FaAngleDown,
    FaEllipsisH,
    FaGlobe,
    FaHeart,
    FaRegComments
} from "react-icons/fa";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import Sicon from "../../../../assets/CreatePost/Sicon.png";
import CommentSection from '../../../../components/HomeFeeds/SignlePost/CommentSection';
const OhterFirsts = () => {
    return (
        <div className="  text-white relative mx-6 px-3 py-5">
            <div className="pb-5 ">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img src={profile} alt="" />

                        <div className="flex-col">
                            <p className="flex items-center justify-start gap-2">
                                <span>Aliyan Farooq musk</span>

                                <span className="text-[10px] flex items-center">created a new article</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[16px] profile-user">@aliyan11</span>
                                <span className="text-xs">12 S</span>
                                <FaGlobe />
                                <FaAngleDown />
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
                <div className="mt-4 space-y-[20px] ms-20">
                    {/* article section started */}
                    <div>
                        <img src={artbg} alt="" className='w-full' />
                        <div className="article-bottom-2 relative">

                        </div>
                        <div className="absolute top-[340px] left-[120px]">
                            <p className="text-[15px]  text-white font-[600]">The Concept Of Art</p>
                            <p className="text-[12px] font-light">Art can really take many forms and can really describe all possibilities</p>
                        </div>
                        <button className="article-button flex items-center justify-center absolute top-[315px] left-[370px]">
                            <img src={btnBG} className="" alt="" />
                        </button>
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
                {/* <!-- Card 1 --> */}
                <div className=" flex ">
                    <div className="  my-3 bg-[#EC46E5] w-[100%] h-[1px]"></div>
                </div>
                <CommentSection></CommentSection>
            </div>
        </div >
    );
};

export default OhterFirsts;