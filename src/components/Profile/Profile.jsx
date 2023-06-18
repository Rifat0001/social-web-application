import React from 'react';
import bg from '../../assets/rect1.png'
import profile from '../../assets/rect under.png'
import follow from '../../assets/fooll.png'
import tick from '../../assets/tik.png'
import gift from '../../assets/bd-gift.png'
import Followings from '../../assets/0.png'
import bdp from '../../assets/bd-person.png'
import uparrow from '../../assets/arrow-up.png'
import reload from '../../assets/reload.png'
import m1 from '../../assets/m1.png'
import m2 from '../../assets/m2.png'
import m3 from '../../assets/m3.png'
import m4 from '../../assets/m4.png'
import pageLike from '../../assets/like banners.png'
import pageLogo from '../../assets/like logo.png'
import like from '../../assets/likess.png'
import './Profile.css'
const Profile = () => {
    return (
        <div className='mt-2 '>
            {/* background image behind the profile pic  */}
            <div>
                <img src={bg} alt="" />
            </div>
            <div className='bg-[#00072D] pb-4 frd-bg'>
                {/* 3 parts of image  */}
                <div className='  grid justify-around grid-cols-3'>
                    <div className='text-center text-white mt-4'>
                        <p className='follower '>123K</p>
                        <p className='text-xs'>Followers</p>
                    </div>
                    <div className='text-center '>
                        <img className='profile-img' src={profile} alt="" />
                        <img src={follow} className='follow-tik' alt="" />
                        <img src={tick} className='verify-tik' alt="" />
                    </div>
                    <div className='text-center text-white mt-4 mx-auto'>
                        <div className='flex justify-center'>
                            <img src={Followings} alt="" />
                        </div>
                        <p className='text-xs mt-2'>Followings</p>
                    </div>
                </div>
                {/* profile name  */}
                <div className='profile-info'>
                    <h1 className='text-white text-center font-bold text-xl'>Oblivion Isme</h1>
                    <p className='text-xs profile-user text-center mt-2'>@oblivion123</p>
                </div>
                {/* friend request  */}
                <div className='mt-6 friend-req mx-auto  '>
                    <div>
                        <p className='text-white text-sm mt-4 text-center '>Friend Requests</p>
                        <div className='frnd-top-icon flex justify-center'>
                            <p className='xst'>99+</p>
                        </div>
                    </div>

                </div>
                {/* friend birthday  */}
                <div className='friend-bd mx-auto mt-6'>
                    <div className='mx-5 my-2'>
                        <p className='text-sm text-white'>Friends birthday</p>
                        <div className='flex items-center gap-4 mt-2'>
                            <img src={gift} className='mb-4 w-[33px] h-[37px]' alt="" />
                            <div>
                                <img src={bdp} className='w-[54px] h-[45px]' alt="" />
                                <img src={follow} className='bd-tick' alt="" />
                            </div>
                            <div className='space-y-1 bd-info mb-4 '>
                                <p className='text-sm text-white leading-3 mb-[-8px]'>Kevin Alexander</p>
                                <div className='leading-3 flex items-center justify-center'>
                                    <p className='text-xs profile-user  mt-2 leading-3'>@kevinalexander123</p>
                                    <img src={tick} className='w-[12px] h-[12px] mt-2 ms-1' alt="" />
                                </div>

                                <p className='text-xs text-white leading-3 font-thin'>19 years old</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* trending */}
            <div className='trend mx-auto mt-6 '>
                <div className='mx-5 my-3'>
                    <p className='text-sm text-white'>Trending</p>
                    <div className='mt-2 flex items-center navborder pb-3'>
                        <img src={uparrow} alt="" />
                        <p className='text-xs ms-2 text-white leading-3 font-thin'>#FineArt Co</p>
                    </div>
                    <div className='mt-2 flex items-center '>
                        <img src={uparrow} alt="" />
                        <p className='text-xs ms-2 text-white leading-3 font-thin'>#Friends Status</p>
                    </div>
                </div>
            </div>

            {/* People You May Know */}
            <div className='may-know mx-auto mt-6 '>
                <div className='mx-5 my-3'>

                    <div className='mt-2 flex justify-between mb-3  navborder pb-3'>
                        <p className='text-sm text-white font-medium'>People You May Know</p>
                        <button>
                            <img src={reload} alt="" />
                        </button>
                    </div>
                    <div className='grid gap-4 grid-cols-2'>
                        {/* each profiles  */}
                        <div className='each-may-know text-center p-2  '>
                            <img src={m1} className='w-[60px] mx-auto' alt="" />
                            <h1 className='text-sm text-white font-medium'>Sophia jain</h1>
                            <p className='profile-user text-xs mb-2'>@sophia1</p>
                            <button className='btn btn-xs font-bold border-0 py-2 follow-btn'>FOLLOW</button>
                        </div>
                        {/* each profiles  */}
                        <div className='each-may-know text-center p-2 '>
                            <div>
                                <img src={m2} className='w-[60px] mx-auto' alt="" />
                                <img src={follow} className='may-tik w-[14px]' alt="" />
                            </div>
                            <div className='may-tik-below'>
                                <h1 className='text-sm text-white font-medium'>Sophia jain</h1>
                                <div className='leading-3 flex justify-center'>
                                    <p className='profile-user text-xs mb-2'>@sophia1</p>
                                    <img src={tick} className='w-[12px] h-[12px] mt-1 ms-1' alt="" />
                                </div>
                                <button className='btn btn-xs font-bold border-0 py-2 follow-btn'>FOLLOW</button>
                            </div>

                        </div>
                        {/* each profiles  */}
                        <div className='each-may-know text-center p-2 '>
                            <img src={m3} className='w-[60px] mx-auto' alt="" />
                            <h1 className='text-sm text-white font-medium'>Sophia jain</h1>
                            <p className='profile-user text-xs mb-2'>@sophia1</p>
                            <button className='btn btn-xs font-bold border-0 py-2 follow-btn'>FOLLOW</button>
                        </div>
                        {/* each profiles  */}
                        <div className='each-may-know text-center p-2'>
                            <img src={m4} className='w-[60px] mx-auto' alt="" />
                            <h1 className='text-sm text-white font-medium'>Sophia jain</h1>
                            <p className='profile-user text-xs mb-2'>@sophia1</p>
                            <button className='btn btn-xs font-bold border-0 py-2 follow-btn'>FOLLOW</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pages You May Know */}
            <div className='may-like mx-auto mt-6 '>
                <div className='mx-5 my-3'>

                    <div className='mt-2 flex justify-between mb-3   pb-3'>
                        <p className='text-sm text-white font-medium'>Pages You May Like</p>
                        <button>
                            <img src={reload} alt="" />
                        </button>
                    </div>

                    <div>
                        <img className='mb-0' src={pageLike} alt="" />
                        <div className=' page-info px-2'>
                            <div className='flex mt-2
                            '>
                                <img src={pageLogo} alt="" />
                                <div className='ms-4'>
                                    <p className='text-white text-sm font-medium '>graphics</p>

                                </div>
                            </div>
                            <div className='text-[#CECECE] text-xs ms-10'>
                                <p>other </p>
                                <p>30 people like this</p>
                            </div>
                            <button className='btn btn-sm mt-3 like-btn'>

                                <div className='flex justify-center items-center gap-2'>
                                    <img src={like} alt="" />
                                    <p>Like</p>
                                </div>
                            </button>
                        </div>


                    </div>

                </div>
            </div>


        </div>
    );
};

export default Profile;