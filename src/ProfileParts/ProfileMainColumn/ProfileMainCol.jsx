import ProfileTab from '../ProfileTab/ProfileTab';
import ProfileTop from '../ProfileTop/ProfileTop';
import ProMiddle from './ProMiddle';
import './style.css'
const ProfileMainCol = () => (
    <div className='profile-main p-4 bg-[#00072D]'>
        <ProfileTop></ProfileTop>
        <ProfileTab></ProfileTab>
        <ProMiddle></ProMiddle>
    </div>
);

export default ProfileMainCol;