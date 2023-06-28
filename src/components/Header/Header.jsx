import logo from "../../assets/headLogo.png";
import text from "../../assets/SO INVERSED.png";
import plus from "../../assets/plus-icon.png";
import person from "../../assets/h-person.png";
import bell from "../../assets/bell-icon.png";
import msg from "../../assets/msg-icon.png";
import kevin from "../../assets/CreatePost/kevin.png";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import "./Header.css";
const Header = () => {
  return (
    <div className="navbar navborder bg-[#00072D] py-4 px-4">
      <div className="flex-1">
        <img src={logo} alt="" />
        <img src={text} className="mx-4" alt="" />
        <button className="f-b">
          <div className="flex justify-center">
            <img className="w-1/4" src={plus} alt="" />
          </div>
        </button>

        <p className="text-white text-xs mx-4">Create</p>
      </div>

      {/* search field  */}
      <div className="flex-none gap-2 ">
        {/* input field  */}
        <div className="form-control relative  flex">
          <div>
            <div className="search-icon absolute top-4 left-5">
              <MagnifyingGlassIcon className="w-6 text-white"></MagnifyingGlassIcon>
            </div>
            <input
              type="text"
              placeholder="Explore"
              className="head-input ps-16 text-xs"
            />
          </div>
        </div>

        {/* message icon button  */}

        <div className="dropdown dropdown-bottom dropdown-end">
          <button tabIndex={0} className="f-b mx-2">
            <div className="flex justify-center content-center mt-4">
              <img className="w-1/3" src={msg} alt="" />
            </div>

            <div className="btn-top-icon flex justify-center">
              <p className="xst">99+</p>
            </div>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[100] menu p-2 shadow bg-notification rounded-box w-[430px]"
          >
            <li className="text-white hover:text-white navborders">
              <div className="flex items-start gap-5">
                <img src={kevin} alt="" />
                <div className="flex justify-between items-start gap-[138px]">
                  <div className=" space-y-3">
                    <div>
                      <h2>Kevin Alexander </h2>
                      <p className="gradient-text">@kevinalexa11</p>
                    </div>
                    <p className="">Me : okok</p>
                  </div>
                  <div>5 m</div>
                </div>
              </div>
            </li>
            <li className="text-white navborders">
              <div className="flex items-start gap-5">
                <img src={kevin} alt="" />
                <div className="flex justify-between items-start gap-[138px]">
                  <div className=" space-y-3">
                    <div>
                      <h2>Kevin Alexander </h2>
                      <p className="gradient-text">@kevinalexa11</p>
                    </div>
                    <p className="">Me : okok</p>
                  </div>
                  <div>5 m</div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* bell icon button  */}

        <div>
          <button className="f-b mx-2">
            <div className="flex justify-center content-center mt-4">
              <img className="w-1/3" src={bell} alt="" />
            </div>

            <div className="btn-top-icon flex justify-center">
              <p className="xst">99+</p>
            </div>
          </button>
        </div>

        <div className="mx-4">
          <p className="text-white text-xs">Alexa Dain</p>
          <p className="t-g text-xs">@Alexadain1</p>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="btn btn-ghost btn-circle avatar ">
            <div className="w-10 rounded-full">
              <img src={person} />
            </div>
            <div className="d-a ">
              <ChevronDownIcon className="text-white " />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
