import './MiddleMenu.css'
import you from '../../../assets/midMenu/award.png'
import feed from '../../../assets/midMenu/feed.png'
import img from '../../../assets/midMenu/Image.png'
import vdo from '../../../assets/midMenu/Video.png'
import ado from '../../../assets/midMenu/audio.png'
import loc from '../../../assets/midMenu/Location.png'
import sav from '../../../assets/midMenu/bookmark-2.png'
const MiddleMenu = () => {
    return (
        <div className='bg-[#0A123E] flex items-center h-[80px] justify-around give-post mx-6 my-6 '>
            <div>
                <div className='bg-[#050C36] h-[52px] w-[52px] rounded-full flex justify-center items-center'>
                    <img src={you} className='' alt="" />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>For You</p>
            </div>
            <div>
                <div className='m-b h-[52px] w-[52px] rounded-full flex justify-center items-center'>
                    <img src={feed} className='' alt="" />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Feed</p>
            </div>
            <div>
                <div className='bg-[#050C36] h-[52px] w-[52px] rounded-full flex justify-center items-center'>
                    <img src={img} className='' alt="" />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Photos</p>
            </div>
            <div>
                <div className='bg-[#050C36] h-[52px] w-[52px] rounded-full flex justify-center items-center'>
                    <img src={vdo} className='' alt="" />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Video</p>
            </div>
            <div>
                <div className='bg-[#050C36] h-[52px] w-[52px] rounded-full flex justify-center items-center'>
                    <img src={ado} className='' alt="" />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Audio</p>
            </div>
            <div>
                <div className='bg-[#050C36] h-[52px] w-[52px] rounded-full flex justify-center items-center'>
                    <img src={loc} className='' alt="" />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Located</p>
            </div>
            <div>
                <div className='bg-[#050C36] h-[52px] w-[52px] rounded-full flex justify-center items-center'>
                    <img src={sav} className='' alt="" />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Saved Posts</p>
            </div>



        </div>
    );
};

export default MiddleMenu;