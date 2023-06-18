import React from 'react';
import { HomeIcon } from '@heroicons/react/24/solid'
import home from '../../assets/Fill-1.png'
import star from '../../assets/starss.png'
import book from '../../assets/book.png'
import briefcase from '../../assets/briefcase.png'
import pages from '../../assets/Group 4084.png'
import people from '../../assets/people.png'
import music from '../../assets/music.png'
import product from '../../assets/note-2.png'
import blog from '../../assets/blog.png'
import btick from '../../assets/brifecase-tick.png'
import fund from '../../assets/wallet-money.png'
import setting from '../../assets/setting-2.png'


import './SideIcon.css'
const SideIcons = () => {
    return (
        <div className=' bg-[#0A123E] flex justify-center '>
            <div>
                <div className='mt-2 '>
                    <button className='f-b home-button'>
                        <div className='flex justify-center'>
                            {/* <HomeIcon className='text-white w-1/3'></HomeIcon> */}
                            <img src={home} alt="" />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>home</p>
                </div>
                <div className='mt-6'>
                    <button className='f-b'>
                        <div className='flex justify-center'>
                            <img src={star} alt="" />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>casts</p>
                </div>
                <div className='mt-6'>
                    <button className='f-b'>
                        <div className='flex justify-center'>
                            <img src={book} alt="" />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>academic</p>
                </div>
                <div className='mt-6'>
                    <button className='f-b'>
                        <div className='flex justify-center'>
                            <img src={briefcase} alt="" />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>market</p>
                </div>
                <div className='mt-6'>
                    <button className='f-b'>
                        <div className='flex justify-center'>
                            <img src={pages} alt="" />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>pages</p>
                </div>
                <div className='mt-6'>
                    <button className='f-b'>
                        <div className='flex justify-center'>
                            <img src={people} alt="" />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>groups</p>
                </div>
                <div className='mt-6'>
                    <button className='f-b'>
                        <div className='flex justify-center'>
                            <img src={music} alt="" />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>music</p>
                </div>
                <div className='mt-6'>
                    <button className='f-b'>
                        <div className='flex justify-center'>
                            <img src={product} alt="" />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>products</p>
                </div>
                <div className='mt-6'>
                    <button className='f-b'>
                        <div className='flex justify-center'>
                            <img src={blog} alt="" />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>blog</p>
                </div>
                <div className='mt-6'>
                    <button className='f-b'>
                        <div className='flex justify-center'>
                            <img src={btick} alt="" />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>jobs</p>
                </div>
                <div className='mt-6'>
                    <button className='f-b'>
                        <div className='flex justify-center'>
                            <img src={fund} alt="" />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>funding</p>
                </div>
                <div className='mt-6'>
                    <button className='f-b'>
                        <div className='flex justify-center'>
                            <img src={setting} alt="" />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>settings</p>
                </div>
            </div>


        </div>
    );
};

export default SideIcons;