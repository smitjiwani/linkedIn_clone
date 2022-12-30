import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { selectUser } from "./features/counter/userSlice";
import "./HeaderOption.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";


function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar src={user? user.photoURL || user.email[0]: <AccountCircleRoundedIcon/> }className="header__avatar">
          {user? user.email[0] :<AccountCircleRoundedIcon/>}
        </Avatar>
      )}

      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
