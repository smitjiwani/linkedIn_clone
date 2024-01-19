import { useSelector } from "react-redux";
import React from "react"
import { flushSync } from "react-dom"
import "../Notifs.css"
import { selectUser } from "../features/counter/userSlice";
import { Avatar } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
function NotifsFeed4({}){
    const user = useSelector(selectUser);
    return(
       <div>
        <h4 style={{textAlign:"right" ,margin:"1rem"}}>Ad</h4>
        <p >Follow to get updates on green energy and mobility.</p>

        <div style={{display:"flex",textAlign:"center",justifyContent: "center"}}>
            <div style={{marginTop:"1rem"}}>
        <Avatar src={user.photoURL} className="sidebar__avatar">
        {user? user.email[0] :<AccountCircleRoundedIcon />}
        </Avatar>
        </div>
        <img src="data:image/png;base64,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"></img>
        </div>
        <h3 style={{fontSize:"16px"}}>Hitachi Social Innovation is POWERING GOOD</h3>
            <div className="btn" style={{fontSize:"14px"}}>
                    <h3>Follow</h3>
        </div>
       </div>
    )
}
export default NotifsFeed4