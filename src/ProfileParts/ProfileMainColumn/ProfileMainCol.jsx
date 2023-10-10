import ProfileTab from '../ProfileTab/ProfileTab';
import ProfileTop from '../ProfileTop/ProfileTop';
import { FaBeer } from 'react-icons/fa';
import './style.css'
const ProfileMainCol = () => (
    <div className='profile-main p-4 bg-[#00072D]'>
        <ProfileTop></ProfileTop>
        <ProfileTab></ProfileTab>

    </div>
);

export default ProfileMainCol;