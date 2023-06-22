import './CreateStory.css';
import img from '../../../assets/story/Rectangle 42.png'
import plus from '../../../assets/story/plus.png'
const CreateStory = () => {
    return (
        <div className="card w-[100px]  m-2  shadow-lg">
            <div className='relative'>
                <img src={img} alt="" />
            </div>
            <div className='absolute top-8 right-8'>
                <button><img src={plus} alt="" /></button>
            </div>
            <div className='text-center'>
                <p className='text-base text-white font-medium'>You</p>
            </div>

        </div>
    );
};

export default CreateStory;