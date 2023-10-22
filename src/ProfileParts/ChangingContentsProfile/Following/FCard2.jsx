import follower from '../../../assets/LikeSections/jac.png'
import './Following.css'
const FCard2 = () => {
    return (
        <div className="follow-container-card items-center ps-6 flex gap-4">
            <div className="follow-img">
                <img src={follower} alt="" />
            </div>
            <div className="next-part flex flex-col gap-1">
                <p className='text-white'>Jacqueline Veloz</p>

                <p className='text-white font-light'>2d</p>
                <button className="follow-button-outer relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="105" height="29" viewBox="0 0 105 29" fill="none">
                        <rect width="105" height="29" rx="10" fill="url(#paint0_linear_5_45408)" />
                        <defs>
                            <linearGradient id="paint0_linear_5_45408" x1="7.8" y1="-7.1114e-06" x2="94.7609" y2="36.2837" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#EC46E5" />
                                <stop offset="0.489583" stop-color="#00E7FC" />
                                <stop offset="1" stop-color="#B82BEA" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="follow-inner flex items-center absolute top-0 left-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M9.85449 12.7008L10.8919 13.7142L12.9667 11.6875" stroke="#00072D" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.2948 7.24732C8.22655 7.24065 8.14465 7.24065 8.06957 7.24732C6.44522 7.19398 5.1553 5.89398 5.1553 4.29398C5.14847 2.66065 6.50665 1.33398 8.17877 1.33398C9.8509 1.33398 11.2091 2.66065 11.2091 4.29398C11.2091 5.89398 9.91232 7.19398 8.2948 7.24732Z" stroke="#00072D" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.17857 14.5404C6.93642 14.5404 5.7011 14.2338 4.75925 13.6204C3.1076 12.5404 3.1076 10.7804 4.75925 9.70711C6.63612 8.48044 9.7142 8.48044 11.5911 9.70711" stroke="#00072D" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-[#00072D] font-medium'>Following</p>
                    </div>
                </button>

            </div>
        </div>
    );
};

export default FCard2;