import './Profile.css'
import { BeakerIcon } from '@heroicons/react/24/solid'
import test from '../../assets/Profile-section/tabCat.svg'
import { Link } from 'react-router-dom';
const ProfileTab = () => {
    return (
        <div className='flex justify-center items-center cat-container mt-8 gap-20'>
            <Link to='/profile/timeline' >
                <div className="tab-link flex flex-col justify-center items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                    <p className='mt-2'>Time Line</p>
                </div>
            </Link>
            <Link to='/profile/categories' >
                <div className="tab-link flex flex-col justify-center items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                        <path d="M14.6341 1.6C15.7073 1.6 16.5854 2.32 16.5854 3.2V12.8C16.5854 13.68 15.7073 14.4 14.6341 14.4V1.6ZM0 14.4C0 15.28 0.878049 16 1.95122 16H10.7317C11.8049 16 12.6829 15.28 12.6829 14.4V1.6C12.6829 0.72 11.8049 0 10.7317 0H1.95122C0.878049 0 0 0.72 0 1.6V14.4ZM18.5366 12.8C19.3463 12.8 20 12.264 20 11.6V4.4C20 3.736 19.3463 3.2 18.5366 3.2V12.8Z" fill="url(#paint0_linear_5_42660)" />
                        <defs>
                            <linearGradient id="paint0_linear_5_42660" x1="0.901938" y1="4.6192e-07" x2="14.1622" y2="19.5406" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00E7FC" />
                                <stop offset="1" stop-color="#EC46E5" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p className='mt-2'>Category</p>
                </div>  </Link>
            <div className="tab-link flex flex-col justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6.85714 6C6.85714 6.47086 6.47086 6.85714 6 6.85714H4.28571C4.05857 6.85654 3.8409 6.76604 3.68029 6.60543C3.51967 6.44481 3.42917 6.22714 3.42857 6V4.28571C3.42857 3.81486 3.81371 3.42857 4.28571 3.42857H6C6.47086 3.42857 6.85714 3.81486 6.85714 4.28571V6ZM12.5714 6C12.5714 6.47086 12.1851 6.85714 11.7143 6.85714H10C9.77295 6.85624 9.55546 6.76564 9.39491 6.60509C9.23436 6.44454 9.14376 6.22705 9.14286 6V4.28571C9.14286 3.81486 9.52914 3.42857 10 3.42857H11.7143C12.1851 3.42857 12.5714 3.81486 12.5714 4.28571V6ZM6.85714 11.7143C6.85714 12.1851 6.47086 12.5714 6 12.5714H4.28571C4.05857 12.5708 3.8409 12.4803 3.68029 12.3197C3.51967 12.1591 3.42917 11.9414 3.42857 11.7143V10C3.42857 9.52914 3.81371 9.14286 4.28571 9.14286H6C6.47086 9.14286 6.85714 9.52914 6.85714 10V11.7143ZM12.5714 11.7143C12.5714 12.1851 12.1851 12.5714 11.7143 12.5714H10C9.77295 12.5705 9.55546 12.4799 9.39491 12.3194C9.23436 12.1588 9.14376 11.9413 9.14286 11.7143V10C9.14286 9.52914 9.52914 9.14286 10 9.14286H11.7143C12.1851 9.14286 12.5714 9.52914 12.5714 10V11.7143ZM0 11.4286H1.14286V13.7143H0V11.4286ZM0 8H1.14286V10.2857H0V8ZM14.8571 5.71429H16V8H14.8571V5.71429ZM14.8571 12.5714H16V14.8571H14.8571V12.5714ZM14.8571 9.14286H16V11.4286H14.8571V9.14286ZM0 4.57143H1.14286V6.85714H0V4.57143ZM0 1.14286H1.14286V3.42857H0V1.14286ZM9.14286 0H11.4286V1.14286H9.14286V0ZM5.71429 0H8V1.14286H5.71429V0ZM2.28571 0H4.57143V1.14286H2.28571V0ZM8 14.8571H10.2857V16H8V14.8571ZM11.4286 14.8571H13.7143V16H11.4286V14.8571ZM4.57143 14.8571H6.85714V16H4.57143V14.8571ZM1.14286 14.8571H3.42857V16H1.14286V14.8571Z" fill="#F8F8F8" />
                </svg>
                <p className='mt-2'>Groups</p>
            </div>
            <div className="tab-link flex flex-col justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.895 1H5.68696C5.06498 1 4.46848 1.24708 4.02868 1.68688C3.58888 2.12668 3.3418 2.72319 3.3418 3.34516V13.8984C3.3418 14.5204 3.58888 15.1169 4.02868 15.5567C4.46848 15.9965 5.06498 16.2435 5.68696 16.2435H13.895C14.517 16.2435 15.1135 15.9965 15.5533 15.5567C15.9931 15.1169 16.2402 14.5204 16.2402 13.8984V3.34516C16.2402 2.72319 15.9931 2.12668 15.5533 1.68688C15.1135 1.24708 14.517 1 13.895 1Z" stroke="#F8F8F8" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.34516 3.3457C2.72319 3.3457 2.12668 3.59278 1.68688 4.03258C1.24708 4.47239 1 5.06889 1 5.69086V15.0715C1 16.0045 1.37062 16.8992 2.03032 17.5589C2.69003 18.2186 3.58478 18.5892 4.51774 18.5892H11.5532C12.1752 18.5892 12.7717 18.3422 13.2115 17.9024C13.6513 17.4626 13.8984 16.8661 13.8984 16.2441" stroke="#F8F8F8" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.85423 9.94458C4.88958 9.76429 4.98238 9.61316 5.13263 9.49119C5.28288 9.36922 5.44992 9.30824 5.63375 9.30824H7.25113L7.64354 7.46814H6.16934C5.96783 7.46814 5.80167 7.39037 5.67087 7.23482C5.54714 7.07573 5.50648 6.8919 5.5489 6.68332C5.58426 6.49949 5.67617 6.34747 5.82465 6.22727C5.97313 6.10707 6.13929 6.04697 6.32312 6.04697H7.9405L8.28519 4.41899C8.32407 4.23516 8.41864 4.08226 8.56889 3.96029C8.71914 3.83833 8.88618 3.77734 9.07001 3.77734C9.28213 3.77734 9.45005 3.85512 9.57379 4.01067C9.69752 4.16622 9.73641 4.35005 9.69045 4.56217L9.37758 6.04697H11.1965L11.5412 4.41899C11.58 4.23516 11.6737 4.08226 11.8222 3.96029C11.9707 3.83833 12.1368 3.77734 12.3207 3.77734C12.5328 3.77734 12.7007 3.85512 12.8244 4.01067C12.9517 4.15915 12.9924 4.34298 12.9464 4.56217L12.6335 6.04697H14.1024C14.3075 6.04697 14.4754 6.12475 14.6062 6.2803C14.7299 6.43939 14.7706 6.62322 14.7282 6.8318C14.6928 7.01563 14.6009 7.16765 14.4524 7.28785C14.304 7.40804 14.1378 7.46814 13.954 7.46814H12.3366L11.9389 9.30824H13.4131C13.6181 9.30824 13.786 9.38602 13.9168 9.54157C14.0406 9.70065 14.0812 9.88625 14.0388 10.0984C13.9999 10.2822 13.9071 10.4342 13.7604 10.5544C13.6137 10.6746 13.4484 10.7347 13.2646 10.7347H11.6366L11.2972 12.3627C11.2583 12.5465 11.1646 12.6985 11.0162 12.8187C10.8677 12.9389 10.7015 12.999 10.5177 12.999C10.3127 12.999 10.1447 12.923 10.0139 12.771C9.89019 12.6119 9.84954 12.4281 9.89196 12.2195L10.2101 10.7347H8.38594L8.03595 12.3627C7.99706 12.5465 7.90426 12.6985 7.75755 12.8187C7.61084 12.9389 7.44557 12.999 7.26173 12.999C7.05669 12.999 6.88876 12.923 6.75796 12.771C6.63423 12.6119 6.59357 12.4281 6.63599 12.2195L6.95417 10.7347H5.47997C5.27139 10.7347 5.10346 10.6552 4.97619 10.4961C4.84892 10.3476 4.80827 10.1638 4.85423 9.94458ZM8.68821 9.30824H10.5071L10.8995 7.46814H9.07532L8.68821 9.30824Z" fill="#F8F8F8" />
                </svg>
                <p className='mt-2'>Likes</p>
            </div>
            <div className="tab-link flex flex-col justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="17" viewBox="0 0 28 17" fill="none">
                    <path d="M21.913 14.5714V17H7.30435V14.5714C7.30435 14.5714 7.30435 9.71429 14.6087 9.71429C21.913 9.71429 21.913 14.5714 21.913 14.5714ZM18.2609 3.64286C18.2609 2.92237 18.0467 2.21806 17.6454 1.619C17.2441 1.01993 16.6737 0.553017 16.0063 0.277298C15.339 0.0015784 14.6046 -0.0705623 13.8962 0.0699981C13.1877 0.210559 12.537 0.557507 12.0262 1.06697C11.5155 1.57643 11.1676 2.22553 11.0267 2.93217C10.8858 3.63882 10.9581 4.37127 11.2345 5.03692C11.511 5.70256 11.9791 6.2715 12.5797 6.67178C13.1803 7.07206 13.8864 7.28571 14.6087 7.28571C15.5773 7.28571 16.5063 6.90192 17.1912 6.21875C17.8761 5.53558 18.2609 4.609 18.2609 3.64286ZM22.1565 9.78714C22.822 10.3995 23.3585 11.138 23.7347 11.9594C24.111 12.7808 24.3194 13.6688 24.3478 14.5714V17H28V14.5714C28 14.5714 28 10.3821 22.1565 9.78714ZM20.6957 1.38611e-06C20.3278 0.000220945 19.9623 0.0575747 19.6122 0.170001C20.3244 1.18875 20.7063 2.40087 20.7063 3.64286C20.7063 4.88485 20.3244 6.09697 19.6122 7.11571C19.9623 7.22814 20.3278 7.2855 20.6957 7.28571C21.6643 7.28571 22.5932 6.90192 23.2781 6.21875C23.963 5.53558 24.3478 4.609 24.3478 3.64286C24.3478 2.67671 23.963 1.75014 23.2781 1.06697C22.5932 0.383801 21.6643 1.38611e-06 20.6957 1.38611e-06ZM7.71826 4.76L9.13043 6.47214L3.34783 12.24L0 8.59714L1.41217 7.18857L3.34783 9.10714L7.71826 4.76Z" fill="#F8F8F8" />
                </svg>
                <p className='mt-2'>Following</p>
            </div>
            <div className="tab-link flex flex-col justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17" fill="none">
                    <path d="M15.4 14.7333V17H0V14.7333C0 14.7333 0 10.2 7.7 10.2C15.4 10.2 15.4 14.7333 15.4 14.7333ZM11.55 3.96671C11.55 3.18218 11.3242 2.41527 10.9012 1.76296C10.4781 1.11065 9.87683 0.60223 9.17333 0.302003C8.46984 0.00177668 7.69573 -0.0767763 6.9489 0.0762779C6.20208 0.229332 5.51607 0.607119 4.97764 1.16187C4.43921 1.71661 4.07253 2.4234 3.92398 3.19286C3.77542 3.96231 3.85167 4.75987 4.14306 5.48468C4.43446 6.2095 4.92793 6.829 5.56105 7.26486C6.19418 7.70073 6.93854 7.93337 7.7 7.93337C8.72108 7.93337 9.70035 7.51545 10.4224 6.77156C11.1444 6.02767 11.55 5.01873 11.55 3.96671ZM15.334 10.2C16.0102 10.7392 16.5635 11.4245 16.955 12.2077C17.3465 12.9909 17.5667 13.853 17.6 14.7333V17H22V14.7333C22 14.7333 22 10.6194 15.334 10.2ZM14.3 5.95893e-05C13.5429 -0.00428414 12.8024 0.228942 12.177 0.668724C12.8452 1.63062 13.2045 2.78384 13.2045 3.96671C13.2045 5.14958 12.8452 6.3028 12.177 7.2647C12.8024 7.70448 13.5429 7.93771 14.3 7.93337C15.3211 7.93337 16.3003 7.51545 17.0224 6.77156C17.7444 6.02767 18.15 5.01873 18.15 3.96671C18.15 2.91469 17.7444 1.90576 17.0224 1.16187C16.3003 0.417974 15.3211 5.95893e-05 14.3 5.95893e-05Z" fill="#F8F8F8" />
                </svg>
                <p className='mt-2'>Followers</p>
            </div>
            <div className="tab-link flex flex-col justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.6 9.6H13.6L10.84 6L9 8.4L7.76 6.8L5.6 9.6ZM4.8 12.8C4.36 12.8 3.98347 12.6435 3.6704 12.3304C3.3568 12.0168 3.2 11.64 3.2 11.2V1.6C3.2 1.16 3.3568 0.7832 3.6704 0.4696C3.98347 0.156533 4.36 0 4.8 0H14.4C14.84 0 15.2168 0.156533 15.5304 0.4696C15.8435 0.7832 16 1.16 16 1.6V11.2C16 11.64 15.8435 12.0168 15.5304 12.3304C15.2168 12.6435 14.84 12.8 14.4 12.8H4.8ZM1.6 16C1.16 16 0.783467 15.8435 0.4704 15.5304C0.1568 15.2168 0 14.84 0 14.4V3.2H1.6V14.4H12.8V16H1.6Z" fill="#F8F8F8" />
                </svg>
                <p className='mt-2'>Photos</p>
            </div>
            <div className="tab-link flex flex-col justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                    <path d="M15.15 1.81458L12 3.7375V1.08333C12 0.796016 11.8946 0.520465 11.7071 0.317301C11.5196 0.114137 11.2652 0 11 0H2C1.46957 0 0.960859 0.228273 0.585786 0.634602C0.210714 1.04093 0 1.59203 0 2.16667V10.8333C0 11.408 0.210714 11.9591 0.585786 12.3654C0.960859 12.7717 1.46957 13 2 13H11C11.2652 13 11.5196 12.8859 11.7071 12.6827C11.8946 12.4795 12 12.204 12 11.9167V9.25167L15.15 11.1746C15.2308 11.2318 15.3241 11.2649 15.4205 11.2707C15.5169 11.2765 15.613 11.2547 15.6991 11.2075C15.7853 11.1603 15.8584 11.0893 15.9112 11.0018C15.964 10.9142 15.9947 10.8132 16 10.7088V2.275C15.9938 2.17104 15.9626 2.07065 15.9095 1.98384C15.8563 1.89703 15.7831 1.82683 15.6971 1.78025C15.6111 1.73366 15.5153 1.71232 15.4193 1.71834C15.3233 1.72437 15.2305 1.75755 15.15 1.81458Z" fill="#F8F8F8" />
                </svg>
                <p className='mt-2'>Photos</p>
            </div>

        </div>
    );
};

export default ProfileTab;