import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import "./Sidebar.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItems = (topic) => (
    <div className="sidebar__recentItems">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png"
          alt=""
        />
        <Avatar src={user.photoURL} className="sidebar__avatar">
        {user? user.email[0] :<AccountCircleRoundedIcon />}
        </Avatar>

        <h1>{user.displayName}</h1>
        <h3>{user.email}</h3>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__stat_number">2,345</p>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__stat__number">2,345</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("HTML5")}
        {recentItems("software dev")}
        {recentItems("jobs")}
      </div>
    </div>
  );
}

export default Sidebar;
