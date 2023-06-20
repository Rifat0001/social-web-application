import IMG from "../../assets/feed+.png";
import GROUPIMG from "../../assets/Group.png";
import SelectIMG from "../../assets/feedimg.png";

import "./Feeds.css";
const Feeds = () => {
  return (
    <div className="bg-[#00072D]">
      <div className="bg-[##00072D] my-5 mx-12  story-crt">
        <div className="flex ms-6 gap-4 justify-start items-center">
          <div className="mt-3 gradient-border p-2">
            <img src={IMG} alt="" />
          </div>
          <div className="mt-3">
            <h2 className="text-white text-lg">Create New Stories</h2>
          </div>
        </div>
      </div>
      <div className="bg-[#0A123E] my-5 mx-12  going-on">
        <div className=" mx-6  py-6">
          <progress className="progress bg-[#00E7FC] progress-bar__fill w-100" value="40" max="100"></progress>
        </div>
        <div className="mx-6">
          <h2 className="text-lg text-white">What is going on?</h2>
          <div>
            <textarea
              className="textarea textarea-primary w-full h-[139px] bg-[#00072D] border-none rounded-[22px] my-5"
              placeholder="Sharing Makes Us All Happy"
              rows={10}
            ></textarea>
          </div>
        </div>
        <div className="mx-6">
          <h2 className="text-lg mb-6 text-white">Image</h2>
          <div className=" absolute left-[66%]">
            {/* <input
              className="bg-[#0E1A5C] my-3 rounded-full text-white ps-4"
              placeholder="1 file(s) selected"
            /> */}
            <div className="selecttt">
              <p className=" my-3 rounded-full text-white ps-4">1 file(s) selected</p>
            </div>

          </div>
          <div className="bg-image h-[250px] rounded-lg w-full">
            <img src={GROUPIMG} alt="" />
            <div className="text-center mb-10">
              <img src={SelectIMG} alt="" className=" mx-auto" />
              <h2 className="font-bold">Choose Image</h2>
            </div>
          </div>
          <div className="items-center justify-center my-10 flex ">
            {/* <button className="btn my-5 mx-auto bg-gradient-to-r from-[#00E7FC] to-[#EC46E5] border-none font-bold">Please Wait..</button> */}
            <div className="wait text-center">
              <p className="font-bold text-center">  Please wait.....</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Feeds;
