import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/consfig';
import axios from 'axios';

const Nav = () => {

    const navigate = useNavigate()

    async function logOutHendller() {

        const res = await axios.post(BASE_URL + "logOut", {}, { withCredentials: true })
        navigate("/signUp")

    }
    return (
        <div>
            <div className="navbar bg-base-100 px-20 flex justify-between shadow-sm">
                <div className="">
                    <img className='h-10' src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/46/2022/08/Linkedin-Logo-e1660320077673-768x238.png" alt="" />
                </div>
                <div className="flex capitalize items-center gap-10">
                    <input type="text" placeholder="Search" className="input input-bordered w-24  md:w-96" />
                    <h1>home</h1>
                    <h1>message</h1>
                    <Link to="/connection">connection</Link>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>

                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to="/signin" className="justify-between">
                                    SignIn
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to="/signUp">SignUp</Link></li>
                            <li onClick={logOutHendller}><Link>Signout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
