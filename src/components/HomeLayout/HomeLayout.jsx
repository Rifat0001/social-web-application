
import './HomeLayout.css'
import SideIcons from '../SideIcons/SideIcons';
import Profile from '../Profile/Profile';
import Feeds from '../Feeds/Feeds';
const HomeLayout = () => {
    return (
        <div className='home-layout'>
            <SideIcons></SideIcons>
            <Profile></Profile>
            <Feeds></Feeds>
            <div className='bg-indigo-700'>message</div>
        </div>
    );
};

export default HomeLayout;