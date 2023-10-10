import Mi from '../../assets/message-1.png';
import Ms from '../../assets/setting1.png';
import Img from '../../assets/p-1.png';
import user from '../../assets/profile.png'
import grp from '../../assets/people.png'
import dot from '../../assets/dot.png'
import './Messages.css'

const Messages = () => {
    return (
        <div className='bg-[#0A123E]'>
            <div className='flex items-center justify-between my-5 mx-5 message-bt py-2 px-5'>
                <h2 className="font-bold text-white ">
                    Messages
                </h2>
                <div className='flex items-center gap-3'>

                    <div className='bg-slate-400 p-3 rounded-full'>
                        <img src={Mi} alt="" />
                    </div>
                    <div className='bg-slate-400 p-3 rounded-full'>
                        <img src={Ms} alt="" />
                    </div>
                </div>

            </div>
            <div className='req-btn flex justify-center my-6 py-3'>
                <div className=''>
                    <button className='req mx-2'>
                        <div className='flex justify-center content-center mt-4'>
                            <img className='w-1/3' src={user} alt="" />
                        </div>

                        <div className='btn-top-icon flex justify-center'>
                            <p className='xst'>99+</p>
                        </div>
                    </button>

                </div>
                <div className=''>
                    <button className='req-non mx-2'>
                        <div className='flex justify-center content-center mt-4'>
                            <img className='w-1/3' src={grp} alt="" />
                        </div>

                        <div className='btn-top-icon flex justify-center'>
                            <p className='xst'>99+</p>
                        </div>
                    </button>

                </div>
            </div>
            <div className='flex  justify-center  gap-3'>
                <div>
                    <div className="active-profile mb-4 flex items-center">
                        <div className=' pe-4 ms-2'>
                            <div className='mt-4'>
                                <img src={Img} alt="" />
                            </div>

                            <div className='p-a'>
                                <p className='xst text-white'>10</p>
                            </div>
                        </div>
                        <div className='ps-5 pro-side h-8 flex justify-between items-center '>
                            <div>
                                <h2 className='text-white text-xs'>Oblivion Isme</h2>
                            </div>
                            <div className='ms-10'>
                                <img src={dot} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="active-profile mb-4 flex items-center">
                        <div className=' pe-4 ms-2'>
                            <div className='mt-4'>
                                <img src={Img} alt="" />
                            </div>

                            <div className='p-a'>
                                <p className='xst text-white'>10</p>
                            </div>
                        </div>
                        <div className='ps-5 pro-side h-8 flex justify-between items-center '>
                            <div>
                                <h2 className='text-white text-xs'>Oblivion Isme</h2>
                            </div>
                            <div className='ms-10'>
                                <img src={dot} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="active-profile mb-4 flex items-center">
                        <div className=' pe-4 ms-2'>
                            <div className='mt-4'>
                                <img src={Img} alt="" />
                            </div>

                            <div className='p-a'>
                                <p className='xst text-white'>10</p>
                            </div>
                        </div>
                        <div className='ps-5 pro-side h-8 flex justify-between items-center '>
                            <div>
                                <h2 className='text-white text-xs'>Oblivion Isme</h2>
                            </div>
                            <div className='ms-10'>
                                <img src={dot} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="active-profile mb-4 flex items-center">
                        <div className=' pe-4 ms-2'>
                            <div className='mt-4'>
                                <img src={Img} alt="" />
                            </div>

                            <div className='p-a'>
                                <p className='xst text-white'>10</p>
                            </div>
                        </div>
                        <div className='ps-5 pro-side h-8 flex justify-between items-center '>
                            <div>
                                <h2 className='text-white text-xs'>Oblivion Isme</h2>
                            </div>
                            <div className='ms-10'>
                                <img src={dot} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="active-profile mb-4 flex items-center">
                        <div className=' pe-4 ms-2'>
                            <div className='mt-4'>
                                <img src={Img} alt="" />
                            </div>

                            <div className='p-a'>
                                <p className='xst text-white'>10</p>
                            </div>
                        </div>
                        <div className='ps-5 pro-side h-8 flex justify-between items-center '>
                            <div>
                                <h2 className='text-white text-xs'>Oblivion Isme</h2>
                            </div>
                            <div className='ms-10'>
                                <img src={dot} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="active-profile mb-4 flex items-center">
                        <div className=' pe-4 ms-2'>
                            <div className='mt-4'>
                                <img src={Img} alt="" />
                            </div>

                            <div className='p-a'>
                                <p className='xst text-white'>10</p>
                            </div>
                        </div>
                        <div className='ps-5 pro-side h-8 flex justify-between items-center '>
                            <div>
                                <h2 className='text-white text-xs'>Oblivion Isme</h2>
                            </div>
                            <div className='ms-10'>
                                <img src={dot} alt="" />
                            </div>
                        </div>
                    </div>
                </div>




            </div>
            <div>
                <input type="text" name="" placeholder='Search for users' className='srcf py-2 px-3 text-xs rounded-full mx-5 border-2 ' id="" />
            </div>
        </div>
    );
};

export default Messages;