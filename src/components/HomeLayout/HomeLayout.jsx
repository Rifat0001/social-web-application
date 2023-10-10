
import './HomeLayout.css'
import SideIcons from '../SideIcons/SideIcons';
import Profile from '../Profile/Profile';

import Messages from '../Messages/Messages';
import HomeFeeds from '../HomeFeeds/HomeFeeds';
const HomeLayout = () => {
    return (
        <div className='home-layout bg-[#0A123E]'>
            <SideIcons></SideIcons>
            <Profile></Profile>
            <HomeFeeds></HomeFeeds>
            <Messages></Messages>
        </div>
    );
};

export default HomeLayout;