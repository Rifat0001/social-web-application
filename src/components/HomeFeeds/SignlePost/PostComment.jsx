import Img from "../../../assets/CreatePost/bd-person.png";
import image1 from "../../../assets/CreatePost/image-1.png";
import image2 from "../../../assets/CreatePost/image-2.png";
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

const PostComment = () => {
  return (
    <div className="py-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center justify-start gap-5">
          <img src={Img} alt="" />

          <div className="flex-col">
            <p className="flex items-center justify-start gap-2">
              <span>Oblivion Isme</span>
              <FaArrowRight />
              <span>Kevin Alexander</span>
              <span className="text-[16px] profile-user">@kevinalexa3546</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[16px] profile-user">@Oblivion1122</span>
              <span>now</span>
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
        <div className="ps-[105px] pt-3 space-y-4">
          <h2 className=" ">
            “Hi All , i am sharing my recent fun posts here , share your
            thoughts.”{" "}
          </h2>
          <div className="flex items-center justify-between">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
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
          <div className="ps-10">
            <div className="divider bg-[#EC46E5] w-full h-[1px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
