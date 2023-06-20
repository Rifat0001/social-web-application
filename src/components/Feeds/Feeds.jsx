import IMG from "../../assets/feed+.png";
import GROUPIMG from "../../assets/Group.png";
import SelectIMG from "../../assets/feedimg.png";

import "./Feeds.css";
const Feeds = () => {
  return (
    <div className="bg-[#00072D]">
      <div className="bg-[#0A123E] my-5 mx-12 border-2 rounded-2xl border-[#00E7FC]">
        <div className="flex items-center justify-start gap-4 py-5 px-10">
          <div className=" rounded-full border-2 gradient-border p-2">
            <img src={IMG} alt="" />
          </div>
          <div>
            <h2 className="text-white text-xl">Create New Stories</h2>
          </div>
        </div>
      </div>
      <div className="bg-[#0A123E] my-5 mx-12 border-2 rounded-2xl border-[#00E7FC]">
        <div className=" px-5 py-6">
          <progress className="progress bg-[#00E7FC] w-100"></progress>
        </div>
        <div className="px-5">
          <h2 className="text-xl text-white py-2">What is going on?</h2>
          <div>
            <textarea
              className="textarea textarea-primary w-full bg-[#00072D] border-none rounded-[22px] mb-5"
              placeholder="Sharing Makes Us All Happy"
              rows={10}
            ></textarea>
          </div>
        </div>
        <div className="px-5 relative">
          <h2 className="text-xl text-white py-2">Image</h2>
          <div className=" absolute left-[60%]">
            <input
              className="bg-[#0E1A5C] my-3 rounded-full text-white ps-4"
              placeholder="1 file(s) selected"
            />
          </div>
          <div className="bg-image w-full">
            <img src={GROUPIMG} alt="" />
            <div className="text-center pb-5">
              <img src={SelectIMG} alt="" className=" mx-auto" />
              <h2>Choose Image</h2>
            </div>
          </div>
        </div>
        <div className="items-center flex ">
          <button className="btn my-5 mx-auto bg-gradient-to-r from-[#00E7FC] to-[#EC46E5] border-none font-bold">Please Wait..</button>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
