import FCard1 from './FCard1';
import FCard2 from './FCard2';
import FCard3 from './FCard3';
import FCard4 from './FCard4';
import FollowerCards from './FollowerCards';
import './Following.css'
const FollowerContainer = () => {
    return (
        <div className="follower-container pt-4  mt-4">
            <div className="flex items-center my-2 justify-around mx-4  ">
                <FollowerCards></FollowerCards>
                <FCard1></FCard1>
            </div>
            <div className="flex items-center my-2 justify-around mx-4  ">
                <FCard2></FCard2>
                <FCard3></FCard3>
            </div>
            <div className="flex items-center my-2 justify-around mx-4  ">
                <FCard2></FCard2>
                <FCard4></FCard4>
            </div>
        </div>
    );
};

export default FollowerContainer;