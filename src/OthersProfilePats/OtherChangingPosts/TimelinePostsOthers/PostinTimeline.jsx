import profile from '../../../assets/CreatePost/bd-person.png'
import img from '../../../assets/CreatePost/Image.png';
import vdo from '../../../assets/CreatePost/Video.png';
import poll from '../../../assets/CreatePost/poll.png';
import more from '../../../assets/CreatePost/More-Square.png';
const PostinTimeline = () => {
    return (
        <div className='bg-[#0A123E] give-post-profile'>
            <div className="top-part flex justify-between">
                <div>
                    <img src={profile} />
                </div>
                <div >
                    <input className='write-post-profile p-5 text-xs' placeholder='tell your friends about your thought...' type="text" />
                </div>
            </div>
            <div className="bottom-part grid grid-cols-4 gap-2">
                <div className='w-[170px] h-[42px] mt-4 rounded-lg bg-[#00072D] flex items-center'>
                    <div className='ms-4 me-2'>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <p className='text-white text-md font-light'>Upload Images</p>
                    </div>
                </div>
                <div className='w-[170px] h-[42px] mt-4 rounded-lg bg-[#00072D] flex items-center'>
                    <div className='ms-4 me-2'>
                        <img src={vdo} alt="" />
                    </div>
                    <div>
                        <p className='text-white text-md font-light'>Upload Videos</p>
                    </div>
                </div>
                <div className='w-[170px] h-[42px] mt-4 rounded-lg bg-[#00072D] flex items-center'>
                    <div className='ms-4 me-2'>
                        <img src={poll} alt="" />
                    </div>
                    <div>
                        <p className='text-white text-md font-light'>Create Poll</p>
                    </div>
                </div>
                <div className='w-[170px] h-[42px] mt-4 rounded-lg bg-[#00072D] flex items-center'>
                    <div className='ms-4 me-2'>
                        <img src={more} alt="" />
                    </div>
                    <div>
                        <p className='text-white text-md font-light'>More</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostinTimeline;