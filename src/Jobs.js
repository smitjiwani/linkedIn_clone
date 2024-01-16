import React from 'react'
import { Avatar } from "@mui/material";
import Header from './Header'
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import Login from './Login';
import Sidebar from './Sidebar';
import JobFeed from "./JobFeeds/JobFeed";
import  Box  from './Box';
import JobFeed1 from './JobFeeds/JobFeed1';
import JobFeed2 from './JobFeeds/JobFeed2';
import JobFeed3 from './JobFeeds/JobFeed3';



function Jobs() {
  const user = useSelector(selectUser);
  return (
    <div >
      {!user ? (
        <Login />
      ) : (

<>  
          <Header />
          <div className='jobs'>
          <Sidebar></Sidebar>
          <div className='feed'>
          <Box h=" 18rem" w=" 34.5rem" p={<JobFeed></JobFeed>}></Box>
          <Box h="12.5rem" w= "34.5rem" p={<JobFeed1></JobFeed1>}></Box>
          <Box h="19rem"  w= "34.5rem" p={<JobFeed2></JobFeed2>}></Box>
          </div>
          <Box h="16.5rem" w="18.5rem" p={<JobFeed3></JobFeed3>}></Box>
          </div>
        </>

       
        
      )}

    </div>
  )
}

export default Jobs
