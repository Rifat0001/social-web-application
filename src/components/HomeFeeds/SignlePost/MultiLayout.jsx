import img from '../../../assets/kelvin.png'
import msg from '../../../assets/msgLink.png'
import g1 from '../../../assets/g1.png'
import g2 from '../../../assets/g2.png'
import g3 from '../../../assets/g3.png'
import g4 from '../../../assets/g4.png'
import g5 from '../../../assets/g5.png'
// import rec from '../../../assets/reply/rec.png'
import {
    FaEllipsisH,
    FaHeart,
    FaRegComments
} from "react-icons/fa";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import Sicon from "../../../assets/CreatePost/Sicon.png";
import CommentSection from "./CommentSection";
const MultiLayout = () => {
    return (
        <div>


            <div className=" mx-auto relative pt-20">
                <div className="pb-5 ">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center  justify-start gap-5">
                            <img className='dp-img-vdo' src={img} alt="" />

                            <div className="flex-col">
                                <p className="flex items-center justify-start gap-2">
                                    <span>Kevin Alexander</span>
                                    <span className="text-[10px] flex items-center">added new photos</span>
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
                        <div className="gallery-layout gap-4 flex">
                            <div className="left-layout ">
                                <div className="g1 mb-4">
                                    <img src={g5} alt="" />
                                </div>
                                <div className="g1">
                                    <img src={g4} alt="" />
                                </div>
                            </div>
                            <div className="right-layout flex flex-col gap-4">
                                <div className="g2">
                                    <img src={g3} alt="" />
                                </div>
                                <div className="g2">
                                    <img src={g1} alt="" />
                                </div>
                                <div className="g2">
                                    <img src={g2} alt="" />
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
                <div className="">

                    <div className=" flex justify-end">
                        <div className="divider  bg-[#00E7FC] w-[100%] h-[1px]"></div>
                    </div>
                    <CommentSection></CommentSection>
                </div>
            </div >
        </div>
    );
};

export default MultiLayout;