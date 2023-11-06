import '../../Others.css'
import vdo from '../../../assets/midMenu/Video.png'
import ado from '../../../assets/midMenu/audio.png'
import loc from '../../../assets/midMenu/Location.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faNewspaper, faVideo, faMusic, faLocationDot } from '@fortawesome/free-solid-svg-icons'
const SubCateOthers = () => {
    return (
        <div className='bg-[#0A123E] flex items-center h-[80px] justify-around give-post my-6 '>

            <NavLink to='/othersProfile/timeline/feeds'>
                <div className='change-bg h-[52px] w-[52px] rounded-full flex justify-center items-center'>
                    {/* <FaNewspaper className='text-3xl text-[#050C36]'></FaNewspaper> */}
                    <FontAwesomeIcon className='text-lg sub-icon' icon={faNewspaper} />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Feed</p>
            </NavLink>
            <NavLink to='/othersProfile/timeline/photos'>
                <div className='change-bg h-[52px] w-[52px] rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon className='text-lg sub-icon' icon={faImage} />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Photos</p>
            </NavLink>
            <div>
                <div className='change-bg h-[52px] w-[52px] rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon className='text-lg sub-icon' icon={faVideo} />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Video</p>
            </div>
            <div>
                <div className='change-bg h-[52px] w-[52px] rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon className='text-lg sub-icon' icon={faMusic} />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Audio</p>
            </div>
            <div>
                <div className='change-bg h-[52px] w-[52px] rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon className='text-lg sub-icon' icon={faLocationDot} />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Located</p>
            </div>



        </div>
    );
};

export default SubCateOthers;