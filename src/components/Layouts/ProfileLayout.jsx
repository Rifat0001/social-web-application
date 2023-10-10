import ProfileMainCol from "../../ProfileParts/ProfileMainColumn/ProfileMainCol";
import Messages from "../Messages/Messages";
import './style.css'
const ProfileLayout = () => {
    return (
        <div className="profile-col-layout bg-[#0A123E]">
            <ProfileMainCol></ProfileMainCol>
            <Messages></Messages>
        </div>
    );
};

export default ProfileLayout;