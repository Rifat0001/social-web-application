import CreatePost from './CreatePost/CreatePost';
import './HomeFeeds.css'
import MiddleMenu from './MiddleMenu/MiddleMenu';
import SinglePost from './SignlePost/SinglePost';
import Story from './Story/Story';
import Wish from './Wish/Wish';
const HomeFeeds = () => {
    return (
        <div className='bg-[#00072D]'>
            <Story></Story>
            <CreatePost></CreatePost>
            <Wish></Wish>
            <MiddleMenu></MiddleMenu>
            <SinglePost></SinglePost>
        </div>
    );
};

export default HomeFeeds;