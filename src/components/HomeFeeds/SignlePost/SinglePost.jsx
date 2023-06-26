import Img from "../../../assets/CreatePost/bd-person.png";
import {
  FaAngleDown,
  FaArrowRight,
  FaEllipsisH,
  FaGlobe,
  FaHeart,
  FaRegComments,
} from "react-icons/fa";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import "./SinglePost.css";
import Sicon from "../../../assets/CreatePost/Sicon.png";
import CommentSection from "./CommentSection";
import PostComment from "./PostComment";
import Reply from "./Reply";
import EventPost from "./EventPost";
import PollPost from "./PollPost";
import Donation from "./Donation";
import ProductSell from "./ProductSell";
import EventWithLogo from "./EventWithLogo";

const SinglePost = () => {
  return (
    <div className="bg-[#0A123E] py-5 px-6 mx-6 my-6 rounded-md  text-white">
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
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <FaEllipsisH size={30} />
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
      <div className="ps-10 flex justify-end">
        <div className="divider  bg-[#EC46E5] w-[98%] h-[1px]"></div>
      </div>
      <CommentSection></CommentSection>
      <PostComment></PostComment>
      <Reply></Reply>
      <div className=" flex justify-end">
        <div className="divider  bg-[#00E7FC] w-[100%] h-[1px]"></div>
      </div>
      <CommentSection></CommentSection>
      <EventPost></EventPost>
      <PollPost></PollPost>
      <Donation></Donation>
      <ProductSell></ProductSell>
      <EventWithLogo></EventWithLogo>
    </div>
  );
};

export default SinglePost;
