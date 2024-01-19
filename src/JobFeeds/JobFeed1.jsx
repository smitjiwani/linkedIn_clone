import React from "react"
import'../Jobs.css'
import Login from "../Login"
import Sidebar from "../Sidebar.js"
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import { Avatar } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

function JobFeed1 (){
    const user = useSelector(selectUser);

    return(<div style={{padding:".5rem"}}>

        <h3 style={{textAlign:"left"}}>Suggested Job searches</h3>
        <br></br>
        <div className="btns" >
                <div className="btn" style={{fontSize:"14px"}}>
                <h3>President</h3>
                </div>
                <div className="btn" style={{fontSize:"14px"}}>             
                <h3>President Of Operations</h3>
                </div>
                <div className="btn" style={{fontSize:"14px"}}>
                <h3>Executive vice president</h3>
                </div>
                <div className="btn" style={{fontSize:"14px"}}>
                <h3>Senior President</h3>
                </div>
                <div className="btn" style={{fontSize:"14px"}}>
                <h3>Chief Operating President</h3>
                </div>
                <div className="btn" style={{fontSize:"14px"}}>
                <h3>Chair of Board Of Directors</h3>
                </div>
                <div className="btn" style={{fontSize:"14px"}}>
                <h3>Principal chief Executive Officer</h3>
                </div>
                
        </div>
        </div>
    )
}
export default JobFeed1