import Img from "../../../assets/CreatePost/bd-person.png";
import image1 from "../../../assets/CreatePost/image-1.png";
import image2 from "../../../assets/CreatePost/image-2.png";
import image3 from "../../../assets/CreatePost/person-2.png";
import image4 from "../../../assets/CreatePost/person-3.png";
import fire from "../../../assets/CreatePost/fire.png";
import image5 from "../../../assets/CreatePost/bd-person.png";
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
import "./SinglePost.css";
const PostComment = () => {
  return (
    <div className=" mx-auto relative pt-20">
      <div className="pb-5 time ">
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
                <span className="text-xs">12 S - Translate</span>
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
            <div className="ps-10 flex justify-end">
              <div className="divider  bg-[#EC46E5] w-[98%] h-[1px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        {/* <!-- Card 1 --> */}
        <div className="transform ps-10 transition cursor-pointer  ml-10 relative flex items-center px-6 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Line that connecting the box with the vertical line --> */}
          <div className="w-8 h-0.5 bg-[#00E7FC] absolute top-8 left-1 z-0"></div>

          {/* <!-- Content that showing in the box --> */}
          <div className="time2">
            <div className="flex items-start justify-start gap-2">
              <img src={image3} alt="" width={45} height={40} />
              <div>
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
                      @Oblivion1122
                    </span>
                    <span>wow !! what a view , i love it </span>
                    <img src={fire} alt="" width={15} height={11.72} />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-start py-4">
                    <div className="stats shadow bg-[rgba(255,255,255,0.10)] rounded-[12px] border-y-[1px]">
                      <div className="flex items-center justify-center gap-3 px-2">
                        <div className=" text-white">200.8K</div>
                        <FaHeart color="#FF0000" />
                      </div>
                      <div className="pro-side flex justify-center items-center gap-5 px-2">
                        <h2 className="text-white">4.2K</h2>
                        <FaRegComments color="#3ADF00" />
                      </div>
                    </div>
                  </div>
                  <button className="friend-bd-border  px-5">Reply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second card */}

        <div className="transform ps-10 second-comment transition cursor-pointer  ml-10 relative flex items-center px-6 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Line that connecting the box with the vertical line --> */}
          <div className="w-8 h-0.5 bg-[#00E7FC] absolute top-8 left-1 z-0"></div>

          {/* <!-- Content that showing in the box --> */}
          <div className="flex items-start justify-start gap-2">
            <img src={image3} alt="" width={45} height={40} />
            <div>
              <div className="p-3 rounded-xl border-[1px] border-b-0 shadow-lg">
                <div className="flex items-center justify-between gap-20">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-bold">Juan Gutierrez</span>
                    <span className="text-[16px] profile-user">
                      @juangutierrz110
                    </span>
                    <span className="text-[#A6A6A6]">5 d</span>
                  </div>
                  <div className="flex gap-3">
                    <FaExclamationCircle color="#8F8F8F" />
                    <FaTrashAlt color="#8F8F8F" />
                  </div>
                </div>
                <div className="flex  gap-2">
                  <p>
                    <span className="text-[20px] me-2 profile-user">
                      @Oblivion1122
                    </span>
                    <span className=" pr-20">
                      It seems like you enjoy so much last night !?{" "}
                    </span></p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-start py-4">
                  <div className="stats shadow bg-[rgba(255,255,255,0.10)] rounded-[12px] border-y-[1px]">
                    <div className="flex items-center justify-center gap-3 px-2">
                      <div className=" text-white">200.8K</div>
                      <FaHeart color="#FF0000" />
                    </div>
                    <div className="pro-side flex justify-center items-center gap-5 px-2">
                      <h2 className="text-white">4.2K</h2>
                      <FaRegComments color="#3ADF00" />
                    </div>
                  </div>
                </div>
                <button className="friend-bd-border  px-5">Reply</button>
              </div>
            </div>
          </div>
        </div>
        {/* reply of comment 3 */}
        <div className="transform transition cursor-pointer  ml-10 relative flex items-center px-6 ps-[100px] py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Line that connecting the box with the vertical line --> */}
          <div className="w-[30px] h-0.5 bg-[#00E7FC] absolute top-8 left-16 z-0"></div>

          {/* <!-- Content that showing in the box --> */}
          <div className="time2">
            <div className="flex items-start justify-start gap-2">
              <img src={image5} alt="" width={35} height={40} />
              <div>
                <div className="p-3 rounded-xl border-[1px] border-b-0 shadow-lg">
                  <div className="flex items-center justify-between gap-20">
                    <div className="flex items-center justify-between gap-3">

                      <span className="font-bold">Kevin Alexander</span>
                      <span className="text-[16px] profile-user">
                        @kevinalexa3546
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
                      @Oblivion1122
                    </span>
                    <span>wow !! what a view , i love it </span>
                    <img src={fire} alt="" width={15} height={11.72} />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-start py-4">
                    <div className="stats shadow bg-[rgba(255,255,255,0.10)] rounded-[12px] border-y-[1px]">
                      <div className="flex items-center justify-center gap-3 px-2">
                        <div className=" text-white">200.8K</div>
                        <FaHeart color="#FF0000" />
                      </div>
                      <div className="pro-side flex justify-center items-center gap-5 px-2">
                        <h2 className="text-white">4.2K</h2>
                        <FaRegComments color="#3ADF00" />
                      </div>
                    </div>
                  </div>
                  <button className="friend-bd-border  px-5">Reply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* reply of comment 3 */}
        <div className="transform transition cursor-pointer  ml-10 relative flex items-center px-6 ps-[100px] py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Line that connecting the box with the vertical line --> */}
          <div className="w-[30px] h-0.5 bg-[#00E7FC] absolute top-8 left-16 z-0"></div>

          {/* <!-- Content that showing in the box --> */}
          <div className="time2">
            <div className="flex items-start justify-start gap-2">
              <img src={image5} alt="" width={35} height={40} />
              <div>
                <div className="p-3 rounded-xl border-[1px] border-b-0 shadow-lg">
                  <div className="flex items-center justify-between gap-20">
                    <div className="flex items-center justify-between gap-3">

                      <span className="font-bold">Kevin Alexander</span>
                      <span className="text-[16px] profile-user">
                        @kevinalexa3546
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
                      @Oblivion1122
                    </span>
                    <span>wow !! what a view , i love it </span>
                    <img src={fire} alt="" width={15} height={11.72} />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-start py-4">
                    <div className="stats shadow bg-[rgba(255,255,255,0.10)] rounded-[12px] border-y-[1px]">
                      <div className="flex items-center justify-center gap-3 px-2">
                        <div className=" text-white">200.8K</div>
                        <FaHeart color="#FF0000" />
                      </div>
                      <div className="pro-side flex justify-center items-center gap-5 px-2">
                        <h2 className="text-white">4.2K</h2>
                        <FaRegComments color="#3ADF00" />
                      </div>
                    </div>
                  </div>
                  <button className="friend-bd-border  px-5">Reply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* third card */}
        <div className="transform transition cursor-pointer  ml-10 relative flex ps-10 items-center px-6 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Line that connecting the box with the vertical line --> */}
          <div className="w-8 h-0.5 bg-[#00E7FC] absolute top-8 left-1 z-0"></div>

          {/* <!-- Content that showing in the box --> */}
          <div className="flex items-start justify-start gap-2">
            <img src={image4} alt="" width={45} height={40} />
            <div>
              <div className="p-3 rounded-xl border-[1px] border-b-0 shadow-lg">
                <div className="flex items-center justify-between gap-20">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-bold">Kevin Alexander</span>
                    <span className="text-[16px] profile-user">
                      @kevinalexa3546
                    </span>
                    <span className="text-[#A6A6A6]">20 h</span>
                  </div>
                  <div className="flex gap-3">
                    <FaExclamationCircle color="#8F8F8F" />
                    <FaTrashAlt color="#8F8F8F" />
                  </div>
                </div>
                <p className=" pr-20">
                  <span className="text-[20px] profile-user">
                    @Oblivion1122
                  </span> {' '}
                  wow it seems like a movie scene i wish i was
                  There.. sorry I was busy doing some other stuff.{" "}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-start py-4">
                  <div className="stats shadow bg-[rgba(255,255,255,0.10)] rounded-[12px] border-y-[1px]">
                    <div className="flex items-center justify-center gap-3 px-2">
                      <div className=" text-white">200.8K</div>
                      <FaHeart color="#FF0000" />
                    </div>
                    <div className="pro-side flex justify-center items-center gap-5 px-2">
                      <h2 className="text-white">4.2K</h2>
                      <FaRegComments color="#3ADF00" />
                    </div>
                  </div>
                </div>
                <button className="friend-bd-border  px-5">Reply</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
};

export default PostComment;
