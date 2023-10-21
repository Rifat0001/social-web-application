import './style.css'
import profile from '../../../assets/CreatePost/bd-person.png'
import img from '../../../assets/CreatePost/Image.png';
import vdo from '../../../assets/CreatePost/Video.png';
import poll from '../../../assets/CreatePost/poll.png';
import more from '../../../assets/CreatePost/More-Square.png';
const MakePost = () => {
    return (
        <section className='bg-[#0A123E] give-post-profile '>
            <div className="top-part  flex justify-between">
                <div>
                    <img src={profile} />
                </div>
                <div >
                    <input className='write-post-profile p-5 text-xs' placeholder='tell your friends about your thought...' type="text" />
                </div>
            </div>
            <div className="bottom-part">

            </div>
        </section>
    );
};

export default MakePost;