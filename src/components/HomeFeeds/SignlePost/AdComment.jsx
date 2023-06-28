import Img from "../../../assets/CreatePost/bd-person.png";
import image5 from "../../../assets/CreatePost/bd-person.png";
import gif from '../../../assets/reply/Vector.png'
import img from '../../../assets/reply/Combined-Shape.png'
import emoji from '../../../assets/reply/Vector (2).png'
import send from '../../../assets/reply/Vector (1).png'
import voice from '../../../assets/reply/voice.svg'
const AdComment = () => {
    return (
        <div >
            <div className="ps-10 req-btn pb-5">
                <div className="flex items-center justify-start gap-2">
                    <img src={Img} width={45} className="mb-12" height={38} alt="" />
                    <div>
                        <div className="bg-[#00072D] h-[95px] rounded-md w-[610px]">
                            <div className="relative">
                                <input type="text" name="" className="bg-[#00072D] rounded-md h-[95px] w-full p-3 z-0" placeholder="Write a comment and press enter" />
                            </div>
                            <div className="absolute bottom-14 z-10 right-8 ">
                                <div className="flex gap-2">
                                    <button><img src={send} alt="" /></button>
                                    <button><img src={img} alt="" /></button>
                                    <button><img src={gif} alt="" /></button>
                                    <button><img src={voice} alt="" /></button>
                                    <button><img src={emoji} alt="" /></button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdComment;