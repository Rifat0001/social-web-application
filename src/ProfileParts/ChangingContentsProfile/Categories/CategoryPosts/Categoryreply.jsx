import image5 from "../../../../assets/CreatePost/bd-person.png";
import gif from '../../../../assets/reply/Vector.png'
import img from '../../../../assets/reply/Combined-Shape.png'
import emoji from '../../../../assets/reply/Vector (2).png'
import send from '../../../../assets/reply/Vector (1).png'
const Categoryreply = () => {
    return (
        <div className="time2 ms-40">
            <div className="flex items-center justify-start gap-2">
                <img src={image5} alt="" width={35} height={40} />
                <div>
                    <div className="bg-[#00072D] h-[22px] w-[509px] ms-2">
                        <p className="ms-4 font-light text-xs text-[#A6A6A6]">
                            Reply to <span className="text-white font-normal">Kevin Alexander</span> .Cancel</p>
                    </div>
                    <div className="bg-[#00072D] h-[40px] relative rounded-[200px] w-[529px]">
                        <div>
                            <input className="h-[40px] rounded-[200px] p-4 w-[529px] bg-[#00072D]" type="text" />
                        </div>
                        <div className="flex absolute top-2 right-4 gap-2">
                            <button><img src={send} alt="" /></button>
                            <button><img src={img} alt="" /></button>
                            <button><img src={gif} alt="" /></button>

                            <button><img src={emoji} alt="" /></button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Categoryreply;