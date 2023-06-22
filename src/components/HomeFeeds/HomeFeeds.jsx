import CreatePost from './CreatePost/CreatePost';
import './HomeFeeds.css'
import Story from './Story/Story';
const HomeFeeds = () => {
    return (
        <div className='bg-[#00072D]'>
            <Story></Story>
            <CreatePost></CreatePost>
        </div>
    );
};

export default HomeFeeds;