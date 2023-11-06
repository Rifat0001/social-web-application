import { Outlet } from "react-router-dom";
import AllTimeLinePosts from "../../../ProfileParts/ChangingContentsProfile/Timeline/AllTimeLinePosts";
import SubCategory from "../../../ProfileParts/ChangingContentsProfile/Timeline/SubCategory";
import PostinTimeline from "./PostinTimeline";
import SubCateOthers from "./SubCateOthers";

const TimelineOthers = () => {
    return (
        <div>
            {/* make post section started  */}
            <PostinTimeline></PostinTimeline>
            {/* sub category section started  */}
            <SubCateOthers></SubCateOthers>
            {/* timeline posts starts here  */}
            <Outlet></Outlet>
        </div>
    );
};

export default TimelineOthers;