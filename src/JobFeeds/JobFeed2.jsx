import React from "react"
import'../Jobs.css'
import Login from "../Login"
import Sidebar from "../Sidebar.js"
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import { Avatar } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

function JobFeed2 (){
    const user = useSelector(selectUser);

    return(<div style={{padding:".5rem"}}>

                <h3 style={{textAlign:"left"}}>Recomended For You</h3>
                <br></br>
                <p  style={{textAlign:"left"}}>Based on Your Profile and search history</p>
                <br></br>
                <div className="box">
                    <br></br>
                    <i class="fa-solid fa-suitcase" style={{fontSize:"5rem" ,color:"#F8C77E" ,margin:".5rem"}}></i>
                    <br></br>
                    <h3 style={{margin:"1rem"}}>Want more jobs?</h3>
                    <p>Click here to continue searching over 20 million jobs on Likedin</p>
                    <br></br>
                    <div className="btn" style={{fontSize:"1.2rem"}}>
                    <h3>Search</h3>
                </div>
                </div>
        </div>
       
    )
}
export default JobFeed2