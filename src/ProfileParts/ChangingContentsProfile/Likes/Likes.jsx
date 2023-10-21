import LikesHashTag from "./LikesHashTag";
import LikesMainPages from "./LikesMainPages";
import LikesSuggestions from "./LikesSuggestions";
import LikesTop from "./LikesTop";

const Likes = () => {
    return (
        <div>
            <LikesTop></LikesTop>
            <LikesMainPages></LikesMainPages>
            <LikesHashTag></LikesHashTag>
            <LikesSuggestions></LikesSuggestions>
        </div>
    );
};

export default Likes;