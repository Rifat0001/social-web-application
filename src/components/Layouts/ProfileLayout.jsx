import { Outlet } from "react-router-dom";
import ProfileLeft from "../../ProfileParts/ProfileLeft/ProfileLeft";
import ProfileTop from "../../ProfileParts/ProfileTop/ProfileTop";
import Messages from "../Messages/Messages";
import './style.css'
import Header from "../Header/Header";
const ProfileLayout = () => {
    return (
        <section>
            <Header></Header>
            <div className="profile-col-layout bg-[#00072D]">

                <div className="profile-top-2">

                    <ProfileTop className=''></ProfileTop>
                    <div className="profile-bottom-1">
                        <ProfileLeft></ProfileLeft>
                        <div className="changing ">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
                <Messages></Messages>

            </div>
        </section>
    );
};

export default ProfileLayout;