import group from '../../../assets/LikeSections/pagethum.png'
import './Likes.css'
const LikesMainPages = () => {
    return (
        <div className='pages-outer mt-4'>
            <div className='flex  gap-8 pt-6 mx-8'>
                <div className="group-outer flex gap-3 items-center justify-center flex-col">
                    <img src={group} className='px-2 rounded-xl' alt="" />
                    <div className="group-description flex-col flex justify-center items-center text-white">
                        <p>lalwasty</p>
                        <p>Category : Comedy</p>
                        <button className='join-btn mt-6'>
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
                                <div className="join-text absolute top-1 left-3 flex items-center gap-1 text-[#00072D]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <path d="M6.6733 3.9544L6.46732 4.60526H7.15H11.7C11.9037 4.60526 12.1045 4.69019 12.2567 4.85044C12.4098 5.01156 12.5 5.23533 12.5 5.47368V6.79091L12.4635 6.96708L10.0714 12.5H3.75V3.90836L6.72355 0.504111C6.81934 0.514278 6.91348 0.543256 7.00121 0.590543C7.11264 0.650612 7.2115 0.739095 7.28798 0.850784C7.36452 0.962572 7.4159 1.09372 7.4362 1.23366C7.4565 1.37362 7.44483 1.51649 7.4026 1.64998C7.4026 1.64999 7.4026 1.65 7.40259 1.65001L6.6733 3.9544ZM1.3 4.60526H1.45V12.5H1.3C1.09634 12.5 0.895501 12.4151 0.743261 12.2548C0.590193 12.0937 0.5 11.8699 0.5 11.6316V5.47368C0.5 5.23533 0.590193 5.01156 0.743261 4.85044C0.895501 4.69019 1.09634 4.60526 1.3 4.60526Z" stroke="#010729" />
                                    </svg>  LIKED
                                </div>
                            </div>
                        </button>

                    </div>
                </div>
                <div className="group-outer gap-3 flex items-center justify-center flex-col">
                    <img src={group} className='px-2 rounded-xl' alt="" />
                    <div className="group-description flex-col flex justify-center items-center text-white">
                        <p>Bosom</p>
                        <p>Category : Comedy</p>
                        <button className='join-btn mt-6'>
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
                                <div className="join-text absolute top-1 left-3 flex items-center gap-1 text-[#00072D]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <path d="M6.6733 3.9544L6.46732 4.60526H7.15H11.7C11.9037 4.60526 12.1045 4.69019 12.2567 4.85044C12.4098 5.01156 12.5 5.23533 12.5 5.47368V6.79091L12.4635 6.96708L10.0714 12.5H3.75V3.90836L6.72355 0.504111C6.81934 0.514278 6.91348 0.543256 7.00121 0.590543C7.11264 0.650612 7.2115 0.739095 7.28798 0.850784C7.36452 0.962572 7.4159 1.09372 7.4362 1.23366C7.4565 1.37362 7.44483 1.51649 7.4026 1.64998C7.4026 1.64999 7.4026 1.65 7.40259 1.65001L6.6733 3.9544ZM1.3 4.60526H1.45V12.5H1.3C1.09634 12.5 0.895501 12.4151 0.743261 12.2548C0.590193 12.0937 0.5 11.8699 0.5 11.6316V5.47368C0.5 5.23533 0.590193 5.01156 0.743261 4.85044C0.895501 4.69019 1.09634 4.60526 1.3 4.60526Z" stroke="#010729" />
                                    </svg>  LIKED
                                </div>
                            </div>
                        </button>

                    </div>
                </div>
                <div className="group-outer flex items-center pt-3 flex-col">
                    <img src={group} className='px-2 rounded-xl' alt="" />
                    <div className="group-description flex-col flex justify-center items-center text-white">
                        <p>Unnamed</p>
                        <p>Category : Comedy</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LikesMainPages;