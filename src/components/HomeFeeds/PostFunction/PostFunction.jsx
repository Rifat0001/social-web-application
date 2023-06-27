import { FaBolt, FaEllipsisH, FaPen, FaTrash } from "react-icons/fa";
import CommentIcon from "../../../assets/CreatePost/commenticons.png";
import OpenLink from '../../../assets/CreatePost/openLink.png'
import pin from '../../../assets/CreatePost/pin.png'
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
        <li>
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
              <h2 className="font-bold text-[12px] capitalize">
              pin post
              </h2>
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
              <h2 className="font-bold text-[12px] capitalize">
              boost post
              </h2>
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
