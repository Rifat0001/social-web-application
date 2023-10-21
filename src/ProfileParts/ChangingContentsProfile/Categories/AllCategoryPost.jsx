import FirstCategorypost from "./CategoryPosts/FirstCategorypost";
import './Category.css'
import SecondCategoryPost from "./CategoryPosts/SecondCategoryPost";
import Categorythirdpost from "./CategoryPosts/Categorythirdpost";
import FourthCategoryPost from "./CategoryPosts/FourthCategoryPost";
import FifthCategoryPost from "./CategoryPosts/FifthCategoryPost";
import LoadMorePosts from "./CategoryPosts/LoadMorePosts";
import NoMorePost from "./CategoryPosts/NoMorePost";
const AllCategoryPost = () => {
    return (
        <div className="all-post-category">
            <FirstCategorypost></FirstCategorypost>
            <SecondCategoryPost></SecondCategoryPost>
            <Categorythirdpost></Categorythirdpost>
            <FourthCategoryPost></FourthCategoryPost>
            <FifthCategoryPost></FifthCategoryPost>
            <div className="flex justify-center items-center py-12">
                <NoMorePost></NoMorePost>
            </div>
        </div>
    );
};

export default AllCategoryPost;