import React from "react"
import { flushSync } from "react-dom"
function Notifs({i,p,t,r,c}){
    return(
        <div style={{display:"flex",height:"6rem",width:"34.5rem",borderTopLeftRadius:(r),borderTopRightRadius:(r),backgroundColor:(c)}}>
        <img style={{borderRadius:"50%",margin:"1.5rem",width:"50px",height:"50px",backgroundSize:"cover",marginRight:"1rem"}} src={i}></img>
        <p style={{width:"420px" ,color:"black",marginTop:"1.5rem", textAlign:"left"}}>{p}</p>
        <p style={{position:"inherit" ,right:0}}>{t}</p>


        </div>
    )
}
export default Notifs