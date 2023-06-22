import img1 from '../../../assets/story/Rectangle 45.png';
import './Card.css'
const Card = () => {
    return (
        <div className="card w-[100px]  m-2  shadow-lg">
            <img className='str-img p-1 w-full' src={img1} alt="" />
            <div className='text-center'>
                <p className='text-xs text-white'>Anza Madni</p>
                <p className='t-g text-xs'>@Anza_Madni</p>
            </div>

        </div>
    );
};

export default Card;