import LoadMorePosts from "../../../ProfileParts/ChangingContentsProfile/Categories/CategoryPosts/LoadMorePosts";
import NoMorePost from "../../../ProfileParts/ChangingContentsProfile/Categories/CategoryPosts/NoMorePost";
import OhterFirsts from "../CategoryPostsOthers/OhterPosts/OhterFirsts";
import OtherSecond from "../CategoryPostsOthers/OhterPosts/OtherSecond";

const TimelineAllPosts = () => {
    return (
        <div className="bg-[#0A123E] all-post">
            <OhterFirsts></OhterFirsts>
            <OtherSecond></OtherSecond>
            <div className="py-12 flex justify-center items-center">
                <NoMorePost></NoMorePost>
            </div>
        </div>
    );
};

export default TimelineAllPosts;