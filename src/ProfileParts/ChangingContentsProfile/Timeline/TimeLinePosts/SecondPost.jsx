import {
    FaAngleDown,
    FaArrowRight,
    // FaEllipsisH,
    FaGlobe,
    FaHeart,
    FaRegComments,
} from "react-icons/fa";
import Img from "../../../../assets/CreatePost/bd-person.png";
import Sicon from "../../../../assets/CreatePost/Sicon.png";
import PostFunction from "../../../../components/HomeFeeds/PostFunction/PostFunction";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import CommentSection from "../../../../components/HomeFeeds/SignlePost/CommentSection";
import PostComment from "../../../../components/HomeFeeds/SignlePost/PostComment";
import Reply from "../../../../components/HomeFeeds/SignlePost/Reply";
import TimeLineComment from "./TimeLineComment";
const SecondPost = () => {
    return (
        <div className="bg-[#0A123E] py-5 px-3 mx-6 my-6 rounded-md  text-white">
            <div className="flex items-start justify-between">
                <div className="flex items-center justify-start gap-5">
                    <img src={Img} alt="" />

                    <div className="flex-col">
                        <p className="flex items-center justify-start gap-2">
                            <span>Oblivion Isme</span>
                            <FaArrowRight />
                            <span className="text-xs">Kevin Alexander</span>
                            <span className="text-[16px] profile-user">@kevinalexa3546</span>
                        </p>
                        <p className="flex items-center gap-3">
                            <span className="text-[16px] profile-user">@Oblivion1122</span>
                            <span className="text-xs">now</span>
                            <FaGlobe />
                            <FaAngleDown />
                        </p>
                    </div>
                    <div></div>
                </div>
                {/* 3 dot dropdown menu */}
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">

                        <PostFunction />
                    </button>
                </div>
            </div>
            <div className="space-y-[40px]">
                <h2 className=" ps-[105px]">happy birthdayyyy</h2>
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
            <div className="">
                <div className="">
                    <div className="  my-3 bg-[#00E7FC] w-[100%] h-[1px]"></div>
                </div>
                <TimeLineComment></TimeLineComment>
            </div>

        </div>
    );
};

export default SecondPost;