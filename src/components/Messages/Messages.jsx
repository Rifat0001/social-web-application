import Mi from '../../assets/message-1.png';
import Ms from '../../assets/setting1.png';
import Img from '../../assets/p-1.png';
import './Messages.css'

const Messages = () => {
    return (
        <div>
            <div className='flex items-center justify-between my-5 mx-5 navborder py-2 px-5'>
                <h2 className="font-bold text-white ">
                    Messages
                </h2>
                <div className='flex items-center gap-3'>
                    <div className='bg-slate-400 p-3 rounded-full'>
                        <img src={Mi} alt="" />
                    </div>
                    <div className='bg-slate-400 p-3 rounded-full'>
                        <img src={Ms} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex-col items-center justify-center gap-3'>
                <div className='flex items-center justify-start gap-5 border-[1px] rounded-lg py-4 mx-5 mb-3 px-5'>
                    <img src={Img} alt="" />
                    <h2 className='text-white font-bold'>Oblivion Isme</h2>
                </div>
                <div className='flex items-center justify-start gap-5 border-[1px] rounded-lg py-4 mx-5 mb-3 px-5'>
                    <img src={Img} alt="" />
                    <h2 className='text-white font-bold'>Oblivion Isme</h2>
                </div>
                <div className='flex items-center justify-start gap-5 border-[1px] rounded-lg py-4 mx-5 mb-3 px-5'>
                    <img src={Img} alt="" />
                    <h2 className='text-white font-bold'>Oblivion Isme</h2>
                </div>
                <div className='flex items-center justify-start gap-5 border-[1px] rounded-lg py-4 mx-5 mb-3 px-5'>
                    <img src={Img} alt="" />
                    <h2 className='text-white font-bold'>Oblivion Isme</h2>
                </div>
                <div className='flex items-center justify-start gap-5 border-[1px] rounded-lg py-4 mx-5 mb-3 px-5'>
                    <img src={Img} alt="" />
                    <h2 className='text-white font-bold'>Oblivion Isme</h2>
                </div>
                <div className='flex items-center justify-start gap-5 border-[1px] rounded-lg py-4 mx-5 mb-3 px-5'>
                    <img src={Img} alt="" />
                    <h2 className='text-white font-bold'>Oblivion Isme</h2>
                </div>
                <div className='flex items-center justify-start gap-5 border-[1px] rounded-lg py-4 mx-5 mb-3 px-5'>
                    <img src={Img} alt="" />
                    <h2 className='text-white font-bold'>Oblivion Isme</h2>
                </div>
                <div className='flex items-center justify-start gap-5 border-[1px] rounded-lg py-4 mx-5 mb-3 px-5'>
                    <img src={Img} alt="" />
                    <h2 className='text-white font-bold'>Oblivion Isme</h2>
                </div>
                <div className='flex items-center justify-start gap-5 border-[1px] rounded-lg py-4 mx-5 mb-3 px-5'>
                    <img src={Img} alt="" />
                    <h2 className='text-white font-bold'>Oblivion Isme</h2>
                </div>
            </div>
            <div>
                <input type="text" name="" placeholder='Search for Users' className='bg-[#00072D] py-2 px-3 rounded-full mx-5 border-2 border-[#EC46E5]' id="" />
            </div>
        </div>
    );
};

export default Messages;