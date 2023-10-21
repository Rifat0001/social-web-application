import './Categorypost.css'
import girl from '../../../../assets/CategorySection/manface.png'
import './Categorypost.css'
import gif from '../../../../assets/CategorySection/gif.png'
import image3 from "../../../../assets/CreatePost/person-2.png";
import fire from "../../../../assets/CreatePost/fire.png";
import image5 from "../../../../assets/CreatePost/bd-person.png";
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
import Categoryreply from './Categoryreply';
import CategoryCommentSection from './CategoryCommentSection';
const SecondCategoryPost = () => {
    return (
        <div className='first-outer-box  pt-6'>
            <div className="main-section-start-here w-2/3 mx-auto">
                <div className="top-outer-box flex items-center ps-4">
                    <p className='text-white'>Photo added to trip category</p>
                </div>
                <div className="image-box-outer relative">
                    {/* image here start  */}
                    <img src={girl} className='girls' alt="" />
                    {/* floating part start here  */}
                    <div className="delete-download-outer absolute right-3 top-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="92" height="48" viewBox="0 0 92 48" fill="none">
                            <g filter="url(#filter0_b_5_42964)">
                                <rect width="92" height="48" rx="24" fill="#00072D" fill-opacity="0.65" />
                                <rect x="0.5" y="0.5" width="91" height="47" rx="23.5" stroke="url(#paint0_linear_5_42964)" />
                            </g>
                            <path d="M28.3451 25.7102H28.5951V25.4602V13.25H31.2102V25.4602V25.7102H31.4602H34.0752L29.9027 31.2736L25.7301 25.7102H28.3451ZM40.5553 34.75H19.25V32.9137H40.5553V34.75Z" fill="white" stroke="url(#paint1_linear_5_42964)" stroke-width="0.5" />
                            <path d="M56.2222 32.5556C56.2222 33.9 57.3222 35 58.6667 35H68.4444C69.7889 35 70.8889 33.9 70.8889 32.5556V20.3333C70.8889 18.9889 69.7889 17.8889 68.4444 17.8889H58.6667C57.3222 17.8889 56.2222 18.9889 56.2222 20.3333V32.5556ZM70.8889 14.2222H67.8333L66.9656 13.3544C66.7456 13.1344 66.4278 13 66.11 13H61.0011C60.6833 13 60.3656 13.1344 60.1456 13.3544L59.2778 14.2222H56.2222C55.55 14.2222 55 14.7722 55 15.4444C55 16.1167 55.55 16.6667 56.2222 16.6667H70.8889C71.5611 16.6667 72.1111 16.1167 72.1111 15.4444C72.1111 14.7722 71.5611 14.2222 70.8889 14.2222Z" fill="#F8F8F8" stroke="url(#paint2_linear_5_42964)" />
                            <defs>
                                <filter id="filter0_b_5_42964" x="-4" y="-4" width="100" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5_42964" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5_42964" result="shape" />
                                </filter>
                                <linearGradient id="paint0_linear_5_42964" x1="4.14891" y1="1.38576e-06" x2="35.8342" y2="71.5945" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#00E7FC" />
                                    <stop offset="1" stop-color="#EC46E5" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_5_42964" x1="29.9027" y1="13" x2="29.9027" y2="35" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#08E2FB" />
                                    <stop offset="0.510417" stop-color="#0A123E" />
                                    <stop offset="1" stop-color="#EC46E5" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_5_42964" x1="63.5556" y1="13" x2="63.5556" y2="35" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#08E2FB" />
                                    <stop offset="0.510417" stop-color="#0A123E" />
                                    <stop offset="1" stop-color="#EC46E5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="reactions-outer absolute bottom-2 flex flex-col justify-center items-center right-3">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32" fill="none">
                                <path d="M17.4984 26.401L17.335 26.5643L17.1553 26.401C9.39619 19.3606 4.267 14.7051 4.267 9.98427C4.267 6.71726 6.71725 4.26701 9.98425 4.26701C12.4998 4.26701 14.9501 5.90051 15.8158 8.12208H18.8542C19.7199 5.90051 22.1702 4.26701 24.6857 4.26701C27.9527 4.26701 30.403 6.71726 30.403 9.98427C30.403 14.7051 25.2738 19.3606 17.4984 26.401ZM24.6857 1C21.8435 1 19.1155 2.32314 17.335 4.39769C15.5545 2.32314 12.8265 1 9.98425 1C4.95307 1 1 4.93674 1 9.98427C1 16.1426 6.5539 21.1901 14.9664 28.8186L17.335 30.9748L19.7036 28.8186C28.1161 21.1901 33.67 16.1426 33.67 9.98427C33.67 4.93674 29.7169 1 24.6857 1Z" fill="white" stroke="url(#paint0_linear_5_43021)" />
                                <defs>
                                    <linearGradient id="paint0_linear_5_43021" x1="17.335" y1="1" x2="17.335" y2="30.9748" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#08E2FB" />
                                        <stop offset="0.510417" stop-color="#0A123E" />
                                        <stop offset="1" stop-color="#EC46E5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                        <p className='react-count'>1k</p>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="39" viewBox="0 0 34 39" fill="none">
                                <path d="M16.6137 18.3339L16.616 18.334C16.6568 18.3363 18.2019 18.4112 19.9989 18.0395C21.7854 17.67 23.8898 16.8445 24.9593 14.9921C26.3601 12.5658 25.5837 9.47192 23.2085 8.10062C20.8333 6.72932 17.7658 7.60385 16.3649 10.0302C15.699 11.1835 15.4854 12.6934 15.7309 14.3009L13.1494 14.8838C12.867 13.2153 12.8319 10.8669 14.0775 8.70951C16.2116 5.01311 20.9018 3.71897 24.5291 5.81319C28.1565 7.90742 29.3808 12.6164 27.2467 16.3127C25.7985 18.8212 23.214 19.9975 20.9098 20.5402C18.609 21.0821 16.6316 20.9814 16.4646 20.9707L16.4646 20.9706L16.4623 20.9705C16.4215 20.9683 14.8764 20.8933 13.0794 21.265C11.2929 21.6345 9.18855 22.46 8.11904 24.3125C6.71821 26.7388 7.49463 29.8326 9.8698 31.2039C12.245 32.5752 15.3125 31.7007 16.7134 29.2744C17.4113 28.0655 17.619 26.6265 17.3519 25.0103L19.9297 24.4135C20.34 26.7085 20.0148 28.8388 19.0008 30.595C16.8667 34.2914 12.1765 35.5856 8.54915 33.4914C4.92184 31.3971 3.69749 26.6882 5.83161 22.9918C7.27985 20.4834 9.86427 19.3071 12.1685 18.7643C14.4693 18.2224 16.4467 18.3232 16.6137 18.3339Z" fill="#F8F8F8" stroke="url(#paint0_linear_5_43028)" stroke-width="0.5" />
                                <path d="M10.0274 12.7721L18.9714 12.7721L14.4994 17.2441L10.0274 12.7721Z" fill="#F8F8F8" stroke="url(#paint1_linear_5_43028)" stroke-width="0.5" />
                                <path d="M23.5918 26.6869L14.6477 26.6869L19.1197 22.2149L23.5918 26.6869Z" fill="#F8F8F8" stroke="url(#paint2_linear_5_43028)" stroke-width="0.5" />
                                <defs>
                                    <linearGradient id="paint0_linear_5_43028" x1="9.73805" y1="15.7257" x2="23.3403" y2="23.5789" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#08E2FB" />
                                        <stop offset="0.510417" stop-color="#0A123E" />
                                        <stop offset="1" stop-color="#EC46E5" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_5_43028" x1="9.42383" y1="15.0599" x2="19.575" y2="15.0599" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#08E2FB" />
                                        <stop offset="0.510417" stop-color="#0A123E" />
                                        <stop offset="1" stop-color="#EC46E5" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_5_43028" x1="24.1953" y1="24.3991" x2="14.0442" y2="24.3991" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#08E2FB" />
                                        <stop offset="0.510417" stop-color="#0A123E" />
                                        <stop offset="1" stop-color="#EC46E5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                        <p className='react-count'>1k</p>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="30" viewBox="0 0 23 30" fill="none">
                                <path d="M21.7533 3.23857V27.757L11.6961 23.4467L11.335 23.292L10.9739 23.4467L0.916667 27.757V3.23857C0.916667 2.59324 1.13593 2.06309 1.60032 1.5987C2.0633 1.13572 2.59278 0.916667 3.23857 0.916667H19.4314C20.0769 0.916667 20.607 1.13553 21.0711 1.59846C21.5343 2.06266 21.7533 2.59288 21.7533 3.23857Z" fill="white" stroke="url(#paint0_linear_5_43026)" stroke-width="1.83333" />
                                <defs>
                                    <linearGradient id="paint0_linear_5_43026" x1="11.335" y1="0" x2="11.335" y2="29.1471" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#08E2FB" />
                                        <stop offset="0.510417" stop-color="#0A123E" />
                                        <stop offset="1" stop-color="#EC46E5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                        <p className='react-count'>1k</p>
                    </div>
                </div>
            </div>
            {/* comment section start from here  */}
            <div className="ms-12">

                {/* second card */}

                <div className="transform ps-16 second-post-comment transition cursor-pointer  ml-10 relative flex items-center px-6 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Line that connecting the box with the vertical line --> */}
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
                                <div className="flex flex-col  gap-2">
                                    <p>
                                        <span className="text-[20px] me-2 profile-user">
                                            #classic
                                        </span></p>
                                    <img src={gif} className='gif' alt="" />
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
                <div className="transform transition cursor-pointer  ml-10 relative flex items-center px-6 ps-32 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-[30px] h-0.5 bg-[#00E7FC] absolute top-8 left-[88px] z-0"></div>

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
                                        <span>so funny</span>
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


            </div>
            <Categoryreply></Categoryreply>
            <CategoryCommentSection></CategoryCommentSection>
        </div>
    );
};

export default SecondCategoryPost;