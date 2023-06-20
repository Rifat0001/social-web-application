
import './HomeLayout.css'
import SideIcons from '../SideIcons/SideIcons';
import Profile from '../Profile/Profile';
import Feeds from '../Feeds/Feeds';
import Messages from '../Messages/Messages';
const HomeLayout = () => {
    return (
        <div className='home-layout'>
            <SideIcons></SideIcons>
            <Profile></Profile>
            <Feeds></Feeds>
            <Messages></Messages>
        </div>
    );
};

export default HomeLayout;