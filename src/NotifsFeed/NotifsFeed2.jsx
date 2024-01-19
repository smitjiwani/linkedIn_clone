import { Button } from "@mui/material"
import React from "react"
import { flushSync } from "react-dom"
function NotifsFeed2(){
    return(
        <div style={{display:"flex", textAlign:"left",alignItems:"center",padding:".75rem"}}>
        <Button style={{border:"#02754F .5px solid" , borderRadius:"1rem",backgroundColor:"#02754F",color:"white" ,marginRight:"1rem"}}>
            All
        </Button>
        <Button style={{border:"black .5px solid" , borderRadius:"1rem",backgroundColor:"white",color:"black",marginRight:"1rem"}}>
            My post
        </Button>
        <Button style={{border:"black .5px solid" , borderRadius:"1rem",backgroundColor:"white",color:"black",marginRight:"1rem"}}>
            Mentions
        </Button>

        </div>
    )
}
export default NotifsFeed2