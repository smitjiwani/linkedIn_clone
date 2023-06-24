import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/counter/userSlice";



function Header() {
  const dispatch = useDispatch();
  const [dropdown ,setDropDown] =useState(false)

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <>
    <span>
        {dropdown && <div onClick={() => { setDropDown(true) }} onMouseLeave={() => { setDropDown(false) }} className='header_drop'>
          <ul>
            <a href={'/'}><li className='p'>My Account</li></a>
            <a href={'/'}><li className='pp'>setting</li></a>
            <li onClick={logoutOfApp} className='ppp'>Logout</li>
          </ul>
        </div>}   
      </span>

    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="messaging" />
        <HeaderOption Icon={NotificationIcon} title="Notifications" />
        <span onClick={() => { setDropDown(true) }} >
             <HeaderOption avatar={true} onClick={dropdown}title="me" /> 
        </span>
      </div>
    </div>
    </>
  );
}

export default Header;
