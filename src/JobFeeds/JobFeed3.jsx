import React from "react"
import'../Jobs.css'
import Login from "../Login"
import Sidebar from "../Sidebar.js"
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import { Avatar } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

function JobFeed3 (){
    const user = useSelector(selectUser);
    return(<>

    <div  style={{textAlign:"left",padding:".5rem"}}>

                <h2>Job seeker guidance</h2>
                <p>Recommended based on your activity</p>
                <br></br>
                <br></br>

                <h3>I want to improve my resume</h3>
                <br></br>
                <br></br>

                <h4>Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</h4>
                <br></br>

                <h3>Show more <i class="fa-solid fa-arrow-right" style={{color:"grey"}}></i></h3>
        </div>
        
        </>
    )
}
export default JobFeed3