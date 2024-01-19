import { CenterFocusStrong } from "@mui/icons-material"
import React from "react"
function Box({h,w,p}){
    return(
        <div style={{height:h,width:w,backgroundColor:"white",textAlign:"center" , padding:"0rem", borderRadius:"1rem", margin:"1rem",}}> 
        {p}
        </div>
    )
    }
export default Box