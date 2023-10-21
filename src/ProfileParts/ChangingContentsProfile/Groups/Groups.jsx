import './Group.css'
import group1 from '../../../assets/GroupSection/group1.png'
import group2 from '../../../assets/GroupSection/car.png'
import group3 from '../../../assets/GroupSection/Rectangle 140.png'
import Grouptop from './Grouptop';
const Groups = () => {
    return (
        <section className=''>
            <Grouptop></Grouptop>
            <div className="group-outlet mt-4">
                <div className='flex  gap-8 pt-6 mx-8'>
                    <div className="group-outer flex items-center justify-center flex-col">
                        <img src={group1} alt="" />
                        <div className="group-description flex-col flex justify-center items-center text-white">
                            <p>All Stars</p>
                            <p>119 members</p>
                            <button className='join-btn mt-4'>
                                <div className="join-bg relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="74" height="29" viewBox="0 0 74 29" fill="none">
                                        <rect width="74" height="29" rx="10" fill="url(#paint0_linear_5_44331)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_5_44331" x1="5.49715" y1="-7.1114e-06" x2="71.7266" y2="19.4751" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#EC46E5" />
                                                <stop offset="0.489583" stop-color="#00E7FC" />
                                                <stop offset="1" stop-color="#B82BEA" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="join-text absolute top-1 left-3 text-[#00072D]">
                                        JOINED
                                    </div>
                                </div>
                            </button>

                        </div>
                    </div>
                    <div className="group-outer flex items-center justify-center flex-col">
                        <img src={group3} alt="" />
                        <div className="group-description flex-col flex justify-center items-center text-white">
                            <p>Choosen One</p>
                            <p>119 members</p>
                            <button className='join-btn mt-4'>
                                <div className="join-bg relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="74" height="29" viewBox="0 0 74 29" fill="none">
                                        <rect width="74" height="29" rx="10" fill="url(#paint0_linear_5_44331)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_5_44331" x1="5.49715" y1="-7.1114e-06" x2="71.7266" y2="19.4751" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#EC46E5" />
                                                <stop offset="0.489583" stop-color="#00E7FC" />
                                                <stop offset="1" stop-color="#B82BEA" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="join-text absolute top-1 left-3 text-[#00072D]">
                                        JOINED
                                    </div>
                                </div>
                            </button>

                        </div>
                    </div>
                    <div className="group-outer flex items-center pt-4 flex-col">
                        <img src={group2} alt="" />
                        <div className="group-description flex-col flex justify-center items-center text-white">
                            <p>Unnamed</p>
                            <p>9 members</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Groups;