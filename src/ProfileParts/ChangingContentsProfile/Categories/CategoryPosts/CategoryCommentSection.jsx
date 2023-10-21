import Img from "../../../../assets/CreatePost/bd-person.png";
const CategoryCommentSection = () => {
    return (
        <div className="">
            <div className="">
                <div className="  my-3 bg-[#00E7FC] w-[85%] mx-auto h-[1px]"></div>
            </div>
            <div className="ps-28 req-btn pb-5">
                <div className="flex  items-center justify-start gap-5">
                    <img src={Img} width={45} height={38} alt="" />
                    <input type="text" name="" className="bg-[#00072D] rounded-[48px] w-[75%] p-3" placeholder="Write a comment and press enter" />
                </div>
            </div>
        </div>
    );
};

export default CategoryCommentSection;