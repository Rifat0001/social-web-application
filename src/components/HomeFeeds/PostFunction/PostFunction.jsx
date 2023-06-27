import { FaBolt, FaEllipsisH, FaPen, FaTrash } from "react-icons/fa";
import CommentIcon from "../../../assets/CreatePost/commenticons.png";
import OpenLink from "../../../assets/CreatePost/openLink.png";
import pin from "../../../assets/CreatePost/pin.png";
import "./PostFunction.css";
import { useState } from "react";

const PostFunction = () => {
  const [isDisabled, setIsDisabled] = useState("Disable");
  const handleDisable = () => {
    setIsDisabled((prevState) =>
      prevState === "Enable" ? "Disable" : "Enable"
    );
  };
  
  return (
    <div className="dropdown dropdown-left dropdown-end">
      <label tabIndex={0} className=" ">
        <FaEllipsisH size={30} />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu  each-suggestion"
      >
        <li onClick={() => window.my_modal_3.showModal()}>
          <a className="flex items-start gap-3">
            <FaPen size={15} className="mt-1" />
            <div>
              <h2 className="font-bold text-[12px] capitalize">Edit Post</h2>
              <p className="font-[300] text-[11px] normal-case">
                edit post information.
              </p>
            </div>
          </a>
        </li>
        <dialog id="my_modal_3" className="modal ">
          <form method="dialog" className="modal-box modal-bg w-full flex-col">
            <div className=" w-full mx-2">
              <button className="btn btn-sm btn-circle btn-ghost text-white btn-outline absolute right-5 top-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h3 className="font-bold text-lg text-white text-start">
                Edit Post
              </h3>
            </div>

            <div className="text-right">
              <textarea
                placeholder="Bio"
                className="textarea-lg textArea w-full bg-[#00072D] rounded-3xl mt-3"
              ></textarea>
              <div className="btn-wrapper">
                <button className="btn-update mt-3 btn-border text-white ">
                  Update
                </button>
              </div>
            </div>
          </form>
        </dialog>
        <li onClick={() => window.my_modal_4.showModal()}>
          <a className="flex items-start gap-3">
            <FaTrash size={15} className="mt-1" />
            <div>
              <h2 className="font-bold text-[12px] capitalize">delete post</h2>
              <p className="font-[300] text-[11px] normal-case">
                delete this post completely.
              </p>
            </div>
          </a>
        </li>
        <dialog id="my_modal_4" className="modal ">
          <form method="dialog" className="modal-box modal-bg w-full flex-col">
            <div className=" w-full ">
              <button className="btn btn-sm btn-circle btn-ghost text-white btn-outline absolute right-5 top-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h3 className="font-bold text-lg text-white text-start">
                Delete Comment
              </h3>
            </div>
            <div className="text-right">
              <h2 className="text-start text-white py-2">
                are you sure you want to delete this comment?
              </h2>
              <div className="btn-wrapper">
                <button className=" mt-3 btn-border-delete text-white ">
                  Delete
                </button>
              </div>
            </div>
          </form>
        </dialog>
        <li onClick={handleDisable}>
          <a className="flex items-start gap-3">
            {/* <FaTrash size={15} className="mt-1" /> */}
            <img src={CommentIcon} alt="" className="mt-1" />
            <div>
              <h2 className="font-bold text-[12px] capitalize">
                {isDisabled} comments{" "}
              </h2>
              <p className="font-[300] text-[11px] normal-case">
                allow or disallow members to comment on this post.
              </p>
            </div>
          </a>
        </li>
        <li>
          <a className="flex items-start gap-3">
            {/* <FaTrash size={15} className="mt-1" /> */}
            <img src={OpenLink} alt="" className="mt-1" />
            <div>
              <h2 className="font-bold text-[12px] capitalize">
                open post in new tab{" "}
              </h2>
              <p className="font-[300] text-[11px] normal-case">
                view this post in new tab.
              </p>
            </div>
          </a>
        </li>
        <li>
          <a className="flex items-start gap-3">
            {/* <FaTrash size={15} className="mt-1" /> */}
            <img src={pin} alt="" className="mt-1" />
            <div>
              <h2 className="font-bold text-[12px] capitalize">pin post</h2>
              <p className="font-[300] text-[11px] normal-case">
                pin this post to the top of your profile.
              </p>
            </div>
          </a>
        </li>
        <li onClick={()=>window.my_modal_5.showModal()}>
          <a className="flex items-start gap-3">
            <FaBolt size={15} className="mt-1" />
           
            <div>
              <h2 className="font-bold text-[12px] capitalize">boost post</h2>
              <p className="font-[300] text-[11px] normal-case">
                add this post from the boosted list.
              </p>
            </div>
          </a>
        </li>
        <dialog id="my_modal_5" className="modal">
          <form method="dialog" className="modal-box modal-bg w-full flex-col">
            <div className=" w-full mx-2 text-start text-white normal-case space-y-4">
              <h3 className="font-bold text-lg text-white text-start flex items-center">
                <FaBolt /> <span>Boost Post</span>
              </h3>
              <p>
                Each boost will give you 1000 views. You can boost your post
                however many boosts you have.
              </p>
              <p>
                Be sure to use up all your boosts before the month ends, the
                boosts reset every 30 days.
              </p>
            </div>
            <div className="flex items-start justify-between gap-5 pt-3">
              <div className="flex flex-col">
                <button className="btn-border rounded-lg text-white px-4">
                  Boosts Left
                </button>
                <button className="btn-border rounded-lg text-white flex items-center justify-center py-7">
                  <FaBolt></FaBolt> 12
                </button>
              </div>
              <div className=" space-y-3">
                <div className="flex items-start gap-3">
                  <h2 className="font-bold text-white mt-3">Days Left</h2>
                  <div className="items-center flex justify-between text-white gap-3">
                    <div className="flex flex-col">
                      <span className="btn-border rounded-full">29</span>
                      <span>days</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="btn-border rounded-full">1</span>
                      <span>hour</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="btn-border rounded-full">30</span>
                      <span>minutes</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="btn-border rounded-full">2</span>
                      <span>seconds</span>
                    </div>
                  </div>
                </div>
                <div className="btn-border rounded text-white mb-2">
                  <p>how many times would you like to boost this post? </p>
                </div>
                <input
                  type="number"
                  placeholder="Type amount"
                  name=""
                  id=""
                  className="py-1 px-2 bg-[#00072D] rounded w-full text-white"
                />
                <div className="flex items-center gap-2 justify-end py-3">
                  <button className="btn-border text-white">Close</button>
                  <button className="btn-border text-white">Boost</button>
                </div>
              </div>
            </div>
          </form>
        </dialog>
      </ul>
    </div>
  );
};

export default PostFunction;
