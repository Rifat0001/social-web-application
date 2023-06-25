import bg from "../../assets/rect1.png";
import profile from "../../assets/rect under.png";
import follow from "../../assets/fooll.png";
import generateicon from '../../assets/CreatePost/generatelink.png'
import p1 from '../../assets/CreatePost/p1.png'
import p2 from '../../assets/CreatePost/p2.png'
import p3 from '../../assets/CreatePost/p3.png'
import sendicon from '../../assets/CreatePost/send.png'
import tick from "../../assets/tik.png";
import gift from "../../assets/bd-gift.png";
import LIcon from "../../assets/CreatePost/link.png";
import la1 from "../../assets/CreatePost/la1.png";
import lp1 from "../../assets/CreatePost/lp1.png";
import lp2 from "../../assets/CreatePost/lp2.png";
import fire from "../../assets/CreatePost/fire.png";
import love from "../../assets/CreatePost/love.png";
import la2 from "../../assets/CreatePost/la2.png";
import la3 from "../../assets/CreatePost/la3.png";
import Followings from "../../assets/0.png";
import bdp from "../../assets/bd-person.png";
import uparrow from "../../assets/arrow-up.png";
import reload from "../../assets/reload.png";
import m1 from "../../assets/m1.png";
import m2 from "../../assets/m2.png";
import m3 from "../../assets/m3.png";
import m4 from "../../assets/m4.png";
import S1 from "../../assets/CreatePost/suggested1.png";
import S2 from "../../assets/CreatePost/suggested2.png";
import pageLike from "../../assets/like banners.png";
import pageLogo from "../../assets/like logo.png";
import like from "../../assets/likess.png";
import Users from "../../assets/CreatePost/users.png";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="mt-5 ">
      {/* background image behind the profile pic  */}
      <div>
        <img src={bg} className="w-[320px]" alt="" />
      </div>
      <div className="bg-[#00072D] pb-4 frd-bg">
        {/* 3 parts of image  */}
        <div className="  grid justify-around grid-cols-3">
          <div className="text-center text-white mt-4">
            <p className="follower ">123K</p>
            <p className="text-xs">Followers</p>
          </div>
          <div className="text-center ">
            <img className="profile-img" src={profile} alt="" />
            <img src={follow} className="follow-tik" alt="" />
            <img src={tick} className="verify-tik" alt="" />
          </div>
          <div className="text-center text-white mt-4 mx-auto">
            <div className="flex justify-center">
              <img src={Followings} alt="" />
            </div>
            <p className="text-xs mt-2">Followings</p>
          </div>
        </div>
        {/* profile name  */}
        <div className="profile-info">
          <h1 className="text-white text-center font-bold text-xl">
            Oblivion Isme
          </h1>
          <p className="text-xs profile-user text-center mt-2">@oblivion123</p>
        </div>
        {/* friend request  */}
        <div className="mt-6 friend-req mx-auto  ">
          <div>
            <p className="text-white text-sm mt-4 text-center ">
              Friend Requests
            </p>
            <div className="frnd-top-icon flex justify-center">
              <p className="xst">99+</p>
            </div>
          </div>
        </div>
        {/* friend birthday  */}
        <div className="friend-bd mx-auto mt-6">
          <div className="mx-5 my-2">
            <p className="text-sm text-white">Friends birthday</p>
            <div className="flex items-center gap-4 mt-2">
              <img src={gift} className="mb-4 w-[33px] h-[37px]" alt="" />
              <div>
                <img src={bdp} className="w-[54px] h-[45px]" alt="" />
                <img src={follow} className="bd-tick" alt="" />
              </div>
              <div className="space-y-1 bd-info mb-4 ">
                <p className="text-sm text-white leading-3 mb-[-8px]">
                  Kevin Alexander
                </p>
                <div className="leading-3 flex items-center justify-center">
                  <p className="text-xs profile-user  mt-2 leading-3">
                    @kevinalexander123
                  </p>
                  <img
                    src={tick}
                    className="w-[12px] h-[12px] mt-2 ms-1"
                    alt=""
                  />
                </div>

                <p className="text-xs text-white leading-3 font-thin">
                  19 years old
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* trending */}
      <div className="trend w-[320px] mx-auto mt-6 ">
        <div className="mx-5 my-3">
          <p className="text-sm text-white">Trending</p>
          <div className="mt-2 flex items-center navborder pb-3">
            <img src={uparrow} alt="" />
            <p className="text-xs ms-2 text-white leading-3 font-thin">
              #FineArt Co
            </p>
          </div>
          <div className="mt-2 flex items-center ">
            <img src={uparrow} alt="" />
            <p className="text-xs ms-2 text-white leading-3 font-thin">
              #Friends Status
            </p>
          </div>
        </div>
      </div>

      {/* People You May Know */}
      <div className="may-know w-[320px] mx-auto mt-6 ">
        <div className="mx-5 my-3">
          <div className="mt-2 flex justify-between mb-3  navborder pb-3">
            <p className="text-sm text-white font-medium">
              People You May Know
            </p>
            <button>
              <img src={reload} alt="" />
            </button>
          </div>
          <div className="grid gap-4 grid-cols-2">
            {/* each profiles  */}
            <div className="each-may-know text-center p-2  ">
              <img src={m1} className="w-[60px] mx-auto" alt="" />
              <h1 className="text-sm text-white font-medium">Sophia jain</h1>
              <p className="profile-user text-xs mb-2">@sophia1</p>
              <button className="btn btn-xs font-bold border-0 py-2 follow-btn">
                FOLLOW
              </button>
            </div>
            {/* each profiles  */}
            <div className="each-may-know text-center  p-2 ">
              <div>
                <img src={m2} className="w-[60px] mx-auto" alt="" />
                <img src={follow} className="may-tik w-[14px]" alt="" />
              </div>
              <div className="may-tik-below">
                <h1 className="text-sm text-white font-medium">Sophia jain</h1>
                <div className="leading-3 flex justify-center">
                  <p className="profile-user text-xs mb-2">@sophia1</p>
                  <img
                    src={tick}
                    className="w-[12px] h-[12px] mt-1 ms-1"
                    alt=""
                  />
                </div>
                <button className="btn btn-xs font-bold border-0 py-2 follow-btn">
                  FOLLOW
                </button>
              </div>
            </div>
            {/* each profiles  */}
            <div className="each-may-know text-center p-2 ">
              <img src={m3} className="w-[60px] mx-auto" alt="" />
              <h1 className="text-sm text-white font-medium">Sophia jain</h1>
              <p className="profile-user text-xs mb-2">@sophia1</p>
              <button className="btn btn-xs font-bold border-0 py-2 follow-btn">
                FOLLOW
              </button>
            </div>
            {/* each profiles  */}
            <div className="each-may-know text-center p-2">
              <img src={m4} className="w-[60px] mx-auto" alt="" />
              <h1 className="text-sm text-white font-medium">Sophia jain</h1>
              <p className="profile-user text-xs mb-2">@sophia1</p>
              <button className="btn btn-xs font-bold border-0 py-2 follow-btn">
                FOLLOW
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Pages You May Know */}
      <div className="may-like w-[320px] mx-auto mt-6 ">
        <div className="mx-5 my-3">
          <div className="mt-2 flex justify-between mb-3   pb-3">
            <p className="text-sm text-white font-medium">Pages You May Like</p>
            <button>
              <img src={reload} alt="" />
            </button>
          </div>

          <div>
            <img className="mb-0" src={pageLike} alt="" />
            <div className=" page-info px-2">
              <div
                className="flex mt-2
                            "
              >
                <img src={pageLogo} alt="" />
                <div className="ms-4">
                  <p className="text-white text-sm font-medium ">graphics</p>
                </div>
              </div>
              <div className="text-[#CECECE] text-xs ms-10">
                <p>other </p>
                <p>30 people like this</p>
              </div>
              <button className="btn btn-sm mt-3 like-btn">
                <div className="flex justify-center items-center gap-2">
                  <img src={like} alt="" />
                  <p>Like</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Suggested groups */}
      <div className="may-like w-[320px] mx-auto mt-6 ">
        <div className="mx-5 my-3">
          <div className="mt-2 flex justify-between mb-3  navborder pb-3">
            <p className="text-sm text-white font-medium">Suggested Groups</p>
            <button>
              <img src={reload} alt="" />
            </button>
          </div>
          {/* Group Information */}
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="w-1/2 border-[1px] rounded-xl each-suggestion p-2">
              <img src={S1} alt="" />
              <div className="text-white text-center">
                <h2 className="font-bold ">All stars</h2>
                <p className="text-sm">119 members</p>
                <button className="btn border-0 btn-sm bg-gradient-to-r from-[#EC46E5] via-[#00E7FC] to-[#B82BEA] my-2">
                  Join
                </button>
              </div>
            </div>
            <div className="w-1/2 border-[1px] rounded-xl each-suggestion p-2">
              <img src={S2} alt="" />
              <div className="text-white text-center">
                <h2 className="font-bold ">Chosen Ones</h2>
                <p className="text-sm">106 members</p>
                <button className="btn border-0 btn-sm bg-gradient-to-r from-[#EC46E5] via-[#00E7FC] to-[#B82BEA] my-2">
                  Join
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* Online User */}
      <div className="trend my-7">
        <div className="flex items-center justify-center py-3 gap-2">
          <img src={Users} alt="" />
          <h2 className="profile-user">(2k)</h2>
          <p className="profile-user">Online Users</p>
        </div>
      </div>
      {/* Latest Activities */}
      <div className=" bg-[#00072D] rounded-3xl">
        <div className=" py-6 pl-4">
          <p className="font-bold navborder pb-3 text-white">
            Latest Activities
          </p>
          {/* first card */}
          <div className="mt-2 flex items-center navborder pb-3 text-white gap-4 py-4">
            <img
              src={la1}
              alt=""
              className=" rounded-xl border-[1px] border-[#8F8F8F]"
            />
            <div className="flex items-start justify-normal gap-2">
              <div>
                <p className="text-[12px] font-bold">
                  {"Comment on @aqxa's post"}
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[#B6B6B6] text-[10px]">
                    Thanks its literally lite
                  </span>
                  <img src={fire} alt="" width={15} height={15} />
                  <img src={love} alt="" width={15} height={15} />
                </div>
              </div>
              <p className="text-[#7D7D7D] text-[10px]">12 sec ago</p>
            </div>
          </div>
          {/* Second Card */}
          <div className="mt-2 flex items-center navborder pb-3 text-white gap-4 py-4">
            <img
              src={la2}
              alt=""
              className=" rounded-xl border-[1px] border-[#8F8F8F]"
            />
            <div className="flex items-start justify-normal gap-2">
              <div>
                <p className="text-[12px] font-bold">{"You added new post"}</p>
                <div className="flex items-center gap-1">
                  <div className="w-[7px] h-[7px] bg-gradient-to-b from-[#00E7FC] to-[#EC46E5] rounded-full"></div>
                  <span className="text-[#B6B6B6] text-[10px]">
                    Hello everyone , welcome to my..
                  </span>
                </div>
              </div>
              <p className="text-[#7D7D7D] text-[10px]">1 day ago</p>
            </div>
          </div>
          {/* Third Card */}
          <div className="mt-2 flex items-center  text-white gap-4 pt-4">
            <img
              src={la3}
              alt=""
              className=" rounded-xl border-[1px] border-[#8F8F8F]"
            />
            <div className="flex items-start justify-normal gap-2">
              <div>
                <p className="text-[12px] font-bold">
                  {"Joined new group “Art work”"}
                </p>
              </div>
              <p className="text-[#7D7D7D] text-[10px]">12 days ago</p>
            </div>
          </div>
        </div>
      </div>
      {/* Latest products */}
      <div className="bg-[#00072D] rounded-3xl py-5 my-7">
        <div className="mx-5 my-3">
          <div className="mt-2 flex justify-between mb-3 navborder  pb-3">
            <p className="text-sm text-white font-medium">Latest products</p>
            <button>
              <img src={reload} alt="" />
            </button>
          </div>
          {/* Group Information */}
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="w-1/2 border-[1px] rounded-xl each-suggestion ">
              <img src={lp1} alt="" className="w-full" />
              <div className="text-white text-start ps-2 pt-1 pb-4">
                <h2 className="font-bold ">Graph</h2>
                <p className="text-sm">$55.00</p>
              </div>
            </div>
            <div className="w-1/2 border-[1px] rounded-xl each-suggestion">
              <img src={lp2} alt="" className="w-full" />
              <div className="text-white text-start ps-2 pt-1 pb-4">
                <h2 className="font-bold ">Clothes</h2>
                <p className="text-sm">$50.00</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* Affiliate Link */}
      <div className="bg-[#00072D] rounded-3xl px-4 py-2">
        <div className="flex gap-1 items-center text-white">
          <img src={LIcon} alt="" />
          <h2>Affiliate Link</h2>
        </div>
        <input
          type="text"
          name=""
          placeholder="123334544#?>433#8489*)_09^%&75432"
          id=""
          className="bg-[#0A123E] py-2 px-4 rounded-xl my-3 w-full text-[10px]"
        />
        <div className="flex items-center justify-center gap-3">
          
          <button className="btn border-0 btn-sm bg-gradient-to-r from-[#EC46E5] via-[#00E7FC] to-[#B82BEA] my-2">
            <div className="flex justify-center items-center gap-2">
              <img src={generateicon} alt="" />
              <p className="text-xs font-bold capitalize">Generate Link</p>
            </div>
          </button>
          <button className="btn border-0 btn-sm bg-gradient-to-r from-[#EC46E5] via-[#00E7FC] to-[#B82BEA] my-2">
            <div className="flex justify-center items-center gap-2">
              <img src={sendicon} alt="" />
              <p className="text-xs font-bold capitalize">Copy</p>
            </div>
          </button>
        </div>
      </div>
      {/* Online Friends */}
      <div className="trend my-7">
        <div className="flex items-center justify-center py-3 gap-2">
          <div className="flex items-center">
            <img src={p1} alt="" className=" w-full h-full"/>
            <img src={p2} alt="" className=" -ml-2 w-full h-full"/>
            <img src={p3} alt="" className=" -ml-2 relative w-full h-full"/>
            <button className="btn bg-transparent text-[10px] text-white border-none -ml-10 z-10">12+</button>
          </div>
          
          <p className="text-white">12+ Friends online</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
