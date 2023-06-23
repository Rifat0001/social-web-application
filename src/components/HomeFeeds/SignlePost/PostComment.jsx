import Img from "../../../assets/CreatePost/bd-person.png";
import image1 from "../../../assets/CreatePost/image-1.png";
import image2 from "../../../assets/CreatePost/image-2.png";
import image3 from "../../../assets/CreatePost/person-2.png";
import fire from "../../../assets/CreatePost/fire.png";
import {
  FaAngleDown,
  FaEllipsisH,
  FaExclamationCircle,
  FaGlobe,
  FaHeart,
  FaRegComments,
  FaTrashAlt,
} from "react-icons/fa";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import "./SinglePost.css";
import Sicon from "../../../assets/CreatePost/Sicon.png";

const PostComment = () => {
  return (
    // <div className="py-5">
    //   <div className="flex items-start justify-between">
    //     <div className="flex items-center justify-start gap-5">
    //       <img src={Img} alt="" />

    //       <div className="flex-col">
    //         <p className="flex items-center justify-start gap-2">
    //           <span>Oblivion Isme</span>
    //           <FaArrowRight />
    //           <span>Kevin Alexander</span>
    //           <span className="text-[16px] profile-user">@kevinalexa3546</span>
    //         </p>
    //         <p className="flex items-center gap-3">
    //           <span className="text-[16px] profile-user">@Oblivion1122</span>
    //           <span>now</span>
    //           <FaGlobe />
    //           <FaAngleDown />
    //         </p>
    //       </div>
    //       <div></div>
    //     </div>
    //     <div className="flex-none">
    //       <button className="btn btn-square btn-ghost">
    //         <FaEllipsisH size={30} />
    //       </button>
    //     </div>
    //   </div>
    //   <div className="space-y-[40px]">
    //     <div className="ps-[105px] pt-3 space-y-4">
    //       <h2 className=" ">
    //         “Hi All , i am sharing my recent fun posts here , share your
    //         thoughts.”{" "}
    //       </h2>
    //       <div className="flex items-center justify-between">
    //         <img src={image1} alt="" />
    //         <img src={image2} alt="" />
    //       </div>
    //     </div>
    //     <div className="text-end">
    //       <div className="stats shadow bg-[rgba(255,255,255,0.10)] rounded-[12px] border-y-[1px]">
    //         <div className="flex items-center justify-center gap-3 px-2">
    //           <div className=" text-white">200.8K</div>
    //           <FaHeart color="#FF0000" />
    //         </div>
    //         <div className="pro-side flex justify-center items-center gap-5 px-2">
    //           <h2 className="text-white">4.2K</h2>
    //           <FaRegComments color="#3ADF00" />
    //         </div>
    //         <div className="pro-side flex justify-center items-center gap-7 px-2">
    //           <h2 className="text-white">24</h2>
    //           <HiOutlineBookmarkAlt color="#B82BEA" />
    //         </div>

    //         <div className="pro-side flex items-center justify-center gap-10 px-2">
    //           <h2 className="text-white">1</h2>
    //           <img src={Sicon} alt="" />
    //         </div>
    //       </div>
    //       <div className="ps-10">
    //         <div className="divider bg-[#EC46E5] w-full h-[1px]"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <!-- component -->
    <div className=" mx-auto relative py-20">
      <div className="pb-5 border-l-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center justify-start gap-5">
            <img src={Img} alt="" />

            <div className="flex-col">
              <p className="flex items-center justify-start gap-2">
                <span>Oblivion Isme</span>

                <span className="text-[10px]">Added Photos</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[16px] profile-user">@Oblivion1122</span>
                <span>12 S - Translate</span>
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
      <div className="border-l-2 mt-10 border-[#00E7FC]">
        {/* <!-- Card 1 --> */}
        <div className="transform transition cursor-pointer  ml-10 relative flex items-center px-6 py-4 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Line that connecting the box with the vertical line --> */}
          <div className="w-10 h-0.5 bg-[#00E7FC] absolute -left-10 z-0"></div>

          {/* <!-- Content that showing in the box --> */}
          <div className="flex items-center justify-start gap-2">
            <img src={image3} alt="" />
            <div className="p-3 rounded-xl border-[1px] border-b-0 shadow-lg">
              <div className="flex items-center justify-between gap-20">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-bold">Juan Gutierrez</span>
                  <span className="text-[16px] profile-user">
                    @juangutierrz110
                  </span>
                  <span className="text-[#A6A6A6]">1 W</span>
                </div>
                <div className="flex gap-3">
                  <FaExclamationCircle color="#8F8F8F" />
                  <FaTrashAlt color="#8F8F8F" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[20px] profile-user">
                  @juangutierrz110
                </span>
                <span>wow !! what a view , i love it </span>
                <img src={fire} alt="" width={15} height={11.72}/>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Dot Follwing the Left Vertical Line --> */}
          <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          {/* <!-- Line that connecting the box with the vertical line --> */}
          <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

          {/* <!-- Content that showing in the box --> */}
          <div className="flex-auto">
            <h1 className="text-lg">Day 1</h1>
            <h1 className="text-xl font-bold">
              Orientation and Briefing on Uniliver basics
            </h1>
            <h3>Classroom</h3>
          </div>
          <a href="#" className="text-center text-white hover:text-gray-300">
            Download materials
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
