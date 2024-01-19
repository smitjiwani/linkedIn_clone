import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import Login from './Login';
import NotifsFeed1 from './NotifsFeed/NotifsFeed1';
import NotifsFeed2 from './NotifsFeed/NotifsFeed2';
import NotifsFeed3 from './NotifsFeed/NotifsFeed3';
import NotifsFeed4 from './NotifsFeed/NotifsFeed4';


import "./Notifs.css"

import Box from './Box';
function Notifs() {
  const user = useSelector(selectUser);
  return (
    <div>
      {!user ? (
        <Login />
      ) : (
      <>
          <Header />
          <div className='notifs' style={{display:"flex",justifyContent:"center"}}>
          <Box h="6.5rem" w="14rem" p= {<NotifsFeed1></NotifsFeed1>}></Box>
          <div>
          <Box h="4rem" w="34.5rem" p= {<NotifsFeed2></NotifsFeed2>}></Box>
          <Box  h="50rem" w="34.5rem"  p={<NotifsFeed3></NotifsFeed3>}></Box>

          </div>
          <Box  h="250px" w="300px"  p={<NotifsFeed4></NotifsFeed4>}></Box>

          </div>

          </>
      
        
      )}

    </div>
  )
}

export default Notifs
