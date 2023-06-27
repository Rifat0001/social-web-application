import profile from '../../../assets/reply/bd-person.png'
import artbg from '../../../assets/reply/artic.png'
import btnBG from '../../../assets/reply/btn.png'
// import rec from '../../../assets/reply/rec.png'
import {
    FaAngleDown,
    FaEllipsisH,
    FaGlobe,
    FaHeart,
    FaRegComments
} from "react-icons/fa";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import "./SinglePost.css";
import Sicon from "../../../assets/CreatePost/Sicon.png";
import "./SinglePost.css";
import CommentSection from "./CommentSection";
const ArticlePost = () => {
    return (
        <div className=" mx-auto relative pt-20">
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
                            <FaEllipsisH size={30} />
                        </button>
                    </div>
                </div>
                {/* poll start from here  */}
                <div className="mt-4 space-y-[40px] ms-28">
                    {/* article section started */}
                    <div>
                        <img src={artbg} alt="" />
                        <div className="article-bottom relative">

                        </div>
                        <div className="absolute top-[380px] left-[120px]">
                            <p className="text-[15px]  text-white font-[600]">The Concept Of Art</p>
                            <p className="text-[12px] font-light">Art can really take many forms and can really describe all possibilities</p>
                        </div>
                        <button className="article-button flex items-center justify-center absolute top-[350px] left-[370px]">
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

                <div className=" flex justify-end">
                    <div className="divider  bg-[#00E7FC] w-[100%] h-[1px]"></div>
                </div>
                <CommentSection></CommentSection>
            </div>
        </div >
    );
};

export default ArticlePost;