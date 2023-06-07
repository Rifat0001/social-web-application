import logo from '../../assets/headLogo.png'
import text from '../../assets/SO INVERSED.png'
import plus from '../../assets/plus-icon.png'
import person from '../../assets/h-person.png'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

import './Header.css'
const Header = () => {
    return (
        <div className="navbar bg-[#00072D] px-4">
            <div className="flex-1">
                <img src={logo} alt="" />
                <img src={text} className='mx-4' alt="" />
                <button className='bg-[#050C36] shadow-2xl rounded-full w-10 h-10 f-b'>
                    <div className='flex justify-center'>
                        <img className='w-1/4' src={plus} alt="" />
                    </div>
                </button>

                <p className='text-white text-xs mx-4'>Create</p>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                        <div className="w-10 rounded-full">
                            <img src={person} />
                        </div>
                        <div className='d-a '>
                            <ChevronDownIcon className="text-white " />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;