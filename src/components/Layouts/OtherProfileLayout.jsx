import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Messages from "../Messages/Messages";
import OthersProfileTop from "../../OthersProfilePats/OthersProfileTop";
import OthersLefts from "../../OthersProfilePats/OthersLefts";

const OtherProfileLayout = () => {
    return (
        <section>
            <Header></Header>
            <div className="profile-col-layout bg-[#00072D]">

                <div className="profile-top-2">
                    <OthersProfileTop></OthersProfileTop>
                    <div className="profile-bottom-1">
                        <OthersLefts></OthersLefts>
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

export default OtherProfileLayout;