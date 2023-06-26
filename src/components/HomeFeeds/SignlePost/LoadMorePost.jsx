import {
    FaArrowDown
} from "react-icons/fa";
const LoadMorePost = () => {
    return (
        <div>
            <button className="w-[230px] h-[43px] mx-auto flex items-center justify-center gap-2 load mt-16">
                <FaArrowDown className="text-[14px] text-[#B6B6B6] "></FaArrowDown>
                <p className="text-[14px] text-[#B6B6B6] ">Load More Posts</p>
            </button>
        </div>
    );
};

export default LoadMorePost;