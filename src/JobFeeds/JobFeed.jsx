import React from "react"
import'../Jobs.css'
import Login from "../Login"
import Sidebar from "../Sidebar.js"
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import { Avatar } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

function JobFeed (){
    const user = useSelector(selectUser);
    return(
        <div>
            <div className="img">
            <Avatar src={user.photoURL} className="sidebar__avatar">
        {user? user.email[0] :<AccountCircleRoundedIcon />}
        </Avatar>
        <br></br>
        </div>
        <h3>Hi {user.displayName}, are You hiring ?</h3>
        <br></br>
        <p> Post a free job and get the #Hiring frames on your profile.</p>
        <br></br>
        <div className="btns">
        <div className="btn" style={{width:"15.5rem" ,justifyContent:"center"}}>
            <h3>Yes,I'm hiring</h3>
            </div>
        
        <div className="btn" style={{width:"15.5rem",justifyContent:"center"}}>
        <h3>No,not right now</h3>
        </div>
        </div>    
        </div>
    )
}
export default JobFeed