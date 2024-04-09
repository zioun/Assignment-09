import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png';
import { FaPhoneAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const links = (
      <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
      </>
  )
  return (
    <div className="px-10 py-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div>
                {links}
              </div>
            </ul>
          </div>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex gap-5 px-1 text-[#A62F03] font-bold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex join-item gap-5">
            <div className="flex items-center gap-3 font-bold text-[16px]">
              <span className="text-[#A62F03]"><FaPhoneAlt /></span><p>+880 161-997-1997</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[30px] text-[#A62F03] cursor-pointer"><CgProfile /></span>
              <Link to="/login"><button className="bg-[#A62F03] text-white h-[40px] w-[100px] rounded-lg">Login</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
