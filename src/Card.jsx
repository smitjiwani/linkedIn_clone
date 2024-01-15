import { selectUser } from "./features/counter/userSlice";
import React from "react"
import './Card.css'
import { useSelector } from "react-redux";
function Card({name,disc,con}){
    const user = useSelector(selectUser);
    return(
        <div className="card">
            <div >
             <img className="pfp" src="https://media.licdn.com/dms/image/D4E12AQEud3Ll5MI7cQ/article-inline_image-shrink_1000_1488/0/1660833954461?e=1710374400&v=beta&t=wzjfG9a-lk6TnhGP8j6831L2CqcBy2aUVgFi2JoJA80" alt="" />
            </div>
            <h3>{name}</h3>
            <p>{disc}</p>
            <p>{con+" Mutual connection"}</p>
            <br></br>
            <div className="btn">
            <h3><i class="fa-solid fa-user"></i>+ Connect</h3>
            </div>
        </div>
    )
}
export default Card