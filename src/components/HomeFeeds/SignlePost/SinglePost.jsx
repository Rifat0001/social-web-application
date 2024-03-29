import Img from "../../../assets/CreatePost/bd-person.png";
import {
  FaAngleDown,
  FaArrowRight,
  // FaEllipsisH,
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
import LoadMorePost from "./LoadMorePost";
import ArticlePost from "./ArticlePost";
import PostFunction from "../PostFunction/PostFunction";
import UserNameSell from "./UserNameSell";
import UserSold from "./UserSold";
import CourseSell from "./CourseSell";
import DpPost from "./DpPost";
import EventOnlyCount from "./EventOnlyCount";
import VideoPOst from "./VideoPOst";
import MovingService from "./MovingService";
import MovingSectionWithOutButton from "./MovingSectionWithOutButton";
import Test from "./Test";
import FeatureDoublePost from "./FeatureDoublePost";
import AudioPost from "./Audio/AudioPost";
import AudioImg from "./AudioImg/AudioImg";
import MusicVideo from "./MusicVideo/MusicVideo";
import LoopMusicVideo from "./LoopMusicVideo/LoopMusicVideo";
import AudioComment from "./AudioWithComment/AudioComment";
import AddNewFile from "./AddNewFile";
import AddFileWithReply from "./AddFileWithReply";
import MultiLayout from "./MultiLayout";
import { Link } from "react-router-dom";

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
              <Link to='/othersProfile/timeline/feeds'> Kevin Alexander</Link>
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
      <ArticlePost></ArticlePost>
      <UserNameSell></UserNameSell>
      <UserSold></UserSold>
      <CourseSell></CourseSell>
      <DpPost></DpPost>
      <EventOnlyCount></EventOnlyCount>
      <MovingService></MovingService>
      <MovingSectionWithOutButton></MovingSectionWithOutButton>
      <Test></Test>
      <FeatureDoublePost></FeatureDoublePost>
      <VideoPOst></VideoPOst>
      <AudioPost></AudioPost>
      <AudioImg></AudioImg>
      <MusicVideo></MusicVideo>
      <LoopMusicVideo></LoopMusicVideo>
      <AudioComment></AudioComment>
      <AddNewFile></AddNewFile>
      <AddFileWithReply></AddFileWithReply>
      <MultiLayout></MultiLayout>
      {/* from here post will end and show load more post  */}
      <LoadMorePost></LoadMorePost>

    </div>
  );
};

export default SinglePost;
