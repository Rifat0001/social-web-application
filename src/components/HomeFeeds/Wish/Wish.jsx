import './Wish.css'
import wish from '../../../assets/CreatePost/u.png'
import cross from '../../../assets/CreatePost/cross.png'
const Wish = () => {
    return (
        <div className='bg-[#0A123E] flex items-center wish justify-between give-post mx-6 mt-6 relative'>
            <div>
                <p className='text-lg text-white font-normal'>Good Morning, Oblivion Isme</p>
                <p className='text-base text-white font-light'>Every new day is a chance to change your life. </p>
            </div>
            <div>
                <img src={wish} alt="" />
            </div>
            <img src={cross} className='absolute right-2 top-3' alt="" />
        </div>
    );
};

export default Wish;