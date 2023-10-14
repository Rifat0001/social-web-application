import Img from "../../../../assets/CreatePost/bd-person.png";

const TimeLineComment = () => {
    return (
        <div className="req-btn pb-5 px-6">
            <div className="flex  items-center justify-start gap-5">
                <img src={Img} width={45} height={38} alt="" />
                <input type="text" name="" className="bg-[#00072D] rounded-[48px] w-full p-3" placeholder="Write a comment and press enter" />
            </div>
        </div>
    );
};

export default TimeLineComment;