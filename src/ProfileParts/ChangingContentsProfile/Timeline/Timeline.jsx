import AllTimeLinePosts from './AllTimeLinePosts';
import CreatePostProfile from './CreatePostProfile';
import SubCategory from './SubCategory';
import './style.css'
const Timeline = () => {
    return (
        <div>
            {/* search section  */}
            <div className="post-outer flex items-center justify-between ">
                <div className="post-left">
                    <p className='text-[22px] ps-8 text-white '>Posts</p>
                </div>
                <div className="post-right flex items-center justify-center">
                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.68945 0C11.9293 0 15.3781 3.44876 15.3781 7.68866C15.3781 9.68903 14.6104 11.5135 13.3542 12.8827L15.8261 15.3494C16.0574 15.5808 16.0582 15.955 15.8269 16.1864C15.7116 16.3032 15.5592 16.3609 15.4076 16.3609C15.2568 16.3609 15.1052 16.3032 14.9892 16.188L12.4874 13.6932C11.1714 14.7471 9.5028 15.3781 7.68945 15.3781C3.44955 15.3781 0 11.9286 0 7.68866C0 3.44876 3.44955 0 7.68945 0ZM7.68945 1.18433C4.10251 1.18433 1.18433 4.10172 1.18433 7.68866C1.18433 11.2756 4.10251 14.1938 7.68945 14.1938C11.2756 14.1938 14.1938 11.2756 14.1938 7.68866C14.1938 4.10172 11.2756 1.18433 7.68945 1.18433Z" fill="#00072D" />
                        </svg></button>
                </div>
            </div>

            {/* make post section started  */}
            <CreatePostProfile></CreatePostProfile>

            {/* sub category section started  */}
            <SubCategory></SubCategory>

            {/* timeline posts starts here  */}
            <AllTimeLinePosts></AllTimeLinePosts>
        </div>
    );
};

export default Timeline;