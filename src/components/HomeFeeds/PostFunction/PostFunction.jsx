import { FaBolt, FaEllipsisH, FaPen, FaTrash } from "react-icons/fa";
import CommentIcon from "../../../assets/CreatePost/commenticons.png";
import OpenLink from "../../../assets/CreatePost/openLink.png";
import pin from "../../../assets/CreatePost/pin.png";
import "./PostFunction.css";

const PostFunction = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <label tabIndex={0} className=" ">
        <FaEllipsisH size={30} />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 each-suggestion"
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
              <h3 className="font-bold text-lg text-white text-start">Edit Post</h3>
            </div>
            <div className="text-right">
            <textarea placeholder="Bio" className="textarea-lg textArea w-full bg-[#00072D] rounded-3xl mt-3" ></textarea>
            <div className="btn-wrapper">
            <button className="btn-update mt-3 btn-border text-white ">Update</button>
            </div>
            </div>
          </form>
        </dialog>
        <li>
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
        <li>
          <a className="flex items-start gap-3">
            {/* <FaTrash size={15} className="mt-1" /> */}
            <img src={CommentIcon} alt="" className="mt-1" />
            <div>
              <h2 className="font-bold text-[12px] capitalize">
                disable comments{" "}
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
        <li>
          <a className="flex items-start gap-3">
            <FaBolt size={15} className="mt-1" />
            {/* <img src={pin} alt="" className="mt-1" /> */}
            <div>
              <h2 className="font-bold text-[12px] capitalize">boost post</h2>
              <p className="font-[300] text-[11px] normal-case">
                add this post from the boosted list.
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PostFunction;
