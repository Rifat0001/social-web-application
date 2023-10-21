import LoadMorePosts from '../Categories/CategoryPosts/LoadMorePosts';
import FifthPost from './TimeLinePosts/FifthPost';
import FirstPost from './TimeLinePosts/FirstPost';
import FourthPost from './TimeLinePosts/FourthPost';
import SecondPost from './TimeLinePosts/SecondPost';
import ThirdPost from './TimeLinePosts/ThirdPost';
import './style.css'
const AllTimeLinePosts = () => {
    return (
        <div className="bg-[#0A123E] all-post">
            <FirstPost></FirstPost>
            <SecondPost></SecondPost>
            <ThirdPost></ThirdPost>
            <FourthPost></FourthPost>
            <FifthPost></FifthPost>
            <div className="py-12">
                <LoadMorePosts></LoadMorePosts>
            </div>
        </div>
    );
};

export default AllTimeLinePosts;