import React, { useState } from 'react';
import '../Style/Style.css'
import logo from '../../img/logo.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { MdDashboardCustomize, MdOutlineClose } from 'react-icons/md';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loader from './Loader';

const Header = () => {
    let [toggle, setToggle] = useState(false);
    const [user, loading] = useAuthState(auth);
    let navigat = useNavigate();

    // console.log(user);
    const navBtnHndle = () => {
        setToggle(!toggle)
    }

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigat('/login')
                toast.success('Logout Succes!')
            })
    }

    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className='header-container fixed top-0 w-full '>
            <nav
                className='flex justify-center items-start  md:justify-between md:px-32 px-5 md:items-center'
            >
                {
                    user &&
                    <label for="dashboard-drower" tabindex="1" class="md:hidden absolute left-6  top-[22px]">
                        <MdDashboardCustomize className='h-5 w-5'></MdDashboardCustomize>
                    </label>
                }
                <img className='sm:w-52 w-48' src={logo} alt="" />
                <span onClick={navBtnHndle} className='md:hidden absolute right-6  top-[22px]'>{toggle ? <MdOutlineClose></MdOutlineClose> : <GoThreeBars></GoThreeBars>}</span>
                <ul onClick={navBtnHndle} className={`flex flex-col text-center md:justify-end z-10  md:flex-row md:top-0 left-0 w-full md:relative md:opacity-100  absolute  py-4 md:py-0 duration-500 ${toggle ? " opacity-100  top-14" : " top-[-250px] opacity-0"}`}>
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/"}>Home</NavLink>
                    {
                        user && <>
                            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/dashboard"}>Dashboard</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/about"}>About</NavLink>
                        </>
                    }
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/blogs"}>Blogs</NavLink>

                    {user ?
                        <button onClick={handleLogout} className='uppercase my-0.5 md:my-0 text-left   mx-auto md:mx-0 md:pb-0.5' >LogOut</button>
                        :
                        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/login"}>Login</NavLink>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;